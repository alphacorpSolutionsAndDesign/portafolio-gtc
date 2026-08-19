import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "./Container";

const navigation = [
  { label: "Inicio", to: "/" },
  { label: "Proyectos", to: "/projects" },
  { label: "Sobre mí", to: "/about" },
  { label: "Contacto", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <span className="grid size-9 place-items-center rounded-lg border border-accent/35 bg-accent/10 font-mono text-sm font-bold text-accent">
            GT
          </span>
          <span className="hidden text-sm font-semibold tracking-wide sm:block">Germán Trigo</span>
        </Link>
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="nav-link"
                  activeProps={{ className: "nav-link nav-link-active" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/contact" className="button-primary hidden md:inline-flex">
          Hablemos
        </Link>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-border md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="border-t border-border bg-background md:hidden"
        >
          <Container className="py-4">
            <ul className="grid gap-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="nav-link block"
                    activeProps={{ className: "nav-link nav-link-active block" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
