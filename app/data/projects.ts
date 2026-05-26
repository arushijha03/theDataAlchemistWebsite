export type ProjectTier = "flagship" | "advanced" | "academic";

export type Project = {
  id: string;
  name: string;
  tier: ProjectTier;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  results: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  github: string;
  demo?: string;
  demoLabel?: string;
  extraLinks?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "skillradar",
    name: "SkillRadar",
    tier: "flagship",
    tagline: "Multi-agent GenAI skill intelligence system",
    description:
      "Forecasts role-specific skill demand 6–12 months ahead by orchestrating live job data, research signals, and community trends through a LangGraph multi-agent pipeline.",
    problem:
      "Tech hiring moves faster than any single data source can capture. Recruiters and learners need a unified view of which skills are accelerating—not just what appears in one job board or one paper.",
    approach:
      "Architected a 4-agent LangGraph DAG (JD, RAG, Trend, Synthesis) pulling live postings via JSearch, arXiv, and Hacker News. Built a Pinecone vector KB (~450 chunks, 1536-dim cosine) from 10 AI/ML RSS feeds and designed the Skill Velocity Score: job demand (50%) + community (30%) + research (20%).",
    results: [
      "Deployed on FastAPI + Streamlit Cloud with LangSmith tracing and an 80-test pytest suite.",
      "Composite SVS metric ranks skills with explainable weights across three signal types.",
      "RAG evaluation pipeline (RAGAs) validates retrieval quality before synthesis.",
    ],
    metrics: [
      { label: "Vector chunks", value: "~450" },
      { label: "Test suite", value: "80" },
      { label: "Forecast horizon", value: "6–12 mo" },
    ],
    stack: [
      "LangGraph",
      "LangChain",
      "OpenAI GPT-4o",
      "Pinecone",
      "FAISS",
      "FastAPI",
      "Streamlit",
      "RAGAs",
      "LangSmith",
    ],
    github: "https://github.com/arushijha03/SkillsRadar",
    demo: "https://skillsradar-hfjwf7ewehabzwyj2sucd3.streamlit.app/",
    demoLabel: "Live app",
    extraLinks: [
      {
        label: "Demo video",
        href: "https://www.loom.com/share/9ed0533b7ebc4dbbbfc830597f12d9dc",
      },
    ],
  },
  {
    id: "insightlens",
    name: "InsightLens",
    tier: "flagship",
    tagline: "NLP review intelligence at scale",
    description:
      "Semantic search and topic discovery over half a million Amazon reviews—turning unstructured text into strengths, pain points, and executive-ready summaries.",
    problem:
      "Product teams drown in review text. Keyword search misses intent; manual theming does not scale past a few thousand documents.",
    approach:
      "Embedded 568K reviews with Sentence-Transformers (MiniLM-L6-v2), indexed 200K L2-normalized vectors in FAISS IndexFlatIP, then applied PCA (384→50, 95% variance) and KMeans (k=50) for topic structure. TF-IDF extraction surfaces strengths and pain points per cluster.",
    results: [
      "80% Precision@10 and 0.75 nDCG@10 on semantic retrieval benchmarks.",
      "50 topic clusters with 90% actionability and 95% coverage scores on generated summaries.",
      "Interactive Streamlit dashboard for business intelligence stakeholders.",
    ],
    metrics: [
      { label: "Reviews processed", value: "568K" },
      { label: "Precision@10", value: "80%" },
      { label: "Topic clusters", value: "50" },
    ],
    stack: [
      "Sentence-Transformers",
      "FAISS",
      "TF-IDF",
      "PCA",
      "KMeans",
      "Streamlit",
      "Python",
    ],
    github: "https://github.com/arushijha03/InsightLens",
    demo: "https://euec5wxonk9zyfm4w2wzht.streamlit.app/",
    demoLabel: "Live app",
    extraLinks: [
      {
        label: "Demo video",
        href: "https://www.loom.com/share/5b18dec2235a4f0fa4a551f9eb3f9cb4",
      },
    ],
  },
  {
    id: "pigmint",
    name: "PigMint Finance",
    tier: "advanced",
    tagline: "Cloud-native microservices fintech platform",
    description:
      "Three Flask microservices on GCP with async Pub/Sub, Redis cache-aside, and PostgreSQL analytics over 10K+ transactions.",
    problem:
      "Personal finance features like round-ups need reliable, low-latency APIs and consistent transaction state across services without overloading the database.",
    approach:
      "Deployed 3 Flask services to Cloud Run with Pub/Sub event processing, Memorystore Redis cache-aside (40% DB load reduction), and 7 normalized PostgreSQL tables with 15+ aggregation queries.",
    results: [
      "Sub-second API responses under async event-driven architecture.",
      "Automated round-up detection across 100% of transactions in the dataset.",
      "15+ SQL aggregations powering spend and savings insights.",
    ],
    metrics: [
      { label: "DB load reduced", value: "40%" },
      { label: "Transactions analyzed", value: "10K+" },
      { label: "Round-up coverage", value: "100%" },
    ],
    stack: [
      "Flask",
      "GCP Cloud Run",
      "Pub/Sub",
      "Cloud SQL",
      "Redis",
      "PostgreSQL",
      "TypeScript",
    ],
    github: "https://github.com/arushijha03/pigmint_finance",
    demo: "https://drive.google.com/file/d/1xqEEBaUzGwO_j6xsHogdX3r4XgxRpLP-/view?usp=sharing",
    demoLabel: "Demo video",
  },
  {
    id: "reelmetrics",
    name: "Reel Metrics",
    tier: "advanced",
    tagline: "Movie analytics — supervised & unsupervised",
    description:
      "Predicts ratings and uncovers genre patterns across three decades of film data using ensemble models and association rule mining.",
    problem:
      "Studios need both accurate rating predictions and interpretable segment-level patterns for marketing—not black-box scores alone.",
    approach:
      "Trained 5 supervised models (XGBoost, Logistic Regression best at 90%+ accuracy), combined K-Means, DBSCAN, and hierarchical clustering with PCA, and mined high-confidence genre-rating rules with ARM.",
    results: [
      "90%+ accuracy with XGBoost and Logistic Regression on held-out data.",
      "5+ high-confidence association rules for targeted genre marketing.",
      "Unsupervised clusters reveal decade-spanning taste segments.",
    ],
    metrics: [
      { label: "Model accuracy", value: "90%+" },
      { label: "ARM rules", value: "5+" },
      { label: "Algorithms compared", value: "5" },
    ],
    stack: ["Python", "Scikit-learn", "XGBoost", "PCA", "KMeans", "ARM"],
    github: "https://github.com/arushijha03/reelMetrics",
    demo: "https://sites.google.com/view/reel-metrics/introduction",
    demoLabel: "Website",
  },
  {
    id: "cloud9",
    name: "Cloud 9",
    tier: "advanced",
    tagline: "Aviation analytics at million-row scale",
    description:
      "Supervised delay prediction and passenger behavior clustering on 1M+ flight records with 20+ Tableau visualizations.",
    problem:
      "Airlines operate on thin margins where delay prediction and congestion patterns directly affect crew scheduling and customer experience.",
    approach:
      "Compared XGBoost, RNN, SVM, and baseline models on 1M+ records; applied K-Means for behavior segments (short-haul delays, peak-hour congestion); built 20+ interactive Tableau views across 10+ airlines and 50+ airports.",
    results: [
      "91% accuracy with XGBoost and RNN on delay classification tasks.",
      "Clustering surfaced actionable route and time-of-day congestion patterns.",
      "Executive-ready dashboards for non-technical stakeholders.",
    ],
    metrics: [
      { label: "Records modeled", value: "1M+" },
      { label: "Best accuracy", value: "91%" },
      { label: "Visualizations", value: "20+" },
    ],
    stack: ["Python", "XGBoost", "RNN", "SVM", "K-Means", "Tableau"],
    github: "https://github.com/arushijha03/Cloud9",
  },
  {
    id: "athletiq",
    name: "AthletiQ",
    tier: "academic",
    tagline: "Olympic data insights across 120 years",
    description:
      "Hypothesis-driven EDA and regression on 270K+ athlete records forecasting medal outcomes with strong explanatory power.",
    problem:
      "Olympic participation and medal distributions shift by era, gender, and nation—requiring rigorous statistical testing, not anecdotal charts.",
    approach:
      "EDA on 270K+ records; ANOVA, Chi-Square, and T-Tests for gender and medal participation; regression models forecasting medal counts with cross-validated metrics.",
    results: [
      "Medal forecast regression achieved R² = 0.82 on hold-out years.",
      "Statistical tests quantified gender participation shifts across eras.",
      "Reproducible Python + R pipeline for cohort comparisons.",
    ],
    metrics: [
      { label: "Athlete records", value: "270K+" },
      { label: "Forecast R²", value: "0.82" },
      { label: "History span", value: "120 yr" },
    ],
    stack: ["Python", "R", "Pandas", "Hypothesis Testing", "Regression"],
    github: "https://github.com/arushijha03",
  },
];

export const tierLabels: Record<
  ProjectTier,
  { label: string; emoji: string; className: string }
> = {
  flagship: {
    label: "Flagship",
    emoji: "🔴",
    className: "border-accent/40 bg-accent/5 text-ink",
  },
  advanced: {
    label: "Advanced",
    emoji: "🟡",
    className: "border-ink/15 bg-surface text-ink",
  },
  academic: {
    label: "Academic",
    emoji: "🟢",
    className: "border-ink/10 bg-paper text-muted",
  },
};
