import { Project } from "@/types";
import Tag from "@/components/ui/Tag";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-neutral-800 bg-neutral-900/30 rounded-lg p-5 hover:border-neutral-700 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="text-blue-400 font-mono text-xs mb-1">## project</p>
          <h3 className="text-base font-semibold font-mono text-neutral-100">{project.title}</h3>
        </div>
        <div className="flex items-center gap-2 shrink-0 mt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-neutral-500 hover:text-neutral-200 border border-neutral-700 hover:border-neutral-500 px-2.5 py-1 rounded transition-colors"
            >
              ⬡ github
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-blue-400 hover:text-blue-300 border border-blue-700/50 hover:border-blue-500 px-2.5 py-1 rounded transition-colors"
            >
              ↗ live
            </a>
          )}
        </div>
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
