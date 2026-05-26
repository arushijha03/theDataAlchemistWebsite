"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { IconGithub } from "./PortfolioIcons";
import { useEffect } from "react";
import type { Project } from "../data/projects";
import { tierLabels } from "../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  const tier = project ? tierLabels[project.tier] : null;

  return (
    <AnimatePresence>
      {project && tier && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="fixed inset-x-4 top-[5vh] bottom-[5vh] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-2xl lg:max-w-3xl z-50 bg-paper border border-ink/15 rounded-sm shadow-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10 shrink-0">
              <span
                className={`font-mono text-xs px-2 py-1 rounded-full border ${tier.className}`}
              >
                {tier.emoji} {tier.label}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-sm text-ink hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Close project details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 flex-1">
              <h2
                id="project-modal-title"
                className="font-display text-3xl text-ink mb-2"
              >
                {project.name}
              </h2>
              <p className="font-body text-muted mb-8">{project.tagline}</p>

              <Section title="Problem">{project.problem}</Section>
              <Section title="Approach">{project.approach}</Section>

              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted mb-3 mt-8">
                Results
              </h3>
              <ul className="space-y-3 mb-8">
                {project.results.map((r) => (
                  <li
                    key={r}
                    className="font-body text-muted leading-relaxed pl-4 border-l-2 border-accent/40"
                  >
                    {r}
                  </li>
                ))}
              </ul>

              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted mb-3">
                What I learned
              </h3>
              <p className="font-body text-muted leading-relaxed italic border-l-2 border-ink/15 pl-4">
                End-to-end ownership matters: the hardest phases are problem framing and
                data quality—not the final model.fit() call. This project reinforced
                measuring retrieval and business metrics before optimizing architecture.
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 border border-ink/15 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 px-6 py-4 border-t border-ink/10 shrink-0 bg-surface/40">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-ink hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <IconGithub className="w-4 h-4" />
                View on GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-ink hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.demoLabel ?? "Live demo"}
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <div className="mb-6">
      <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted mb-2">
        {title}
      </h3>
      <p className="font-body text-muted leading-relaxed">{children}</p>
    </div>
  );
}
