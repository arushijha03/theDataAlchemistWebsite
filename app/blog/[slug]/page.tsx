import Link from "next/link";
import { notFound } from "next/navigation";
import { getDigestBySlug, getAdjacentDigests, getAllDigestSlugs } from "@/lib/digest";
import { ArticleCard } from "@/components/WeeklyDigest";

export function generateStaticParams() {
  return getAllDigestSlugs().map((slug) => ({ slug }));
}

export default async function DigestPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const digest = getDigestBySlug(slug);
  if (!digest) notFound();

  const { prev, next } = getAdjacentDigests(slug);

  const categoryCounts = digest.articles.reduce<Record<string, number>>((acc, a) => {
    acc[a.category] = (acc[a.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark mb-8 pt-4">
        <Link href="/" className="hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <Link href="/blog" className="hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors">
          Weekly Digest
        </Link>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span>{digest.weekOf}</span>
      </nav>

      {/* Header */}
      <section className="mb-10">
        <span className="inline-block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark px-3 py-1 rounded-full border border-border-light dark:border-border-dark mb-4">
          {digest.weekOf}
        </span>

        <h1 className="text-3xl font-extrabold mb-4 leading-tight">
          {digest.title}
        </h1>

        <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed max-w-3xl mb-6">
          {digest.summary}
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary-light dark:text-text-secondary-dark">
          <span>{digest.articles.length} articles</span>
          {Object.entries(categoryCounts).map(([cat, count]) => (
            <span
              key={cat}
              className="px-2 py-0.5 rounded-full border border-border-light dark:border-border-dark"
            >
              {count} {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="space-y-6 mb-12">
        {digest.articles.map((article, i) => (
          <ArticleCard key={article.title} article={article} index={i} />
        ))}
      </section>

      {/* Navigation */}
      <nav className="flex items-center justify-between border-t border-border-light dark:border-border-dark pt-6 pb-4">
        {prev ? (
          <Link
            href={`/blog/${prev}`}
            className="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous Week
          </Link>
        ) : <div />}
        {next ? (
          <Link
            href={`/blog/${next}`}
            className="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
          >
            Next Week
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : <div />}
      </nav>
    </div>
  );
}
