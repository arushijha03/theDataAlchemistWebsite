import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description: string;
  parentHref: string;
  parentTitle: string;
}

export function ComingSoon({ title, description, parentHref, parentTitle }: ComingSoonProps) {
  return (
    <div className="max-w-2xl mx-auto text-center py-20">
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pastel-lavender to-pastel-sky dark:from-pastel-lavender-deep/30 dark:to-pastel-sky-deep/30" />
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8 leading-relaxed">
        {description}
      </p>
      <div className="inline-block px-4 py-2 rounded-full bg-pastel-peach/40 dark:bg-pastel-peach-deep/20 text-sm font-medium mb-8">
        Content coming soon — this section is being built
      </div>
      <div className="flex justify-center gap-4">
        <Link
          href={parentHref}
          className="px-5 py-2.5 rounded-xl border border-border-light dark:border-border-dark hover:bg-card-light dark:hover:bg-card-dark transition-all text-sm font-medium"
        >
          Back to {parentTitle}
        </Link>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pastel-lavender-deep to-pastel-sky-deep text-white text-sm font-medium hover:shadow-lg transition-all"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
