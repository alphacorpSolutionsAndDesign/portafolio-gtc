import { Blocks, CloudCog, CodeXml, Container, Network, ShieldCheck } from "lucide-react";

export const profile = {
  name: "Germán Trigo Cortés",
  role: "Full-Stack Developer & Tech Lead",
  email: "german.trigo@alphacorp.cl",
  phone: "+56998146229",
  location: "Chile",
  github: "https://github.com/darikHarian",
  linkedin: "https://www.linkedin.com/in/darikharian",
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Node.js",
  "Express",
  "Electron",
  "HTML5",
  "CSS3",
  "Sass",
  "Tailwind CSS",
  "Firebase",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git",
  "GitHub",
  "Linux",
];

export const capabilities = [
  {
    title: "Full-Stack Development",
    description:
      "Desarrollo aplicaciones completas conectando experiencias de usuario, APIs, autenticación, datos y servicios externos en una solución coherente.",
    icon: CodeXml,
  },
  {
    title: "Software Architecture",
    description:
      "Diseño sistemas modulares y mantenibles, con responsabilidades claras y decisiones técnicas preparadas para evolucionar.",
    icon: Blocks,
  },
  {
    title: "DevOps & Deployment",
    description:
      "Estructuro entornos reproducibles, despliegues y automatizaciones con Docker, Linux y prácticas de integración continua.",
    icon: Container,
  },
  {
    title: "Cloud & Backend Services",
    description:
      "Integro servicios cloud, autenticación, almacenamiento, funciones serverless y APIs con foco en confiabilidad y control operativo.",
    icon: CloudCog,
  },
  {
    title: "Infrastructure & Networking",
    description:
      "Trabajo con virtualización, conectividad y servicios de red entendiendo cómo cada capa impacta la disponibilidad de una solución.",
    icon: Network,
  },
  {
    title: "Cybersecurity",
    description:
      "Incorporo control de acceso, hardening y análisis de riesgos desde el diseño, reduciendo exposición sin frenar la operación.",
    icon: ShieldCheck,
  },
];
