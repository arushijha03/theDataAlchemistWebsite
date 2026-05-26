export type SkillCategory = {
  id: string;
  title: string;
  skills: { name: string; emphasis: "primary" | "secondary" }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    skills: [
      { name: "LangGraph", emphasis: "primary" },
      { name: "LangChain", emphasis: "primary" },
      { name: "RAG", emphasis: "primary" },
      { name: "Multi-Agent Systems", emphasis: "primary" },
      { name: "OpenAI GPT-4o", emphasis: "primary" },
      { name: "XGBoost", emphasis: "primary" },
      { name: "FAISS", emphasis: "primary" },
      { name: "Sentence-Transformers", emphasis: "primary" },
      { name: "Scikit-learn", emphasis: "secondary" },
      { name: "SMOTE", emphasis: "secondary" },
      { name: "NLP", emphasis: "secondary" },
      { name: "PyTorch", emphasis: "secondary" },
      { name: "TensorFlow", emphasis: "secondary" },
      { name: "Predictive Modeling", emphasis: "secondary" },
    ],
  },
  {
    id: "data-eng",
    title: "Data Engineering & Cloud",
    skills: [
      { name: "PostgreSQL", emphasis: "primary" },
      { name: "GCP (Cloud Run)", emphasis: "primary" },
      { name: "Snowflake", emphasis: "primary" },
      { name: "Databricks", emphasis: "primary" },
      { name: "Azure", emphasis: "secondary" },
      { name: "Redis", emphasis: "secondary" },
      { name: "Docker", emphasis: "secondary" },
      { name: "MongoDB", emphasis: "secondary" },
      { name: "Pub/Sub", emphasis: "secondary" },
      { name: "ETL Pipelines", emphasis: "primary" },
    ],
  },
  {
    id: "programming",
    title: "Programming & Frameworks",
    skills: [
      { name: "Python", emphasis: "primary" },
      { name: "SQL", emphasis: "primary" },
      { name: "FastAPI", emphasis: "primary" },
      { name: "Java", emphasis: "secondary" },
      { name: "R", emphasis: "secondary" },
      { name: "Spring Boot", emphasis: "secondary" },
      { name: "REST APIs", emphasis: "primary" },
      { name: "Pytest", emphasis: "secondary" },
      { name: "Jenkins", emphasis: "secondary" },
      { name: "Angular", emphasis: "secondary" },
    ],
  },
  {
    id: "viz",
    title: "Visualization & Analytics",
    skills: [
      { name: "Pandas", emphasis: "primary" },
      { name: "NumPy", emphasis: "primary" },
      { name: "Streamlit", emphasis: "primary" },
      { name: "Tableau", emphasis: "primary" },
      { name: "Plotly", emphasis: "secondary" },
      { name: "Matplotlib", emphasis: "secondary" },
      { name: "Seaborn", emphasis: "secondary" },
      { name: "Power BI", emphasis: "secondary" },
      { name: "Feature Engineering", emphasis: "primary" },
    ],
  },
];
