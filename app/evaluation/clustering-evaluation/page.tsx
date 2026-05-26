import { ComingSoon } from "@/components/ComingSoon";

export default function ClusteringEvaluationPage() {
  return (
    <ComingSoon
      title="Clustering Evaluation"
      description="Silhouette score, Davies-Bouldin, Calinski-Harabasz — evaluating models without ground truth."
      parentHref="/evaluation"
      parentTitle="Evaluation"
    />
  );
}
