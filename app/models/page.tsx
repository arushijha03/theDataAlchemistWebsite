import Link from "next/link";

const models = [
  { name: "Linear Regression", href: "/models/linear-regression", status: "live", tags: ["Supervised", "Regression"] },
  { name: "Logistic Regression", href: "/models/logistic-regression", status: "coming", tags: ["Supervised", "Classification"] },
  { name: "Decision Trees", href: "/models/decision-trees", status: "coming", tags: ["Supervised", "Both"] },
  { name: "Random Forest", href: "/models/random-forest", status: "coming", tags: ["Ensemble", "Both"] },
  { name: "Gradient Boosting", href: "/models/gradient-boosting", status: "coming", tags: ["Ensemble", "Both"] },
  { name: "SVM", href: "/models/svm", status: "coming", tags: ["Supervised", "Both"] },
  { name: "KNN", href: "/models/knn", status: "coming", tags: ["Supervised", "Both"] },
  { name: "K-Means", href: "/models/kmeans", status: "coming", tags: ["Unsupervised", "Clustering"] },
  { name: "PCA", href: "/models/pca", status: "coming", tags: ["Unsupervised", "Dim. Reduction"] },
  { name: "Naive Bayes", href: "/models/naive-bayes", status: "coming", tags: ["Supervised", "Classification"] },
  { name: "Neural Networks", href: "/models/neural-networks", status: "coming", tags: ["Supervised", "Both"] },
];

export default function ModelsIndexPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Model Deep Dives</h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark">
          Each model gets the full 13-section treatment: intuition, math, linear algebra view, statistical perspective, and more.
        </p>
        <div className="h-1 w-20 bg-gradient-to-r from-pastel-lavender-deep to-pastel-sky-deep rounded-full mt-4" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {models.map((model) => {
          const isLive = model.status === "live";
          const card = (
            <div
              key={model.name}
              className={`relative rounded-2xl p-5 border border-border-light dark:border-border-dark
                bg-card-light dark:bg-card-dark
                ${isLive ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : "opacity-60"}
                transition-all duration-300
              `}
            >
              <h3 className="font-bold mb-3">{model.name}</h3>
              <div className="flex flex-wrap gap-2">
                {model.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-pastel-sky/30 dark:bg-pastel-sky-deep/20">
                    {tag}
                  </span>
                ))}
              </div>
              {!isLive && (
                <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full bg-pastel-peach dark:bg-pastel-peach-deep/20 font-medium">
                  Soon
                </span>
              )}
              {isLive && (
                <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full bg-pastel-mint dark:bg-pastel-mint-deep/20 font-medium">
                  Live
                </span>
              )}
            </div>
          );

          return isLive ? (
            <Link key={model.name} href={model.href}>{card}</Link>
          ) : (
            <div key={model.name}>{card}</div>
          );
        })}
      </div>
    </div>
  );
}
