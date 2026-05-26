"use client";

import type { DigestArticle } from "@/lib/digest-types";
import { Fragment } from "react";

function GlossaryText({ text, glossary }: { text: string; glossary: Record<string, string> }) {
  if (!glossary || Object.keys(glossary).length === 0) return <>{text}</>;

  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");

  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const matchKey = terms.find((t) => t.toLowerCase() === part.toLowerCase());
        if (!matchKey) return <Fragment key={i}>{part}</Fragment>;

        return (
          <span key={i} className="glossary-term relative inline cursor-help">
            <span className="border-b border-dashed border-text-secondary-light/40 dark:border-text-secondary-dark/40">
              {part}
            </span>
            <span
              role="tooltip"
              className="glossary-tooltip pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark px-3 py-2 text-xs leading-relaxed shadow-lg opacity-0 transition-opacity duration-200 z-50"
            >
              <span className="font-semibold">{matchKey}</span>
              <span className="block mt-0.5 text-text-secondary-light dark:text-text-secondary-dark">{glossary[matchKey]}</span>
              <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-border-light dark:border-t-border-dark" />
            </span>
          </span>
        );
      })}
    </>
  );
}

export function ArticleCard({ article, index }: { article: DigestArticle; index: number }) {
  const glossary = article.glossary ?? {};
  const prerequisites = article.prerequisites ?? [];

  return (
    <article className="rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 transition-all duration-200">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-md border border-border-light dark:border-border-dark text-xs font-bold text-text-secondary-light dark:text-text-secondary-dark shrink-0">
            {index + 1}
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark">
            {article.category}
          </span>
        </div>
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors shrink-0"
        >
          {article.source} ↗
        </a>
      </div>

      <h3 className="text-lg font-bold mb-3 leading-snug">
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text-secondary-light dark:hover:text-text-secondary-dark transition-colors"
        >
          {article.title}
        </a>
      </h3>

      {/* Prerequisites */}
      {prerequisites.length > 0 && (
        <div className="rounded-xl bg-pastel-rose/15 dark:bg-pastel-rose-deep/10 border border-pastel-rose-deep/20 p-3.5 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-pastel-rose-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xs font-semibold text-pastel-rose-deep uppercase tracking-wide">Prerequisites</span>
          </div>
          <ul className="space-y-1">
            {prerequisites.map((prereq) => {
              const item = typeof prereq === "string" ? { text: prereq, url: "" } : prereq;
              return (
                <li key={item.text} className="flex items-start gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pastel-rose-deep/40 shrink-0" />
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-pastel-rose-deep/30 underline-offset-2 hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
                    >
                      {item.text}
                      <span className="inline-block ml-1 text-[10px] opacity-50">↗</span>
                    </a>
                  ) : (
                    item.text
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Summary with glossary highlighting */}
      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-4">
        <GlossaryText text={article.summary} glossary={glossary} />
      </p>

      {/* Why it matters */}
      <div className="rounded-xl bg-pastel-lemon/20 dark:bg-pastel-lemon-deep/10 border border-pastel-lemon-deep/20 p-4 mb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <svg className="w-4 h-4 text-pastel-lemon-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-xs font-semibold text-pastel-lemon-deep uppercase tracking-wide">Why it matters</span>
        </div>
        <p className="text-sm leading-relaxed">
          <GlossaryText text={article.whyItMatters} glossary={glossary} />
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export function DigestSummaryCard({
  date,
  weekOf,
  title,
  summary,
  articleCount,
  categories,
}: {
  date: string;
  weekOf: string;
  title: string;
  summary: string;
  articleCount: number;
  categories: string[];
}) {
  return (
    <div className="group rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 transition-all duration-200 hover:border-text-secondary-light/30 dark:hover:border-text-secondary-dark/30 cursor-pointer">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark px-2.5 py-1 rounded-full border border-border-light dark:border-border-dark">
          {weekOf}
        </span>
        <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
          {articleCount} articles
        </span>
      </div>

      <h3 className="text-lg font-bold mb-2 leading-snug">
        {title}
      </h3>

      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-4">
        {summary}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {categories.map((cat) => (
          <span
            key={cat}
            className="text-xs font-medium px-2 py-0.5 rounded-full border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}
