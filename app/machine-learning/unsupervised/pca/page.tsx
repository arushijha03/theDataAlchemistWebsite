"use client";

import { type ReactNode, useState } from "react";

type Perspective = "cs" | "stats" | "linalg";

const perspectives: { id: Perspective; label: string; color: string; activeColor: string }[] = [
  { id: "cs", label: "Computer Science", color: "border-pastel-peach-deep/40", activeColor: "bg-pastel-peach-deep text-white" },
  { id: "stats", label: "Statistics", color: "border-pastel-rose-deep/40", activeColor: "bg-pastel-rose-deep text-white" },
  { id: "linalg", label: "Linear Algebra", color: "border-pastel-periwinkle-deep/40", activeColor: "bg-pastel-periwinkle-deep text-white" },
];

const perspectiveCardColors: Record<Perspective, string> = {
  cs: "bg-pastel-peach/30 dark:bg-pastel-peach-deep/10 border-pastel-peach-deep/40",
  stats: "bg-pastel-rose/30 dark:bg-pastel-rose-deep/10 border-pastel-rose-deep/40",
  linalg: "bg-pastel-periwinkle/30 dark:bg-pastel-periwinkle-deep/10 border-pastel-periwinkle-deep/40",
};

function Sub({ title }: { title: string }) {
  return (
    <div className="mb-3">
      <h3 className="text-sm font-semibold mb-1">{title}</h3>
      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark italic">Content coming soon.</p>
    </div>
  );
}

function FrameworkCard({
  id,
  title,
  color,
  children,
}: {
  id: string;
  title: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className={`rounded-2xl border p-6 flex flex-col ${color}`}>
      <h2 className="text-lg font-bold mb-4 pb-2 border-b border-black/10 dark:border-white/10">
        {title}
      </h2>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function PerspectiveContent({ perspective }: { perspective: Perspective }) {
  if (perspective === "cs") {
    return (
      <div className={`rounded-2xl border p-6 ${perspectiveCardColors.cs}`}>
        <h2 className="text-lg font-bold mb-4 pb-2 border-b border-black/10 dark:border-white/10">
          Computer Science Perspective
        </h2>
        <Sub title="PCA as Dimensionality Reduction" />
        <Sub title="Computational Complexity" />
        <Sub title="Algorithm: Power Iteration / SVD" />
        <Sub title="Data Structures &amp; Implementation" />
        <Sub title="Scalability Considerations" />
        <Sub title="Use in Pipelines &amp; Feature Engineering" />
      </div>
    );
  }

  if (perspective === "stats") {
    return (
      <div className={`rounded-2xl border p-6 ${perspectiveCardColors.stats}`}>
        <h2 className="text-lg font-bold mb-4 pb-2 border-b border-black/10 dark:border-white/10">
          Statistics Perspective
        </h2>
        <Sub title="PCA as Variance Maximization" />
        <Sub title="Covariance Matrix &amp; Its Role" />
        <Sub title="Explained Variance Ratio" />
        <Sub title="Assumptions: Linearity, Scale, Normality" />
        <Sub title="Scree Plot &amp; Elbow Method" />
        <Sub title="Relationship to Factor Analysis" />
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border p-6 ${perspectiveCardColors.linalg}`}>
      <h2 className="text-lg font-bold mb-4 pb-2 border-b border-black/10 dark:border-white/10">
        Linear Algebra Perspective
      </h2>
      <Sub title="Eigendecomposition of Covariance Matrix" />
      <Sub title="Eigenvectors as Principal Components" />
      <Sub title="Eigenvalues as Variance Along Each PC" />
      <Sub title="Orthogonal Projection onto Subspace" />
      <Sub title="SVD Connection" />
      <Sub title="Geometric Interpretation" />
    </div>
  );
}

export default function PCAPage() {
  const [activePerspective, setActivePerspective] = useState<Perspective>("cs");

  return (
    <div className="max-w-7xl">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Principal Component Analysis (PCA)</h1>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pastel-mint/60 dark:bg-pastel-mint-deep/20 text-emerald-800 dark:text-pastel-mint">
            Unsupervised Learning
          </span>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-pastel-lavender-deep to-pastel-sky-deep rounded-full" />
      </header>

      {/* What / Why / How cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <FrameworkCard
          id="what"
          title="What is PCA?"
          color="bg-pastel-lavender/30 dark:bg-pastel-lavender-deep/10 border-pastel-lavender-deep/40"
        >
          <Sub title="Definition" />
          <Sub title="Type of Algorithm" />
          <Sub title="Key Terminology" />
          <Sub title="Core Idea in One Line" />
        </FrameworkCard>

        <FrameworkCard
          id="why"
          title="Why PCA?"
          color="bg-pastel-mint/30 dark:bg-pastel-mint-deep/10 border-pastel-mint-deep/40"
        >
          <Sub title="The Problem It Solves" />
          <Sub title="Curse of Dimensionality" />
          <Sub title="When You Need It" />
          <Sub title="When You Don't" />
          <Sub title="Assumptions" />
        </FrameworkCard>

        <FrameworkCard
          id="how"
          title="How Does PCA Work?"
          color="bg-pastel-sky/30 dark:bg-pastel-sky-deep/10 border-pastel-sky-deep/40"
        >
          <Sub title="Step-by-Step Algorithm" />
          <Sub title="Mathematical Formulation" />
          <Sub title="Linear Algebra View" />
          <Sub title="Choosing the Number of Components" />
          <Sub title="Implementation Workflow" />
          <Sub title="Evaluation &amp; Diagnostics" />
          <Sub title="Visualizations" />
          <Sub title="Extensions &amp; Variants" />
          <Sub title="Connections to Other Methods" />
        </FrameworkCard>
      </div>

      {/* Perspective toggle */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Explore by Perspective</h2>
        <div className="flex gap-3 flex-wrap">
          {perspectives.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePerspective(p.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                ${activePerspective === p.id
                  ? `${p.activeColor} shadow-md`
                  : `bg-card-light dark:bg-card-dark border ${p.color} hover:opacity-80`
                }
              `}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Perspective content */}
      <PerspectiveContent perspective={activePerspective} />

      {/* Pro Knowledge & Related Models */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {/* Pro Knowledge */}
        <div className="rounded-2xl border p-6 bg-pastel-lemon/30 dark:bg-pastel-lemon-deep/10 border-pastel-lemon-deep/40">
          <h2 className="text-lg font-bold mb-4 pb-2 border-b border-black/10 dark:border-white/10">
            Pro Knowledge
          </h2>
          <Sub title="Common Pitfalls &amp; Misconceptions" />
          <Sub title="PCA on Categorical Data?" />
          <Sub title="Standardization vs. Normalization Before PCA" />
          <Sub title="Interpreting Principal Components" />
          <Sub title="PCA in High-Dimensional Settings (p &gt;&gt; n)" />
          <Sub title="Interview Questions &amp; Tricky Edge Cases" />
        </div>

        {/* Related Models */}
        <div className="rounded-2xl border p-6 bg-pastel-coral/30 dark:bg-pastel-coral-deep/10 border-pastel-coral-deep/40">
          <h2 className="text-lg font-bold mb-4 pb-2 border-b border-black/10 dark:border-white/10">
            Related Models
          </h2>
          <Sub title="Kernel PCA" />
          <Sub title="Sparse PCA" />
          <Sub title="Incremental PCA" />
          <Sub title="Factor Analysis" />
          <Sub title="t-SNE" />
          <Sub title="UMAP" />
          <Sub title="Autoencoders" />
          <Sub title="Linear Discriminant Analysis (LDA)" />
        </div>
      </div>
    </div>
  );
}
