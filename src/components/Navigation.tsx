import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "/proyectos", label: "Proyectos" },
  { path: "/perfil", label: "Perfil" },
  { path: "/contacto", label: "Contacto" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Only the landing page hero has a dark background
  const isOnHero = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setScrolled(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_0_0.08]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Inicio"
          >
            <span
              className={`font-serif text-xl tracking-tight transition-colors duration-300 group-hover:text-accent ${
                isOnHero
                  ? "text-primary-foreground"
                  : "text-foreground"
              }`}
            >
              MAPA
            </span>
            <span
              className={`hidden sm:block w-px h-5 transition-colors duration-300 ${
                isOnHero
                  ? "bg-primary-foreground/30"
                  : "bg-border"
              }`}
              aria-hidden="true"
            />
            <span
              className={`hidden sm:block text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                isOnHero
                  ? "text-primary-foreground/60"
                  : "text-muted-foreground"
              }`}
            >
              Arquitectura & Diseño
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                    isOnHero
                      ? isActive
                        ? "text-primary-foreground"
                        : "text-primary-foreground/70 hover:text-primary-foreground"
                      : isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className={`absolute bottom-0 left-4 right-4 h-px ${
                        isOnHero ? "bg-accent" : "bg-accent"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <div
              className={`w-px h-5 mx-2 transition-colors duration-300 ${
                isOnHero ? "bg-primary-foreground/20" : "bg-border"
              }`}
              aria-hidden="true"
            />
            <Link
              to="/contacto"
              className={`ml-2 px-5 py-2.5 text-[12px] uppercase tracking-[0.15em] font-medium rounded transition-colors duration-300 ${
                isOnHero
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              Cotizar
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isOnHero ? "text-primary-foreground" : "text-foreground"
            }`}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 text-[13px] uppercase tracking-[0.15em] font-medium border-b border-border/50 transition-colors ${
                    location.pathname === link.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                className="mt-4 py-3 text-center text-[13px] uppercase tracking-[0.15em] font-medium bg-primary text-primary-foreground rounded"
              >
                Cotizar Proyecto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
