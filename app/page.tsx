import { SectionCard } from "@/components/SectionCard";
import { navigationStructure } from "@/lib/navigation";

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-pastel-lavender-deep to-pastel-sky-deep bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">{label}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero */}
      <section className="relative mb-16 pt-8">
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pastel-lavender/40 dark:bg-pastel-lavender-deep/10 rounded-full blur-3xl" />
          <div className="absolute top-20 right-20 w-64 h-64 bg-pastel-mint/40 dark:bg-pastel-mint-deep/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pastel-sky/30 dark:bg-pastel-sky-deep/10 rounded-full blur-3xl" />
        </div>

        <div className="relative px-8 py-16 text-center">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-pastel-lavender-deep via-pastel-sky-deep to-pastel-mint-deep bg-clip-text text-transparent">
              The Data Alchemist
            </span>
          </h1>
          <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-8 leading-relaxed">
            A structured second brain for Data Science — connecting Machine Learning,
            Statistics, Linear Algebra, and Optimization into one evolving knowledge system.
          </p>

          <div className="flex justify-center gap-8 mb-8">
            <StatBadge value="9" label="Sections" />
            <StatBadge value="13" label="Layers per Model" />
            <StatBadge value="3" label="Depth Levels" />
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="/machine-learning/unsupervised/pca"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pastel-lavender-deep to-pastel-sky-deep text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Start Exploring
            </a>
            <a
              href="/portfolio"
              className="px-6 py-3 rounded-xl border border-border-light dark:border-border-dark font-semibold hover:bg-card-light dark:hover:bg-card-dark transition-all duration-200"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Knowledge Philosophy */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-pastel-mint/20 dark:bg-pastel-mint-deep/10 border border-pastel-mint-deep/30">
            <h3 className="font-bold mb-2">Multi-Perspective</h3>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Every concept explored from intuition, math, statistics, linear algebra, and practical usage.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-pastel-sky/20 dark:bg-pastel-sky-deep/10 border border-pastel-sky-deep/30">
            <h3 className="font-bold mb-2">Connected Knowledge</h3>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Models linked by assumptions, similarities, and evolution paths. Nothing exists in isolation.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-pastel-lavender/20 dark:bg-pastel-lavender-deep/10 border border-pastel-lavender-deep/30">
            <h3 className="font-bold mb-2">Iterative Growth</h3>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Modular structure designed to evolve. Add notes, extend sections, plug in new insights.
            </p>
          </div>
        </div>
      </section>

      {/* All Sections */}
      <section id="sections" className="mb-16 scroll-mt-8">
        <h2 className="text-2xl font-bold mb-2">Knowledge Sections</h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8">
          The building blocks of your data science understanding
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationStructure.map((section) => (
            <SectionCard
              key={section.href}
              title={section.title}
              href={section.href}
              color={section.color}
              darkColor={section.darkColor}
              description={section.description}
              comingSoon={section.href !== "/machine-learning"}
            />
          ))}
        </div>
      </section>

      {/* Recently Added */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2">Recently Added</h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
          Latest additions to the knowledge base
        </p>
        <div className="rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-pastel-mint/40 dark:bg-pastel-mint-deep/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-pastel-mint-deep" />
            </div>
            <div>
              <a href="/machine-learning/unsupervised/pca" className="font-semibold hover:text-pastel-lavender-deep transition-colors">
                Principal Component Analysis (PCA)
              </a>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                What, Why, How framework with CS, Statistics, and Linear Algebra perspectives
              </p>
            </div>
            <span className="ml-auto text-xs text-text-secondary-light dark:text-text-secondary-dark">
              New
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-text-secondary-light dark:text-text-secondary-dark border-t border-border-light dark:border-border-dark">
        <p>The Data Alchemist — Built for deep understanding, not surface learning.</p>
      </footer>
    </div>
  );
}
