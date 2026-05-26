"use client";

import { experience } from "../data/experience";
import { AnimatedSection } from "./AnimatedSection";

export function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="px-6 sm:px-10 lg:px-16 py-20 lg:py-28"
    >
      <div className="max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-3">
          Experience
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-ink mb-14 max-w-xl">
          Shipping systems that move metrics
        </h2>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
          {experience.map((role, index) => (
            <article
              key={role.company}
              className={`grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 ${
                index > 0 ? "border-t border-ink/10" : ""
              }`}
            >
              <div className="lg:col-span-4">
                <p className="font-mono text-sm text-muted mb-1">{role.period}</p>
                <h3 className="font-display text-2xl text-ink">{role.company}</h3>
                <p className="font-body text-lg text-ink/80 mt-1">{role.title}</p>
                <p className="font-body text-sm text-muted mt-2">{role.domain}</p>
              </div>

              <div className="lg:col-span-8">
                <ul className="space-y-4">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 48)}
                      className="font-body text-muted leading-relaxed pl-4 border-l-2 border-ink/10"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {role.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded-full border border-ink/15 text-ink/80 bg-paper"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
