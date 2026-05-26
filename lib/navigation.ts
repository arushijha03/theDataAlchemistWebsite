export interface NavItem {
  title: string;
  href: string;
  color: string;
  darkColor: string;
  description: string;
  children?: NavItem[];
}

export const navigationStructure: NavItem[] = [
  {
    title: "Portfolio",
    href: "/portfolio",
    color: "bg-pastel-peach",
    darkColor: "dark:bg-pastel-peach-deep/20",
    description: "Arushi Jha — projects, experience, and impact",
  },
  {
    title: "Weekly Digest",
    href: "/blog",
    color: "bg-pastel-sky",
    darkColor: "dark:bg-pastel-sky-deep/20",
    description: "Weekly AI & Data Science developments",
  },
  {
    title: "Machine Learning",
    href: "/machine-learning",
    color: "bg-pastel-mint",
    darkColor: "dark:bg-pastel-mint-deep/20",
    description: "Supervised, Unsupervised, Ensemble Methods",
    children: [
      {
        title: "Unsupervised Learning",
        href: "/machine-learning/unsupervised",
        color: "bg-pastel-mint",
        darkColor: "",
        description: "",
        children: [
          { title: "PCA", href: "/machine-learning/unsupervised/pca", color: "bg-pastel-mint", darkColor: "", description: "" },
          { title: "Linear Regression", href: "/machine-learning/unsupervised/linear-regression", color: "bg-pastel-mint", darkColor: "", description: "" },
        ],
      },
      { title: "Supervised Learning", href: "/machine-learning/supervised", color: "bg-pastel-mint", darkColor: "", description: "" },
      { title: "Ensemble Methods", href: "/machine-learning/ensemble", color: "bg-pastel-mint", darkColor: "", description: "" },
    ],
  },
  {
    title: "Visualization",
    href: "/visualization",
    color: "bg-pastel-coral",
    darkColor: "dark:bg-pastel-coral-deep/20",
    description: "EDA, Model Diagnostics, Communication",
    children: [
      { title: "Python Libraries", href: "/visualization/python-libraries", color: "bg-pastel-coral", darkColor: "", description: "" },
    ],
  },
  {
    title: "Soft Skills",
    href: "/soft-skills",
    color: "bg-pastel-sage",
    darkColor: "dark:bg-pastel-sage-deep/20",
    description: "Communicating results, Explaining models",
    children: [
      { title: "You Don't Matter", href: "/soft-skills/you-dont-matter", color: "bg-pastel-sage", darkColor: "", description: "" },
    ],
  },
];
