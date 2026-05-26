import Parser from "rss-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

// ── Configuration ──────────────────────────────────────────────────────────────

const RSS_FEEDS = [
  { name: "arXiv CS.AI", url: "https://rss.arxiv.org/rss/cs.AI" },
  { name: "arXiv CS.LG", url: "https://rss.arxiv.org/rss/cs.LG" },
  { name: "Google AI Blog", url: "https://blog.google/technology/ai/rss/" },
  { name: "OpenAI Blog", url: "https://openai.com/blog/rss.xml" },
  { name: "Hugging Face Blog", url: "https://huggingface.co/blog/feed.xml" },
  { name: "MIT Technology Review AI", url: "https://www.technologyreview.com/topic/artificial-intelligence/feed" },
  { name: "The Batch (deeplearning.ai)", url: "https://www.deeplearning.ai/the-batch/feed/" },
  { name: "Towards Data Science", url: "https://towardsdatascience.com/feed" },
];

const MAX_ARTICLES_TO_SUMMARIZE = 20;
const FINAL_ARTICLE_COUNT = 6;
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

// ── RSS Fetching ───────────────────────────────────────────────────────────────

interface RawArticle {
  title: string;
  link: string;
  source: string;
  pubDate: Date;
  snippet: string;
}

async function fetchAllFeeds(): Promise<RawArticle[]> {
  const parser = new Parser({ timeout: 15000 });
  const cutoff = new Date(Date.now() - SEVEN_DAYS_MS);
  const articles: RawArticle[] = [];

  const results = await Promise.allSettled(
    RSS_FEEDS.map(async (feed) => {
      try {
        const parsed = await parser.parseURL(feed.url);
        return (parsed.items || []).map((item) => ({
          title: item.title?.trim() || "Untitled",
          link: item.link || "",
          source: feed.name,
          pubDate: item.pubDate ? new Date(item.pubDate) : new Date(),
          snippet: (item.contentSnippet || item.content || "").slice(0, 500),
        }));
      } catch {
        console.warn(`  [skip] Could not fetch ${feed.name}`);
        return [];
      }
    })
  );

  for (const result of results) {
    if (result.status === "fulfilled") {
      articles.push(...result.value);
    }
  }

  return articles
    .filter((a) => a.pubDate >= cutoff && a.title !== "Untitled")
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
    .slice(0, MAX_ARTICLES_TO_SUMMARIZE);
}

// ── Gemini Summarization ───────────────────────────────────────────────────────

async function summarizeWithGemini(articles: RawArticle[]): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY environment variable is required");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const articleList = articles
    .map(
      (a, i) =>
        `${i + 1}. [${a.source}] "${a.title}"\n   URL: ${a.link}\n   Published: ${a.pubDate.toISOString().split("T")[0]}\n   Snippet: ${a.snippet}`
    )
    .join("\n\n");

  const today = new Date();
  const weekAgo = new Date(today.getTime() - SEVEN_DAYS_MS);
  const weekOfStr = `${weekAgo.toLocaleDateString("en-US", { month: "long", day: "numeric" })} – ${today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;

  const prompt = `You are an AI/Data Science newsletter editor. Your audience is data scientists and ML engineers who want to stay current but don't have time to read everything.

Below are ${articles.length} recent articles from the past week (${weekOfStr}). Select the ${FINAL_ARTICLE_COUNT} most important and diverse developments, then produce a JSON digest.

ARTICLES:
${articleList}

INSTRUCTIONS:
1. Pick the ${FINAL_ARTICLE_COUNT} most significant articles that cover different aspects (research breakthroughs, industry news, new tools, policy/regulation).
2. For each, write a plain-language summary (3-4 sentences) that a smart person without deep ML knowledge could understand.
3. Write a "whyItMatters" explanation (1-2 sentences) on the real-world significance.
4. Categorize each as exactly one of: "Research", "Industry", "Tools", "Policy".
5. Add 2-4 relevant tags per article.
6. Add a "prerequisites" array of objects, each with "text" (a short description of what background knowledge helps) and "url" (a real, reputable external link where someone can learn that prerequisite — use well-known sources like 3Blue1Brown, Google ML Crash Course, IBM Think, Hugging Face blog, Wikipedia, official docs, etc.). Include 1-3 prerequisites per article. For articles needing no background, use {"text": "No technical background required", "url": ""}.
7. Add a "glossary" object mapping technical terms (like "GPU", "transformer", "fine-tune", "RAG", etc.) that appear in your summary or whyItMatters text to a concise 1-2 sentence plain-language definition. Include 3-6 terms per article. Only define terms that actually appear in the summary or whyItMatters.
8. Write a 2-3 sentence overall summary of the week.
9. Create a catchy but informative title for the digest.

Respond with ONLY valid JSON in this exact format (no markdown, no backticks):
{
  "date": "${today.toISOString().split("T")[0]}",
  "weekOf": "${weekOfStr}",
  "title": "...",
  "summary": "...",
  "articles": [
    {
      "title": "...",
      "source": "SOURCE_NAME from the article",
      "sourceUrl": "URL from the article",
      "category": "Research|Industry|Tools|Policy",
      "prerequisites": [{"text": "...", "url": "https://..."}],
      "glossary": { "term": "definition", "another term": "definition" },
      "summary": "...",
      "whyItMatters": "...",
      "tags": ["...", "..."]
    }
  ]
}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return text;
}

// ── Main ───────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🔍 Fetching RSS feeds...");
  const articles = await fetchAllFeeds();
  console.log(`   Found ${articles.length} articles from the past week`);

  if (articles.length === 0) {
    console.log("   No recent articles found. Skipping digest generation.");
    process.exit(0);
  }

  console.log("🤖 Sending to Gemini for summarization...");
  const rawJson = await summarizeWithGemini(articles);

  let digest;
  try {
    const cleaned = rawJson.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    digest = JSON.parse(cleaned);
  } catch (e) {
    console.error("Failed to parse Gemini response as JSON:");
    console.error(rawJson);
    process.exit(1);
  }

  const outDir = path.join(process.cwd(), "content", "weekly-digest");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, `${digest.date}.json`);
  fs.writeFileSync(outPath, JSON.stringify(digest, null, 2) + "\n");
  console.log(`✅ Digest written to ${outPath}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
