import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SkillBadge from "@/components/skills/SkillBadge";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills of Yiming Han.",
};

const categoryColors = [
  "bg-red-900/30 border-red-700/40 text-red-300 hover:border-red-500 hover:text-red-200",
  "bg-blue-900/30 border-blue-700/40 text-blue-300 hover:border-blue-500 hover:text-blue-200",
  "bg-yellow-900/30 border-yellow-700/40 text-yellow-300 hover:border-yellow-500 hover:text-yellow-200",
  "bg-purple-900/30 border-purple-700/40 text-purple-300 hover:border-purple-500 hover:text-purple-200",
  "bg-cyan-900/30 border-cyan-700/40 text-cyan-300 hover:border-cyan-500 hover:text-cyan-200",
];

export default function SkillsPage() {
  return (
    <div>
      <PageHeader
        title="Skills"
        subtitle="Technologies and tools I work with."
      />
      <div className="space-y-8">
        {skillGroups.map((group, gi) => (
          <div key={group.category}>
            <p className="text-blue-400 font-mono text-xs mb-3">## {group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} name={skill} color={categoryColors[gi % categoryColors.length]} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
