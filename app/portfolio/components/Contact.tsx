"use client";

import { Mail } from "lucide-react";
import { IconGithub, IconLinkedin } from "./PortfolioIcons";
import { useState } from "react";
import { profile } from "../data/stats";
import { AnimatedSection } from "./AnimatedSection";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`Portfolio outreach from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <AnimatedSection
      id="contact"
      className="px-6 sm:px-10 lg:px-16 py-20 lg:py-28 bg-ink text-paper"
    >
      <div className="max-w-6xl grid lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50 mb-3">
            Contact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl mb-6">
            Let&apos;s build something measurable
          </h2>
          <p className="font-body text-paper/70 leading-relaxed mb-8 max-w-md">
            Open to {profile.targetRoles.join(", ")} roles. Based in{" "}
            {profile.location} — open to remote and relocation.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 font-body text-paper hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Mail className="w-5 h-5" aria-hidden />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-paper hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <IconLinkedin className="w-5 h-5" />
              linkedin.com/in/arushi-jha
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-paper hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <IconGithub className="w-5 h-5" />
              github.com/arushijha03
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="font-mono text-xs text-paper/60 block mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full px-4 py-2.5 bg-paper/10 border border-paper/20 rounded-sm text-paper font-body placeholder:text-paper/40 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="font-mono text-xs text-paper/60 block mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-2.5 bg-paper/10 border border-paper/20 rounded-sm text-paper font-body placeholder:text-paper/40 resize-y focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              placeholder="What would you like to discuss?"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-accent text-ink font-body text-sm font-semibold rounded-sm hover:bg-accent/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
          >
            {submitted ? "Opening your email client…" : "Send message"}
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}
