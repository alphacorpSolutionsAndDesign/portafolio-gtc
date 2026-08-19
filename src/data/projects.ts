export const projectCategories = [
  "Todos",
  "Full Stack",
  "Web Development",
  "Business Software",
  "E-commerce",
  "Infrastructure",
  "Networking",
  "Cybersecurity",
  "Automation",
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "Todos">;

export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description?: string;
  category: ProjectCategory;
  additionalCategories?: ProjectCategory[];
  technologies?: string[];
  techniques?: string[];
  features?: string[];
  image?: string;
  gallery?: string[];
  featured: boolean;
  website?: string;
  repository?: string;
  year?: string;
  challenge?: string;
  solution?: string;
  architecture?: string;
  results?: string[];
}

const projectAsset = (file: string) =>
  `https://portafolio.alphacorp.cl/assets/img/projects/${file}`;

export const projects: Project[] = [
  {
    id: 1,
    slug: "fusioncar-platform",
    title: "Fusioncar",
    shortDescription:
      "Experiencia web comercial para presentar servicios automotrices y facilitar el contacto con clientes.",
    description:
      "Sitio corporativo orientado a convertir visitas en oportunidades comerciales, con una experiencia clara en cualquier dispositivo.",
    category: "Web Development",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive UI"],
    image: projectAsset("fusioncar.png"),
    gallery: [projectAsset("fusioncar.png")],
    featured: false,
    website: "https://www.fusioncar.cl/",
    year: "2024",
    challenge:
      "Organizar una oferta de servicios amplia en una navegación simple y generar confianza desde el primer contacto.",
    solution:
      "Se diseñó una interfaz responsiva con jerarquía visual clara, llamados a la acción visibles y contenido enfocado en las necesidades del cliente.",
    architecture:
      "Frontend modular desplegado como sitio web optimizado, con componentes reutilizables y recursos cargados de forma progresiva.",
    results: [
      "Presentación comercial más clara",
      "Acceso directo a los canales de contacto",
      "Experiencia consistente en móvil y escritorio",
    ],
  },
  {
    id: 2,
    slug: "valles-arquitectura",
    title: "Valles Arquitectura",
    shortDescription:
      "Portafolio visual para un estudio de arquitectura, centrado en comunicar proyectos con sobriedad.",
    description:
      "Una vitrina digital que equilibra identidad, contenido visual y rendimiento para destacar el trabajo del estudio.",
    category: "Web Development",
    technologies: ["JavaScript", "Sass", "Bootstrap", "GitHub Pages"],
    image: projectAsset("valles-arquitectura.png"),
    gallery: [projectAsset("valles-arquitectura.png")],
    featured: false,
    website: "https://darikharian.github.io/VallesArquitectura3/",
    repository: "https://github.com/darikharian/VallesArquitectura3",
    year: "2023",
    challenge:
      "Dar protagonismo al material arquitectónico sin comprometer claridad, navegación ni adaptación entre pantallas.",
    solution:
      "Se construyó una composición editorial responsiva, con navegación directa y componentes visuales consistentes.",
    architecture:
      "Sitio estático organizado por secciones, estilos Sass y despliegue automatizado mediante GitHub Pages.",
    results: ["Identidad visual coherente", "Navegación simple", "Despliegue reproducible"],
  },
  {
    id: 3,
    slug: "olivia-ros",
    title: "Olivia Ros",
    shortDescription:
      "Landing page gastronómica desarrollada con énfasis en composición, responsive design y detalle visual.",
    description:
      "Implementación frontend de una presencia personal y gastronómica, pensada como ejercicio de fidelidad visual y adaptación responsive.",
    category: "Web Development",
    technologies: ["HTML5", "CSS3", "Bootstrap", "Git"],
    image: projectAsset("olivia-ros.png"),
    gallery: [projectAsset("olivia-ros.png")],
    featured: false,
    website: "https://darikharian.github.io/classroom-infocal/modulo2/seccion2/dia3/desafioGuiado/",
    repository: "https://github.com/darikharian/classroom-infocal",
    year: "2022",
    challenge:
      "Traducir una propuesta visual a una interfaz fiel, legible y adaptable con una base técnica sencilla.",
    solution:
      "Se implementaron secciones semánticas y una grilla responsiva, cuidando tipografía, espaciado e imágenes.",
    architecture:
      "Frontend estático basado en HTML semántico, estilos reutilizables y componentes de Bootstrap.",
    results: ["Diseño adaptable", "Código estructurado", "Entrega publicada y accesible"],
  },
  {
    id: 4,
    slug: "viajes-chile",
    title: "Viajes Chile",
    shortDescription:
      "Sitio turístico inmersivo con navegación por contenido, componentes interactivos y diseño adaptable.",
    description:
      "Experiencia editorial para descubrir destinos chilenos, combinando contenido visual con interacciones ligeras.",
    category: "Web Development",
    technologies: ["JavaScript", "Bootstrap", "CSS3", "GitHub Pages"],
    image: projectAsset("viajes-chile.png"),
    gallery: [projectAsset("viajes-chile.png")],
    featured: false,
    website: "https://darikharian.github.io/classroom-infocal/modulo2/seccion4/dia5/",
    repository: "https://github.com/darikharian/classroom-infocal",
    year: "2022",
    challenge:
      "Presentar múltiples destinos y contenidos sin perder continuidad visual ni usabilidad en dispositivos pequeños.",
    solution:
      "Se desarrolló una navegación compacta, tarjetas de contenido y transiciones discretas sobre una grilla responsiva.",
    architecture:
      "Aplicación frontend estática con JavaScript progresivo, componentes Bootstrap y publicación en GitHub Pages.",
    results: [
      "Contenido fácil de explorar",
      "Interacciones ligeras",
      "Compatibilidad multidispositivo",
    ],
  },
  {
    id: 5,
    slug: "universo-store-ecommerce-headless",
    title: "Universo Store — E-commerce Headless",
    shortDescription: "Caso de estudio pendiente de documentación técnica y comercial.",
    category: "E-commerce",
    featured: true,
  },
  {
    id: 6,
    slug: "savaltec-gestion-cotizaciones",
    title: "Savaltec — Sistema de Gestión de Cotizaciones",
    shortDescription:
      "Aplicación empresarial desarrollada para digitalizar y centralizar la creación, administración y seguimiento de cotizaciones comerciales.",
    description:
      "Sistema desarrollado para optimizar el proceso de generación y administración de cotizaciones de Savaltec, transformando un proceso comercial en una herramienta digital estructurada y fácil de utilizar.",
    category: "Business Software",
    additionalCategories: ["Full Stack"],
    featured: true,
  },
  {
    id: 7,
    slug: "crm-empresarial-cobranza-gestion",
    title: "CRM Empresarial de Cobranza y Gestión",
    shortDescription: "Caso de estudio pendiente de documentación técnica y comercial.",
    category: "Business Software",
    featured: true,
  },
  {
    id: 8,
    slug: "cctv-inteligente-morrillos-norte",
    title: "Sistema CCTV Inteligente — Morrillos Norte I y II",
    shortDescription: "Caso de estudio pendiente de documentación técnica y de infraestructura.",
    category: "Infrastructure",
    featured: true,
  },
  {
    id: 9,
    slug: "circular-textil",
    title: "Circular Textil",
    shortDescription:
      "Proyecto web desarrollado para presentar digitalmente la marca, sus servicios y propuesta de valor mediante una experiencia moderna y responsive.",
    category: "Web Development",
    featured: false,
  },
  {
    id: 10,
    slug: "vicente-mayo",
    title: "Vicente Mayo",
    shortDescription:
      "Proyecto web desarrollado para cliente, enfocado en ofrecer una presencia digital profesional, clara y adaptada a diferentes dispositivos.",
    category: "Web Development",
    featured: false,
  },
  {
    id: 11,
    slug: "theocar",
    title: "Theocar",
    shortDescription:
      "Proyecto web desarrollado para fortalecer la presencia digital de la empresa y presentar sus servicios mediante una interfaz moderna y responsive.",
    category: "Web Development",
    featured: false,
  },
  {
    id: 12,
    slug: "constructora-brac",
    title: "Constructora BRAC",
    shortDescription:
      "Sitio corporativo desarrollado para comunicar los servicios, experiencia y proyectos de la constructora mediante una presencia digital profesional.",
    category: "Web Development",
    featured: false,
  },
  {
    id: 13,
    slug: "inmobiliaria-lh",
    title: "Inmobiliaria LH",
    shortDescription:
      "Proyecto web orientado a la presentación profesional de la inmobiliaria y su oferta, priorizando claridad, experiencia de usuario y adaptación responsive.",
    category: "Web Development",
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCategoryLabel(project: Project) {
  return [project.category, ...(project.additionalCategories ?? [])].join(" / ");
}

export function projectMatchesCategory(project: Project, category: ProjectCategory) {
  return project.category === category || project.additionalCategories?.includes(category) === true;
}
