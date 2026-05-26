"use client";

import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import { IconGithub } from "./PortfolioIcons";
import { profile } from "../data/stats";
import { AnimatedSection } from "./AnimatedSection";

export function Hero() {
  return (
    <AnimatedSection className="relative min-h-[88vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-16 pb-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, #11111108 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-6">
          {profile.brand} · {profile.location}
        </p>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink leading-[1.05] tracking-tight mb-8">
          {profile.name}
        </h1>

        <p className="font-body text-lg text-muted leading-relaxed max-w-2xl mb-10">
          {profile.summary}
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper font-body text-sm font-medium rounded-sm hover:bg-ink/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View Projects
            <ArrowDown className="w-4 h-4" aria-hidden />
          </Link>
          <a
            href={profile.resumeHref}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink/20 text-ink font-body text-sm font-medium rounded-sm hover:border-accent hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Download className="w-4 h-4" aria-hidden />
            Download Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink/20 text-ink font-body text-sm font-medium rounded-sm hover:border-accent hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <IconGithub className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      <p className="absolute bottom-8 left-6 sm:left-10 lg:left-16 font-mono text-xs text-muted">
        {profile.tagline}
      </p>
    </AnimatedSection>
  );
}
