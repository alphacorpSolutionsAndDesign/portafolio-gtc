import { ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Vista previa de ${project.title}`}
        loading="lazy"
        width="800"
        height="600"
        className={cn("aspect-video w-full object-cover object-top", className)}
      />
    );
  }

  return (
    <div
      className={cn("project-placeholder aspect-video", className)}
      role="img"
      aria-label={`Captura de ${project.title} pendiente`}
    >
      <ImageIcon size={26} aria-hidden="true" />
      <span>Screenshot pendiente</span>
      <small>Reemplazar con material real</small>
    </div>
  );
}
