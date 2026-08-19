import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/site/Container";
import { getProjectBySlug, getProjectCategoryLabel } from "@/data/projects";
import { ProjectVisual } from "@/components/site/ProjectVisual";
export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData: project }) => ({
    meta: [
      { title: `${project?.title ?? "Proyecto"} | Germán Trigo Cortés` },
      { name: "description", content: project?.shortDescription ?? "Caso de estudio" },
      { property: "og:title", content: project?.title ?? "Proyecto" },
      { property: "og:image", content: project?.image ?? "" },
    ],
    links: project
      ? [{ rel: "canonical", href: `https://portafolio.alphacorp.cl/projects/${project.slug}` }]
      : [],
  }),
  component: ProjectDetailPage,
});
function ProjectDetailPage() {
  const project = Route.useLoaderData();
  return (
    <main className="page-top pb-24 sm:pb-32">
      <Container>
        <Link to="/projects" className="text-link mb-10">
          <ArrowLeft size={17} /> Volver a proyectos
        </Link>
        <header className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">
              {getProjectCategoryLabel(project)}
              {project.year ? ` · ${project.year}` : ""}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              {project.description ?? project.shortDescription}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.website && (
              <a href={project.website} target="_blank" rel="noreferrer" className="button-primary">
                Visitar sitio <ArrowUpRight size={18} />
              </a>
            )}
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <Github size={18} /> Repositorio
              </a>
            )}
          </div>
        </header>
        <ProjectVisual
          project={project}
          className="mt-14 aspect-[16/9] rounded-2xl border border-border"
        />
        <div className="case-grid mt-16">
          {project.technologies?.length ? (
            <aside>
              <p className="eyebrow">Tecnologías</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li className="tech-tag" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </aside>
          ) : (
            <aside />
          )}
          <div className="space-y-14">
            {project.description && <CaseSection title="Contexto" content={project.description} />}
            {project.challenge && <CaseSection title="Desafío" content={project.challenge} />}
            {project.solution && <CaseSection title="Solución" content={project.solution} />}
            {project.architecture && (
              <CaseSection title="Arquitectura" content={project.architecture} />
            )}
            {project.features?.length ? (
              <DetailList title="Funcionalidades" values={project.features} />
            ) : null}
            {project.techniques?.length ? (
              <DetailList title="Técnicas utilizadas" values={project.techniques} />
            ) : null}
            {project.results?.length ? (
              <section>
                <p className="eyebrow">Resultado</p>
                <h2 className="case-title">Impacto de la solución</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.results.map((result) => (
                    <li key={result} className="result-item">
                      {result}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </Container>
    </main>
  );
}
function DetailList({ title, values }: { title: string; values: string[] }) {
  return (
    <section>
      <p className="eyebrow">{title}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {values.map((value) => (
          <li className="result-item" key={value}>
            {value}
          </li>
        ))}
      </ul>
    </section>
  );
}
function CaseSection({ title, content }: { title: string; content: string }) {
  return (
    <section>
      <p className="eyebrow">{title}</p>
      <h2 className="case-title">{title === "Contexto" ? "El punto de partida" : title}</h2>
      <p className="mt-5 text-base leading-8 text-muted-foreground">{content}</p>
    </section>
  );
}
