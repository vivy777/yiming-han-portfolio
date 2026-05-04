import { format, parseISO } from "date-fns";

export function formatDate(dateString: string): string {
  return format(parseISO(dateString), "MMMM d, yyyy");
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

const tagColors = [
  "bg-blue-900/30 border-blue-500/60 text-blue-300",
  "bg-purple-900/30 border-purple-500/60 text-purple-300",
  "bg-green-900/30 border-green-500/60 text-green-300",
  "bg-yellow-900/30 border-yellow-500/60 text-yellow-300",
  "bg-red-900/30 border-red-500/60 text-red-300",
  "bg-cyan-900/30 border-cyan-500/60 text-cyan-300",
  "bg-orange-900/30 border-orange-500/60 text-orange-300",
  "bg-pink-900/30 border-pink-500/60 text-pink-300",
  "bg-teal-900/30 border-teal-500/60 text-teal-300",
  "bg-indigo-900/30 border-indigo-500/60 text-indigo-300",
];

export function tagColor(tag: string): string {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) hash = (hash * 31 + tag.charCodeAt(i)) >>> 0;
  return tagColors[hash % tagColors.length];
}
