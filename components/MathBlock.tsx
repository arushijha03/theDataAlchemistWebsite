"use client";

import katex from "katex";
import { useMemo } from "react";

interface MathBlockProps {
  tex: string;
  display?: boolean;
}

export function MathBlock({ tex, display = true }: MathBlockProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, {
        displayMode: display,
        throwOnError: false,
        trust: true,
      });
    } catch {
      return `<span class="text-red-500">Error rendering: ${tex}</span>`;
    }
  }, [tex, display]);

  if (display) {
    return (
      <div
        className="my-4 overflow-x-auto py-3 px-4 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
