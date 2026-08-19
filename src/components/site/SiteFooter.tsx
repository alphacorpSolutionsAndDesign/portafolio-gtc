import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-subtle py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link to="/" className="text-lg font-semibold">
            {profile.name}
          </Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            Diseño, desarrollo y operación de soluciones tecnológicas completas.
          </p>
          <p className="mt-5 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a className="social-link" href={`mailto:${profile.email}`} aria-label="Enviar email">
            <Mail size={18} />
          </a>
          <a
            className="social-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            className="social-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
