"use client";

import { type ReactNode } from "react";

interface ModelSection {
  id: string;
  title: string;
}

const MODEL_SECTIONS: ModelSection[] = [
  { id: "overview", title: "Overview" },
  { id: "intuition", title: "Intuition" },
  { id: "math", title: "Mathematical Formulation" },
  { id: "linalg", title: "Linear Algebra View" },
  { id: "stats", title: "Statistical View" },
  { id: "when-to-use", title: "When to Use" },
  { id: "when-not-to-use", title: "When NOT to Use" },
  { id: "prerequisites", title: "Prerequisites" },
  { id: "workflow", title: "Workflow" },
  { id: "evaluation", title: "Evaluation" },
  { id: "extensions", title: "Extensions" },
  { id: "connections", title: "Connections" },
  { id: "visualizations", title: "Visualizations" },
];

function SectionNav() {
  return (
    <nav className="hidden xl:block fixed right-8 top-32 w-52">
      <h4 className="text-xs font-semibold uppercase tracking-wide text-text-secondary-light dark:text-text-secondary-dark mb-3">
        On this page
      </h4>
      <ul className="space-y-1.5 border-l-2 border-border-light dark:border-border-dark">
        {MODEL_SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block pl-3 py-1 text-xs text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:border-l-2 hover:border-pastel-lavender-deep hover:-ml-[2px] transition-all"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface ModelPageLayoutProps {
  title: string;
  type: string;
  tagColor: string;
  children: ReactNode;
}

export function ModelPageLayout({ title, type, tagColor, children }: ModelPageLayoutProps) {
  return (
    <div className="relative">
      <SectionNav />
      <div className="max-w-4xl">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">{title}</h1>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColor}`}>
              {type}
            </span>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-pastel-lavender-deep to-pastel-sky-deep rounded-full" />
        </header>
        {children}
      </div>
    </div>
  );
}

interface ModelSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function ModelSection({ id, title, children }: ModelSectionProps) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b border-border-light dark:border-border-dark">
        {title}
      </h2>
      {children}
    </section>
  );
}
