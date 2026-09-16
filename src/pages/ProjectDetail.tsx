import { useParams, Link, Navigate } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Ruler,
  User,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/proyectos" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* ─── Hero Cover ────────────────────────────────────────── */}
      <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={project.gallery[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="mx-auto max-w-7xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/50 mb-4"
            >
              {project.category}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl text-primary-foreground leading-[1.05] tracking-tight"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ─── Project Meta Strip ────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-6 lg:gap-10 py-6">
            {[
              { icon: MapPin, label: project.location },
              { icon: Calendar, label: project.year },
              { icon: Ruler, label: project.area },
              { icon: User, label: project.client },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
              >
                <item.icon className="size-4 text-accent shrink-0" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Editorial Layout: Image + Text alternating ────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Intro description — full width */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </motion.div>

          {/* Gallery Image 1 — Full width */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="rounded-lg overflow-hidden mb-20"
          >
            <img
              src={project.gallery[0]}
              alt={`${project.title} — vista principal`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Challenges & Design Concept — Side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
                Desafíos y Soluciones
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenges}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
                Diseño y Concepto
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {project.designConcept}
              </p>
            </motion.div>
          </div>

          {/* Gallery Image 2 — Offset left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="max-w-4xl rounded-lg overflow-hidden mb-20"
          >
            <img
              src={project.gallery[1]}
              alt={`${project.title} — vista interior`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Results — Centered highlight */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center mb-20 py-12 border-y border-border"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
              Resultados
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground italic">
              &ldquo;{project.results}&rdquo;
            </p>
          </motion.div>

          {/* Gallery Image 3 — Full width */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="rounded-lg overflow-hidden mb-20"
          >
            <img
              src={project.gallery[2]}
              alt={`${project.title} — vista final`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Services + Contact sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-6">
                Servicios del Proyecto
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.services.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 p-4 bg-secondary/40 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="p-8 bg-primary rounded-lg text-primary-foreground sticky top-28">
                <p className="font-serif text-xl mb-2">
                  ¿Te inspira este proyecto?
                </p>
                <p className="text-sm text-primary-foreground/60 mb-6">
                  Cuéntame tu idea y exploremos juntos las posibilidades.
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[12px] uppercase tracking-[0.12em] font-medium bg-primary-foreground text-primary rounded hover:bg-primary-foreground/90 transition-colors"
                >
                  Iniciar Conversación
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Prev / Next ───────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {prev ? (
              <Link
                to={`/proyectos/${prev.slug}`}
                className="group flex items-center justify-between p-8 lg:p-10 hover:bg-secondary/30 transition-colors"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                    Anterior
                  </p>
                  <p className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                    {prev.title}
                  </p>
                </div>
                <ArrowLeft className="size-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </Link>
            ) : (
              <div className="p-8 lg:p-10" />
            )}
            {next ? (
              <Link
                to={`/proyectos/${next.slug}`}
                className="group flex items-center justify-between p-8 lg:p-10 hover:bg-secondary/30 transition-colors"
              >
                <div className="text-right ml-auto">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                    Siguiente
                  </p>
                  <p className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                    {next.title}
                  </p>
                </div>
                <ArrowRight className="size-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </Link>
            ) : (
              <div className="p-8 lg:p-10" />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
