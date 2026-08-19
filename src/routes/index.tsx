import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Container } from "@/components/site/Container";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SkillsMarquee } from "@/components/site/SkillsMarquee";
import { capabilities, profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Germán Trigo Cortés | Full-Stack Developer & Tech Lead" },
      {
        name: "description",
        content:
          "Diseño, desarrollo y operación de soluciones tecnológicas completas: software, cloud, infraestructura, automatización y seguridad.",
      },
      { property: "og:title", content: "Germán Trigo Cortés | Full-Stack Developer & Tech Lead" },
      {
        property: "og:description",
        content: "Soluciones digitales completas, desde la arquitectura hasta el despliegue.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://portafolio.alphacorp.cl/" },
    ],
    links: [{ rel: "canonical", href: "https://portafolio.alphacorp.cl/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);
  return (
    <main>
      <section className="hero-grid relative isolate flex min-h-[92svh] items-center overflow-hidden pt-18">
        <div className="hero-glow" aria-hidden="true" />
        <Container className="relative grid items-center gap-14 py-24 lg:grid-cols-[1.15fr_.85fr] lg:py-32">
          <Reveal>
            <p className="eyebrow">
              <span className="status-dot" /> Disponible para nuevos desafíos
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
              Ingeniería digital de <span className="text-gradient">principio a producción.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Soy {profile.name}, {profile.role}. Diseño y construyo soluciones completas conectando
              producto, software, infraestructura y operación.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/projects" className="button-primary">
                Explorar proyectos <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="button-secondary">
                Conocer mi enfoque
              </Link>
            </div>
          </Reveal>
          <Reveal className="relative" delay={140}>
            <figure className="hero-visual" aria-hidden="true">
              <img
                src="/images/technology-architecture.webp"
                alt=""
                width="1600"
                height="844"
                fetchPriority="high"
              />
            </figure>
            <div
              className="system-panel relative ml-auto mt-24 max-w-lg"
              aria-label="Resumen de capacidades"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  system.profile
                </span>
                <span className="flex gap-1.5" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="space-y-6 p-6 sm:p-8">
                <p className="font-mono text-sm text-accent">$ capabilities --overview</p>
                {[
                  "Arquitectura & desarrollo",
                  "Cloud & despliegue",
                  "Infraestructura & redes",
                  "Seguridad & automatización",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
                <div className="metric-grid">
                  <div>
                    <strong>360°</strong>
                    <span>visión técnica</span>
                  </div>
                  <div>
                    <strong>E2E</strong>
                    <span>responsabilidad</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
        <a
          href="#featured"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground lg:flex"
        >
          Ver trabajo <ChevronDown size={16} />
        </a>
      </section>
      <section id="featured" className="border-t border-border py-20 sm:py-24">
        <Container>
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Trabajo seleccionado"
              title="Proyectos con propósito y decisiones técnicas claras."
              description="Una selección de soluciones donde el diseño, la implementación y el resultado forman parte del mismo problema."
            />
            <Link to="/projects" className="text-link shrink-0">
              Ver todos <ArrowRight size={17} />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProjects.map((project, index) => (
              <Reveal className="h-full" key={project.id} delay={index * 80}>
                <ProjectCard project={project} compact />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-space border-y border-border bg-surface-subtle">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Stack tecnológico"
              title="Herramientas al servicio de la solución."
              description="Selecciono tecnologías por su ajuste al problema, su mantenibilidad y el contexto operativo del equipo."
              centered
            />
          </Reveal>
          <SkillsMarquee />
        </Container>
      </section>
      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Capacidades"
              title="Una mirada sistémica, desde el código hasta la operación."
              description="La calidad de un producto también depende de cómo se integra, despliega, protege y mantiene."
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ title, description, icon: Icon }, index) => (
              <Reveal className="bg-card" key={title} delay={index * 60}>
                <article className="capability-card">
                  <Icon className="text-accent" size={25} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="cta-panel">
            <div>
              <p className="eyebrow">¿Construimos algo sólido?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Conversemos sobre tu próximo desafío.
              </h2>
            </div>
            <Link to="/contact" className="button-light">
              Iniciar conversación <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
