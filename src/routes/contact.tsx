import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, LoaderCircle, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/site/Container";
import { profile } from "@/data/profile";
type FormStatus = "idle" | "loading" | "success" | "error";
type ContactErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto | Germán Trigo Cortés" },
      {
        name: "description",
        content:
          "Conversemos sobre desarrollo, arquitectura, infraestructura o un nuevo desafío tecnológico.",
      },
    ],
    links: [{ rel: "canonical", href: "https://portafolio.alphacorp.cl/contact" }],
  }),
  component: ContactPage,
});
function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: ContactErrors = {};
    for (const field of ["name", "subject", "message"] as const)
      if (String(form.get(field) ?? "").trim().length < 3)
        next[field] = "Ingresa al menos 3 caracteres.";
    const email = String(form.get("email") ?? "");
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Ingresa un email válido.";
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    const whatsappMessage = [
      "Hola Germán, te contacto desde tu portafolio.",
      "",
      `Nombre: ${String(form.get("name"))}`,
      `Email: ${email}`,
      `Asunto: ${String(form.get("subject"))}`,
      "",
      String(form.get("message")),
    ].join("\n");
    const whatsappUrl = `https://wa.me/${profile.phone.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
    window.setTimeout(() => {
      setStatus("success");
      window.location.assign(whatsappUrl);
    }, 350);
  }
  return (
    <main className="page-top section-space">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Contacto</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Hablemos de lo que necesitas resolver.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Cuéntame el contexto, el objetivo y dónde está hoy el desafío. Te responderé para
              evaluar cómo puedo aportar.
            </p>
            <ul className="mt-10 space-y-4">
              <li>
                <a className="contact-link" href={`mailto:${profile.email}`}>
                  <Mail size={19} />
                  <span>
                    <small>Email</small>
                    {profile.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="contact-link"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={19} />
                  <span>
                    <small>LinkedIn</small>/in/darikharian
                  </span>
                </a>
              </li>
              <li>
                <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={19} />
                  <span>
                    <small>GitHub</small>/darikHarian
                  </span>
                </a>
              </li>
              <li className="contact-link">
                <MapPin size={19} />
                <span>
                  <small>Ubicación</small>
                  {profile.location}
                </span>
              </li>
            </ul>
          </div>
          <form
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            onSubmit={submit}
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label="Nombre" placeholder="Tu nombre" error={errors.name} />
              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="tu@email.com"
                error={errors.email}
              />
              <div className="sm:col-span-2">
                <Field
                  name="subject"
                  label="Asunto"
                  placeholder="¿En qué puedo ayudarte?"
                  error={errors.subject}
                />
              </div>
              <label className="sm:col-span-2">
                <span className="field-label">Mensaje</span>
                <textarea
                  className="field-input min-h-40 resize-y"
                  name="message"
                  placeholder="Contexto, objetivos y alcance inicial…"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="field-error">
                    {errors.message}
                  </span>
                )}
              </label>
            </div>
            <button
              type="submit"
              className="button-primary mt-6 w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <LoaderCircle className="animate-spin" size={18} /> Validando…
                </>
              ) : (
                <>
                  Enviar por WhatsApp <MessageCircle size={18} />
                </>
              )}
            </button>
            <div className="mt-4 min-h-11 text-sm" role="status" aria-live="polite">
              {status === "success" && (
                <p className="rounded-lg bg-success/10 p-3 text-success">
                  Abriendo WhatsApp con tu mensaje preparado…
                </p>
              )}
              {status === "error" && (
                <p className="rounded-lg bg-destructive/10 p-3 text-destructive">
                  Revisa los campos señalados antes de continuar.
                </p>
              )}
            </div>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Al continuar se abrirá WhatsApp con el mensaje preparado. Podrás revisarlo antes de
              enviarlo.
            </p>
          </form>
        </div>
      </Container>
    </main>
  );
}
function Field({
  name,
  label,
  type = "text",
  placeholder,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  error: string | undefined;
}) {
  const errorId = `${name}-error`;
  return (
    <label>
      <span className="field-label">{label}</span>
      <input
        className="field-input"
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <span id={errorId} className="field-error">
          {error}
        </span>
      )}
    </label>
  );
}
