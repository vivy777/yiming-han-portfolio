interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-blue-900/40 text-blue-400">
      {label}
    </span>
  );
}
