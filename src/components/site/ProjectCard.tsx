import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { getProjectCategoryLabel, type Project } from "@/data/projects";
import { ProjectDetailsModal } from "./ProjectDetailsModal";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  return (
    <>
      <article className="project-card group">
        <button
          type="button"
          onClick={() => setDetailsOpen(true)}
          className="block w-full overflow-hidden bg-surface-subtle text-left"
          aria-label={`Abrir detalles de ${project.title}`}
        >
          <ProjectVisual
            project={project}
            className="transition duration-500 group-hover:scale-[1.025]"
          />
        </button>
        <div className="p-6">
          <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span>{getProjectCategoryLabel(project)}</span>
            {project.year && <span className="text-muted-foreground">{project.year}</span>}
          </div>
          <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.shortDescription}</p>
          {project.technologies?.length ? (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
              {project.technologies.slice(0, 4).map((technology) => (
                <li className="tech-tag" key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-6 flex items-center gap-4 text-sm font-semibold">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="inline-flex items-center gap-1.5 text-accent hover:text-foreground"
            >
              Ver caso <ArrowUpRight size={16} />
            </Link>
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <Github size={16} /> Código
              </a>
            )}
          </div>
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
