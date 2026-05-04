import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ExperienceItem from "@/components/skills/ExperienceItem";
import { education } from "@/data/skills";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background of Yiming Han.",
};

export default function EducationPage() {
  return (
    <div>
      <PageHeader
        title="Education"
        subtitle="Academic background and degrees."
      />
      <div className="space-y-10">
        {education.map((edu, i) => (
          <ExperienceItem key={i} experience={edu} label="## education" />
        ))}
      </div>
    </div>
  );
}
