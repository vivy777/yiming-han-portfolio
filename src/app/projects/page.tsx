import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal and professional projects by Yiming Han.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="Selected security, infrastructure, development, and research work."
      />
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
