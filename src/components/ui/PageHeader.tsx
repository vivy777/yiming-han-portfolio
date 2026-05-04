interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <p className="text-neutral-600 text-xs font-mono mb-2"># {title.toLowerCase()}.md</p>
      <h1 className="text-3xl font-bold font-mono text-neutral-100 mb-1">{title}</h1>
      {subtitle && (
        <p className="text-neutral-500 text-sm font-mono mt-1">
          <span className="text-neutral-600">//</span> {subtitle}
        </p>
      )}
    </div>
  );
}
