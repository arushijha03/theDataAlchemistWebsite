"use client";

import { skillCategories } from "../data/skills";
import { AnimatedSection } from "./AnimatedSection";

export function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="px-6 sm:px-10 lg:px-16 py-20 lg:py-28"
    >
      <div className="max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-3">
          Skills
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-ink mb-14 max-w-xl">
          Tools I reach for—and why
        </h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="font-body text-lg font-semibold text-ink mb-4 pb-2 border-b border-ink/10">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`font-mono rounded-full border transition-colors ${
                      skill.emphasis === "primary"
                        ? "text-sm px-3.5 py-1.5 border-ink/20 bg-surface text-ink font-medium"
                        : "text-xs px-2.5 py-1 border-ink/10 text-muted"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
