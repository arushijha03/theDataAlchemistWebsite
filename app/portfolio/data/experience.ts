export type Role = {
  company: string;
  title: string;
  period: string;
  domain: string;
  bullets: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "Parlay Finance",
    title: "Data Science Intern",
    period: "Jan 2026 – Apr 2026",
    domain: "Fintech / SBA Lending",
    bullets: [
      "Designed a weighted scoring engine across 8 SBA domain parameters (NAICS, DSCR, credit, equity) on 341 production loan inquiries to generate ground-truth labels—enabling ML training at 99% F1.",
      "Resolved a 33:1 class imbalance with SMOTE, boosting XGBoost F1 from 78% → 99% across 50+ engineered features.",
      "Delivered a ranked loan product recommendation engine matching 100% of eligible inquiries at ~95% average confidence, cutting manual lender review time.",
      "Owned the full lifecycle: business requirements → collection → cleaning → features → model selection → deployment.",
    ],
    stack: [
      "Python",
      "XGBoost",
      "SMOTE",
      "SQL",
      "Feature Engineering",
      "Scikit-learn",
    ],
  },
  {
    company: "NielsenIQ",
    title: "Software Engineer",
    period: "Feb 2022 – Jun 2024",
    domain: "Enterprise Data Management / ETL",
    bullets: [
      "Built 4 ingestion pipelines centralizing processed data for 3+ teams across Postgres, Snowflake, Databricks, and Azure Blob Storage.",
      "Reduced data validation errors 20% across 100+ cross-mapped features in production ETL flows.",
      "Cut Spark ETL debug time 95% with Angular + REST real-time monitoring dashboards; intern project alone cut debug time 90%.",
      "Developed 2 order-management microservices (Java, Spring Boot, MongoDB); optimized deployments and E2E testing 40% via Jenkins, SonarQube, and Azure VMSS.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spark",
      "Angular",
      "Postgres",
      "Snowflake",
      "Databricks",
      "Azure",
      "Jenkins",
    ],
  },
  {
    company: "University of Colorado Boulder",
    title: "Data Science Student Assistant",
    period: "Apr 2025 – May 2026",
    domain: "Higher Education / Program Analytics",
    bullets: [
      "Analyzed internship and job outcomes for 150+ students using Python and Excel, surfacing cohort trends program leadership could act on.",
      "Built Tableau dashboards translating complex placement data into visuals nontechnical staff used in weekly planning.",
      "Managed communications for 300+ students and improved average response time 30% through templated workflows and tracking.",
    ],
    stack: ["Python", "Excel", "Tableau", "Pandas", "Communication"],
  },
];
