import { Link } from "react-router";
import { Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top section */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-tight mb-4">MAPA</p>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Arquitectura y Diseño de Interiores — Creando espacios que
              inspiran, conectan y transforman la manera en que vivimos.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/40 mb-5">
              Navegación
            </p>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Inicio" },
                { to: "/proyectos", label: "Proyectos" },
                { to: "/perfil", label: "Perfil" },
                { to: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/40 mb-5">
              Contacto
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:mapa-aguirre@hotmail.com"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="size-3.5" />
                  mapa-aguirre@hotmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573016231736"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="size-3.5" />
                  +57 301 623 1736
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/maria-paula-aguirre-carrasco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Linkedin className="size-3.5" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-primary-foreground/40">
            © {currentYear} Maria Paula Aguirre Carrasco. Todos los derechos
            reservados.
          </p>
          <p className="text-[11px] text-primary-foreground/30">
            Diseño & Desarrollo
          </p>
        </div>
      </div>
    </footer>
  );
}
