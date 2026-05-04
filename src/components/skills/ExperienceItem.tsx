import { Experience } from "@/types";
import PhotoGallery from "@/components/skills/PhotoGallery";

interface ExperienceItemProps {
  experience: Experience;
  label?: string;
}

export default function ExperienceItem({ experience, label = "## entry" }: ExperienceItemProps) {
  return (
    <div className="border border-neutral-800 bg-neutral-900/30 rounded-lg p-5">
      <div className="mb-4">
        <p className="text-blue-400 font-mono text-xs mb-1.5">{label}</p>
        <div className="mb-1">
          <span className="font-semibold text-neutral-100 font-mono">{experience.role}</span>
        </div>
        <div className="mb-1">
          <code className="text-green-400 bg-green-900/20 px-1.5 py-0.5 rounded text-xs">{experience.company}</code>
        </div>
        <p className="text-xs text-neutral-600 font-mono">{experience.period}</p>
      </div>
      {experience.summary && (
        <p className="text-neutral-500 text-xs font-mono mb-3 italic">{experience.summary}</p>
      )}
      {experience.photos && experience.photos.length > 0 && (
        <PhotoGallery photos={experience.photos} />
      )}
      <div className="space-y-2 border-l-2 border-neutral-800 pl-4">
        {experience.bullets.map((bullet, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-neutral-600 font-mono text-xs mt-1 shrink-0">→</span>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {experience.event && bullet.includes(experience.event)
                ? bullet.split(experience.event).flatMap((part, j, arr) =>
                    j < arr.length - 1
                      ? [part, <strong key={j} className="text-neutral-100 font-semibold">{experience.event}</strong>]
                      : [part]
                  )
                : bullet}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
