import Link from "next/link";

interface SectionCardProps {
  title: string;
  href: string;
  color: string;
  darkColor: string;
  description: string;
  comingSoon?: boolean;
}

export function SectionCard({ title, href, color, darkColor, description, comingSoon }: SectionCardProps) {
  const Card = (
    <div
      className={`group relative rounded-2xl p-6 border border-border-light dark:border-border-dark
        bg-card-light dark:bg-card-dark
        hover:shadow-lg hover:shadow-pastel-lavender/20 dark:hover:shadow-pastel-lavender-deep/10
        hover:border-pastel-lavender-deep/40
        transition-all duration-300 hover:-translate-y-1
        ${comingSoon ? "opacity-60" : "cursor-pointer"}
      `}
    >
      <div className={`w-full h-1 rounded-full ${color} ${darkColor} mb-4 group-hover:h-1.5 transition-all duration-300`} />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
        {description}
      </p>
      {comingSoon && (
        <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-pastel-peach dark:bg-pastel-peach-deep/20 font-medium">
          Coming Soon
        </span>
      )}
    </div>
  );

  if (comingSoon) return Card;

  return <Link href={href}>{Card}</Link>;
}
