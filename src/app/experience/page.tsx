import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ExperienceItem from "@/components/skills/ExperienceItem";
import { experiences, volunteering } from "@/data/skills";
import { Experience } from "@/types";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience and volunteering of Yiming Han.",
};

const months: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  January: 0, February: 1, March: 2, April: 3, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
};

function parseStartDate(period: string): Date {
  const start = period.split("–")[0].split("—")[0].trim();
  const parts = start.split(" ");
  const month = months[parts[0]] ?? 0;
  const year = parseInt(parts[1] ?? "2000");
  return new Date(year, month);
}

type LabeledEntry = { experience: Experience; label: string };

export default function ExperiencePage() {
  const all: LabeledEntry[] = [
    ...experiences.map((e) => ({ experience: e, label: "## experience" })),
    ...volunteering.map((e) => ({ experience: e, label: "## volunteer" })),
  ].sort(
    (a, b) =>
      parseStartDate(b.experience.period).getTime() -
      parseStartDate(a.experience.period).getTime()
  );

  return (
    <div>
      <PageHeader
        title="Experience"
        subtitle="Professional roles, industry projects, and community involvement."
      />
      <div className="space-y-10">
        {all.map(({ experience, label }, i) => (
          <ExperienceItem key={i} experience={experience} label={label} />
        ))}
      </div>
    </div>
  );
}
