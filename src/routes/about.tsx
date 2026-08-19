import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { SkillsMarquee } from "@/components/site/SkillsMarquee";
import { capabilities } from "@/data/profile";
const principles = [
  "Entender el problema antes de implementar.",
  "Diseñar pensando en mantenimiento y crecimiento.",
  "Elegir tecnología por necesidad, no por moda.",
  "Automatizar procesos repetitivos y propensos a error.",
  "Incorporar seguridad y observabilidad desde el diseño.",
  "Documentar decisiones que importan.",
];
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre mí | Germán Trigo Cortés" },
      {
        name: "description",
        content:
          "Perfil, capacidades y forma de trabajo de un Full-Stack Developer y Tech Lead con visión sistémica.",
      },
    ],
    links: [{ rel: "canonical", href: "https://portafolio.alphacorp.cl/about" }],
  }),
  component: AboutPage,
});
function AboutPage() {
  return (
    <main className="page-top pb-24 sm:pb-32">
      <Container>
        <header className="page-intro max-w-4xl">
          <p className="eyebrow">Sobre mí</p>
          <h1>Construyo tecnología entendiendo el sistema completo.</h1>
          <p>
            Mi trabajo no termina cuando una interfaz funciona. Me interesa cómo se conecta con los
            datos, cómo se despliega, cómo se protege y cómo podrá mantenerse cuando cambien las
            necesidades.
          </p>
        </header>
        <Reveal className="about-visual mt-14">
          <img
            src="/images/systems-thinking.webp"
            alt="Representación abstracta del análisis de sistemas y la resolución estructurada de problemas"
            width="1400"
            height="933"
            loading="eager"
          />
        </Reveal>
        <div className="about-story mt-16">
          <div>
            <p className="eyebrow">Perfil profesional</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              De resolver una necesidad a operar una solución.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Soy un profesional tecnológico multidisciplinario con experiencia en desarrollo
              full-stack, liderazgo técnico, infraestructura y automatización. Abordo los desafíos
              con pensamiento analítico: primero reduzco la incertidumbre, luego diseño una
              respuesta que el equipo pueda sostener.
            </p>
            <p>
              He evolucionado desde la construcción de interfaces hacia una mirada integral del
              producto y su entorno. Esa amplitud me permite comunicarme entre disciplinas, detectar
              riesgos tempranos y tomar decisiones considerando rendimiento, seguridad,
              escalabilidad y costo operativo.
            </p>
            <p>
              Valoro la tecnología simple, bien explicada y útil. La calidad técnica no es
              complejidad: es lograr que una solución sea predecible, observable y fácil de cambiar.
            </p>
          </div>
        </div>
      </Container>
      <section className="section-space mt-20 border-y border-border bg-surface-subtle">
        <Container>
          <SectionHeading
            eyebrow="Cómo trabajo"
            title="Principios para convertir complejidad en soluciones mantenibles."
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {principles.map((principle, index) => (
              <li className="principle-item" key={principle}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{principle}</p>
                <Check size={19} />
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Capacidades"
            title="Experiencia transversal con profundidad técnica."
          />
          <SkillsMarquee />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ title, description, icon: Icon }) => (
              <article className="rounded-2xl border border-border bg-card p-6" key={title}>
                <Icon className="text-accent" />
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <Container>
        <div className="cta-panel">
          <div>
            <p className="eyebrow">Siguiente desafío</p>
            <h2 className="mt-4 text-3xl font-semibold">¿Necesitas una visión técnica integral?</h2>
          </div>
          <Link to="/contact" className="button-light">
            Conversemos <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </main>
  );
}
