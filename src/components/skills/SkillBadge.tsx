interface SkillBadgeProps {
  name: string;
  color?: string;
}

export default function SkillBadge({ name, color }: SkillBadgeProps) {
  const cls = color ?? "bg-neutral-800/50 border-neutral-700 text-neutral-300 hover:border-blue-700/60 hover:text-blue-300";
  return (
    <span className={`inline-block border text-xs px-2.5 py-1 rounded font-mono transition-colors ${cls}`}>
      {name}
    </span>
  );
}
