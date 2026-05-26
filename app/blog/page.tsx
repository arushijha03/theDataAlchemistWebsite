import Link from "next/link";
import { getAllDigests } from "@/lib/digest";
import { DigestSummaryCard } from "@/components/WeeklyDigest";

export default function BlogPage() {
  const digests = getAllDigests();
  const uniqueCategories = (articles: { category: string }[]) =>
    [...new Set(articles.map((a) => a.category))];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <section className="mb-12 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors mb-6"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Home
        </Link>

        <h1 className="text-4xl font-extrabold mb-3">
          Weekly AI Digest
        </h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl leading-relaxed mb-2">
          Staying current with AI and Data Science — one week at a time. Each digest distills
          the most important developments into plain-language summaries so you can stay
          informed without drowning in noise.
        </p>
        <div className="flex items-center gap-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Updated every Sunday
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            {digests.length} {digests.length === 1 ? "edition" : "editions"}
          </span>
        </div>
      </section>

      {/* Digest List */}
      {digests.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-border-light/50 dark:bg-border-dark/50 flex items-center justify-center">
            <svg className="w-8 h-8 text-text-secondary-light dark:text-text-secondary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">First edition coming soon</h3>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            The weekly digest will appear here every Sunday.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {digests.map((digest) => (
            <Link key={digest.date} href={`/blog/${digest.date}`}>
              <DigestSummaryCard
                date={digest.date}
                weekOf={digest.weekOf}
                title={digest.title}
                summary={digest.summary}
                articleCount={digest.articles.length}
                categories={uniqueCategories(digest.articles)}
              />
            </Link>
          ))}
        </div>
      )}

      {/* Info Footer */}
      <div className="mt-12 rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
        <h3 className="font-bold mb-2">How this works</h3>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
          Every Sunday, an automated pipeline scans trusted AI and Data Science sources —
          arXiv, Google AI Blog, Hugging Face, OpenAI, MIT Technology Review, and more.
          The top developments are summarized in plain language and published here so you
          can stay informed in under 5 minutes.
        </p>
      </div>
    </div>
  );
}
