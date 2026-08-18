import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import bannerImg from "@/assets/banner.png";

const BASE = "https://portafolio.alphacorp.cl/assets/img";


const skills = [
  { name: "HTML5", img: `${BASE}/logos/html5.png` },
  { name: "CSS3", img: `${BASE}/logos/css3.png` },
  { name: "Sass", img: `${BASE}/logos/Sass.png` },
  { name: "Bootstrap", img: `${BASE}/logos/bootstrap.png` },
  { name: "Git", img: `${BASE}/logos/git.png` },
  { name: "GitHub", img: `${BASE}/logos/github.png` },
  { name: "JavaScript", img: `${BASE}/logos/javaScript.png` },
  { name: "Vue", img: `${BASE}/logos/vue.png` },
];

const projects = [
  { name: "Fusioncar", img: `${BASE}/projects/fusioncar.png`, url: "https://www.fusioncar.cl/" },
  {
    name: "Valles Arquitectura",
    img: `${BASE}/projects/valles-arquitectura.png`,
    url: "https://darikharian.github.io/VallesArquitectura3/",
  },
  {
    name: "Olivia Ros",
    img: `${BASE}/projects/olivia-ros.png`,
    url: "https://darikharian.github.io/classroom-infocal/modulo2/seccion2/dia3/desafioGuiado/",
  },
  {
    name: "Viajes Chile",
    img: `${BASE}/projects/viajes-chile.png`,
    url: "https://darikharian.github.io/classroom-infocal/modulo2/seccion4/dia5/",
  },
];

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Germán Trigo Cortés | Desarrollador Front End" },
      {
        name: "description",
        content:
          "Portafolio de Germán Trigo Cortés, desarrollador front end: habilidades, proyectos y contacto.",
      },
      { property: "og:title", content: "Germán Trigo Cortés | Desarrollador Front End" },
      {
        property: "og:description",
        content:
          "Portafolio de Germán Trigo Cortés, desarrollador front end: habilidades, proyectos y contacto.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://portafolio.alphacorp.cl/assets/img/banner.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://portafolio.alphacorp.cl/assets/img/banner.png" },
    ],
  }),
  component: Index,
});

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="fixed inset-x-0 top-2 z-50 px-4">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 rounded-xl border border-border/60 bg-secondary/80 px-6 py-4 backdrop-blur-md">
          <a href="#inicio" className="font-script text-2xl text-foreground">
            {"{ _Germán Trigo Cortés }"}
          </a>
          <ul className="flex items-center gap-6 text-sm md:text-base">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="inicio"
          className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-4 py-32"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="absolute inset-0 bg-[var(--hero-overlay)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="font-display text-5xl leading-tight tracking-wide md:text-7xl">
              Soy Germán
            </h1>
            <p className="font-display text-4xl tracking-wide md:text-6xl">
              Desarrollador Front End
            </p>
            <hr className="mx-auto my-8 w-2/3 border-t-2 border-foreground" />
            <p className="mx-auto max-w-3xl text-base leading-relaxed md:text-lg">
              Me encanta investigar y aprender cada día, manteniéndome al tanto de las últimas
              tendencias y tecnologías en el mundo del desarrollo web. Además de mi amor por el
              código, también tengo una gran afinidad por el diseño y la fotografía, creyendo
              firmemente en la importancia de la estética y la creatividad en cada proyecto.
            </p>
            <a
              href="https://github.com/darikHarian"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <GithubIcon className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </section>

        <section id="habilidades" className="bg-section-skills px-4 py-16">
          <h2 className="text-center font-display text-3xl uppercase tracking-widest text-heading md:text-4xl">
            Mis Habilidades
          </h2>
          <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-8">
            {skills.map((skill) => (
              <li key={skill.name} className="flex flex-col items-center gap-3">
                <img
                  src={skill.img}
                  alt={`Logo ${skill.name}`}
                  loading="lazy"
                  className="h-12 w-auto object-contain"
                />
                <span className="text-sm">{skill.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="proyectos" className="bg-section-projects px-4 py-16">
          <h2 className="text-center font-display text-3xl uppercase tracking-widest text-heading md:text-4xl">
            Mis Proyectos
          </h2>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-lg border border-border/50 bg-card transition-transform hover:-translate-y-1"
              >
                <img
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top"
                />
                <p className="bg-primary px-4 py-3 text-center text-lg text-primary-foreground">
                  {project.name}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section id="contacto" className="bg-section-contact px-4 py-16">
          <h2 className="text-center font-display text-3xl uppercase tracking-widest text-heading md:text-4xl">
            Contacto
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-10 md:grid-cols-[1.4fr_1fr]">
            <form
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input className={inputClass} placeholder="nombre" aria-label="Nombre" required />
              <input className={inputClass} placeholder="apellido" aria-label="Apellido" required />
              <input
                type="email"
                className={`${inputClass} sm:col-span-2`}
                placeholder="ejemplo@email.com"
                aria-label="Email"
                required
              />
              <textarea
                rows={5}
                className={`${inputClass} sm:col-span-2`}
                placeholder="Ingresa tu mensaje"
                aria-label="Mensaje"
                required
              />
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  Enviar
                </button>
                {sent && (
                  <span className="ml-3 text-sm text-accent">¡Gracias! Mensaje registrado.</span>
                )}
              </div>
            </form>

            <ul className="space-y-4 text-base">
              <li>
                <a className={linkClass} href="tel:+56998146229">
                  <PhoneIcon className="h-5 w-5" /> +569 9814 6229
                </a>
              </li>
              <li>
                <a className={linkClass} href="mailto:german.trigo@alphacorp.cl">
                  <MailIcon className="h-5 w-5" /> german.trigo@alphacorp.cl
                </a>
              </li>
              <li>
                <a
                  className={linkClass}
                  href="https://www.linkedin.com/in/darikharian"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon className="h-5 w-5" /> /in/darikharian
                </a>
              </li>
              <li>
                <a
                  className={linkClass}
                  href="https://github.com/darikHarian"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon className="h-5 w-5" /> /darikHarian
                </a>
              </li>
              <li>
                <a
                  className={linkClass}
                  href="https://www.instagram.com/darik_harian_khal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon className="h-5 w-5" /> @darik_harian_khal
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-border bg-transparent px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

const linkClass = "inline-flex items-center gap-3 transition-colors hover:text-accent";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.05.78 2.13v3.16c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M2 5c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1H3a1 1 0 0 1-1-1V5Zm2.4 1L12 12l7.6-6H4.4Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21h-4V9Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
