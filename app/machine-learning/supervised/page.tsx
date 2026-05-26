import { ComingSoon } from "@/components/ComingSoon";

export default function SupervisedPage() {
  return (
    <ComingSoon
      title="Supervised Learning"
      description="Learning from labeled data — regression, classification, and the bias-variance tradeoff."
      parentHref="/machine-learning"
      parentTitle="Machine Learning"
    />
  );
}
