"use client";

import { ExternalLink } from "lucide-react";
import { IconGithub } from "./PortfolioIcons";
import type { Project } from "../data/projects";
import { tierLabels } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const tier = tierLabels[project.tier];

  return (
    <article
      className="group flex flex-col h-full bg-paper border border-ink/10 rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_30px_-12px_rgba(17,17,17,0.12)] focus-within:border-accent/50"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <span
          className={`font-mono text-xs px-2 py-1 rounded-full border ${tier.className}`}
        >
          {tier.emoji} {tier.label}
        </span>
      </div>

      <h3 className="font-display text-2xl text-ink mb-2">{project.name}</h3>
      <p className="font-body text-sm text-muted leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] px-2 py-0.5 bg-surface text-ink/70 rounded-sm"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 5 && (
          <span className="font-mono text-[10px] px-2 py-0.5 text-muted">
            +{project.stack.length - 5}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-ink/10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-body text-sm text-ink hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={(e) => e.stopPropagation()}
        >
          <IconGithub className="w-4 h-4" />
          Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-sm text-ink hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" aria-hidden />
            Demo
          </a>
        )}
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="ml-auto font-body text-sm font-medium text-ink underline-offset-4 hover:underline hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Deep dive →
        </button>
      </div>
    </article>
  );
}
