"use client";

import { useState, type ReactNode } from "react";

type DepthLevel = "intuition" | "formulation" | "deep-dive";

const levelConfig: Record<DepthLevel, { label: string; color: string; darkColor: string; description: string }> = {
  intuition: {
    label: "Intuition",
    color: "border-pastel-mint-deep bg-pastel-mint/30",
    darkColor: "dark:border-pastel-mint-deep dark:bg-pastel-mint-deep/10",
    description: "Plain English explanation",
  },
  formulation: {
    label: "Mathematical Formulation",
    color: "border-pastel-sky-deep bg-pastel-sky/30",
    darkColor: "dark:border-pastel-sky-deep dark:bg-pastel-sky-deep/10",
    description: "Equations and formal definitions",
  },
  "deep-dive": {
    label: "Deep Dive",
    color: "border-pastel-lavender-deep bg-pastel-lavender/30",
    darkColor: "dark:border-pastel-lavender-deep dark:bg-pastel-lavender-deep/10",
    description: "Derivations, proofs, and advanced theory",
  },
};

interface LayeredContentProps {
  level: DepthLevel;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function LayeredContent({ level, children, defaultOpen = true }: LayeredContentProps) {
  const config = levelConfig[level];
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`my-4 border-l-4 rounded-r-lg ${config.color} ${config.darkColor} transition-all duration-200`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">{config.label}</span>
          <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
            — {config.description}
          </span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-4 prose prose-sm dark:prose-invert max-w-none">
          {children}
        </div>
      )}
    </div>
  );
}

interface DepthToggleProps {
  activeLevel: DepthLevel | "all";
  onChange: (level: DepthLevel | "all") => void;
}

export function DepthToggle({ activeLevel, onChange }: DepthToggleProps) {
  const levels: (DepthLevel | "all")[] = ["all", "intuition", "formulation", "deep-dive"];
  const labels: Record<string, string> = {
    all: "All Layers",
    intuition: "Intuition",
    formulation: "Math",
    "deep-dive": "Deep Dive",
  };

  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onChange(level)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${activeLevel === level
              ? "bg-pastel-lavender-deep text-white shadow-md"
              : "bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-pastel-lavender-deep"
            }
          `}
        >
          {labels[level]}
        </button>
      ))}
    </div>
  );
}
