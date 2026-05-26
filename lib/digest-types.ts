export interface Prerequisite {
  text: string;
  url: string;
}

export interface DigestArticle {
  title: string;
  source: string;
  sourceUrl: string;
  category: "Research" | "Industry" | "Tools" | "Policy";
  prerequisites: Prerequisite[];
  glossary: Record<string, string>;
  summary: string;
  whyItMatters: string;
  tags: string[];
}

export interface WeeklyDigest {
  date: string;
  weekOf: string;
  title: string;
  summary: string;
  articles: DigestArticle[];
}

export const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  Research: {
    bg: "bg-pastel-lavender/30 dark:bg-pastel-lavender-deep/20",
    text: "text-pastel-lavender-deep dark:text-pastel-lavender",
    border: "border-pastel-lavender-deep/30",
  },
  Industry: {
    bg: "bg-pastel-mint/30 dark:bg-pastel-mint-deep/20",
    text: "text-pastel-mint-deep dark:text-pastel-mint",
    border: "border-pastel-mint-deep/30",
  },
  Tools: {
    bg: "bg-pastel-sky/30 dark:bg-pastel-sky-deep/20",
    text: "text-pastel-sky-deep dark:text-pastel-sky",
    border: "border-pastel-sky-deep/30",
  },
  Policy: {
    bg: "bg-pastel-peach/30 dark:bg-pastel-peach-deep/20",
    text: "text-pastel-peach-deep dark:text-pastel-peach",
    border: "border-pastel-peach-deep/30",
  },
};
