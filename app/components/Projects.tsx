"use client";

import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { AnimatedSection } from "./AnimatedSection";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <AnimatedSection
        id="projects"
        className="px-6 sm:px-10 lg:px-16 py-20 lg:py-28 bg-surface/30"
      >
        <div className="max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-3">
            Projects
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink mb-4 max-w-xl">
            Systems built, not tutorials followed
          </h2>
          <p className="font-body text-muted max-w-2xl mb-14 leading-relaxed">
            From multi-agent RAG pipelines to million-row aviation models—each project
            pairs measurable outcomes with the full data lifecycle.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelected}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
