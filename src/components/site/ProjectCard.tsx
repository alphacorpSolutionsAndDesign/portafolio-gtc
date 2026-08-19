import { useState } from "react";
import { createPortal } from "react-dom";
import { getProjectCategoryLabel, type Project } from "@/data/projects";
import { ProjectDetailsModal } from "./ProjectDetailsModal";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const visibleTechnologies = project.technologies?.slice(0, 3) ?? [];
  const hiddenTechnologies = (project.technologies?.length ?? 0) - visibleTechnologies.length;

  return (
    <>
      <article
        className={`project-card group flex h-full flex-col ${compact ? "project-card-compact" : ""}`}
      >
        <button
          type="button"
          onClick={() => setDetailsOpen(true)}
          className="block w-full cursor-zoom-in overflow-hidden bg-surface-subtle text-left"
          aria-label={`Abrir detalles de ${project.title}`}
        >
          <ProjectVisual
            project={project}
            className="aspect-video transition duration-500 group-hover:scale-[1.02]"
          />
        </button>
        <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-4 sm:p-5"}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            {getProjectCategoryLabel(project)}
          </p>
          <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-5 text-muted-foreground">
            {project.shortDescription}
          </p>
          {visibleTechnologies.length ? (
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologías principales">
              {visibleTechnologies.map((technology) => (
                <li className="tech-tag" key={technology}>
                  {technology}
                </li>
              ))}
              {hiddenTechnologies > 0 && (
                <li
                  className="tech-tag"
                  aria-label={`${hiddenTechnologies} tecnologías adicionales`}
                >
                  +{hiddenTechnologies}
                </li>
              )}
            </ul>
          ) : null}
        </div>
      </article>
      {detailsOpen &&
        createPortal(
          <ProjectDetailsModal project={project} onClose={() => setDetailsOpen(false)} />,
          document.body,
        )}
    </>
  );
}
