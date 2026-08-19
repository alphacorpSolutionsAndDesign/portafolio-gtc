import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Container } from "@/components/site/Container";
import { ProjectCard } from "@/components/site/ProjectCard";
import {
  projectCategories,
  projectMatchesCategory,
  projects,
  type ProjectCategory,
} from "@/data/projects";
export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Proyectos | Germán Trigo Cortés" },
      {
        name: "description",
        content:
          "Casos de estudio y proyectos de desarrollo web, software e ingeniería tecnológica.",
      },
    ],
    links: [{ rel: "canonical", href: "https://portafolio.alphacorp.cl/projects" }],
  }),
  component: ProjectsPage,
});
function ProjectsPage() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("Todos");
  const visible =
    category === "Todos"
      ? projects
      : projects.filter((project) => projectMatchesCategory(project, category as ProjectCategory));
  const available = projectCategories.filter(
    (item) => item === "Todos" || projects.some((project) => projectMatchesCategory(project, item)),
  );
  return (
    <main className="page-top section-space">
      <Container>
        <header className="page-intro">
          <p className="eyebrow">Portafolio técnico</p>
          <h1>Proyectos y casos de estudio</h1>
          <p>Más que una galería: decisiones, arquitectura y resultados detrás de cada solución.</p>
        </header>
        <div className="mt-10 flex flex-wrap gap-2" aria-label="Filtrar proyectos">
          {available.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCategory(item)}
              className={category === item ? "filter-button filter-button-active" : "filter-button"}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </Container>
    </main>
  );
}
