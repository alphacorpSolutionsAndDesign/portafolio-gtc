import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { useEffect } from "react";
import { getProjectCategoryLabel, type Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.id}-title`}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Cerrar detalles"
          autoFocus
        >
          <X size={20} />
        </button>
        <ProjectVisual project={project} className="modal-visual" />
        <div className="p-6 sm:p-8">
          <p className="eyebrow">
            {getProjectCategoryLabel(project)}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          <h2
            id={`project-${project.id}-title`}
            className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {project.title}
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {project.description ?? project.shortDescription}
          </p>
          {project.technologies?.length ? (
            <ModalList title="Tecnologías" values={project.technologies} />
          ) : null}
          {project.features?.length ? (
            <ModalList title="Funcionalidades" values={project.features} />
          ) : null}
          {project.techniques?.length ? (
            <ModalList title="Técnicas" values={project.techniques} />
          ) : null}
          {project.challenge && <ModalSection title="Desafío" content={project.challenge} />}
          {project.solution && <ModalSection title="Solución" content={project.solution} />}
          {project.architecture && (
            <ModalSection title="Arquitectura" content={project.architecture} />
          )}
          {project.results?.length ? (
            <ModalList title="Resultados" values={project.results} />
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              onClick={onClose}
              className="button-primary"
            >
              Ver caso completo <ArrowRight size={17} />
            </Link>
            {project.website && (
              <a
                className="button-secondary"
                href={project.website}
                target="_blank"
                rel="noreferrer"
              >
                Sitio <ExternalLink size={17} />
              </a>
            )}
            {project.repository && (
              <a
                className="button-secondary"
                href={project.repository}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> Código
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function ModalSection({ title, content }: { title: string; content: string }) {
  return (
    <section className="mt-7 border-t border-border pt-6">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{content}</p>
    </section>
  );
}

function ModalList({ title, values }: { title: string; values: string[] }) {
  return (
    <section className="mt-7 border-t border-border pt-6">
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {values.map((value) => (
          <li className="tech-tag" key={value}>
            {value}
          </li>
        ))}
      </ul>
    </section>
  );
}
