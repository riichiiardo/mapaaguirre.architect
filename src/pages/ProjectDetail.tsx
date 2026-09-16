import { useParams, Link, Navigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/data/projects";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
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

      {/* Cover */}
      <section className="relative h-[60vh] lg:h-[75vh] overflow-hidden">
        <img
          src={project.gallery[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="mx-auto max-w-7xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/50 mb-3"
            >
              {project.category}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] tracking-tight"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Meta strip */}
          <div className="flex flex-wrap gap-8 pb-12 border-b border-border">
            {[
              { icon: MapPin, label: project.location },
              { icon: Calendar, label: project.year },
              { icon: Ruler, label: project.area },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <item.icon className="size-4 text-accent" />
                {item.label}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {project.description}
              </motion.p>

              {/* Gallery */}
              <div className="mt-12 space-y-6">
                {project.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`${project.title} — imagen ${i + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-10">
              {/* Services */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium mb-4">
                  Servicios
                </p>
                <ul className="space-y-2.5">
                  {project.services.map((s) => (
                    <li
                      key={s}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium mb-4">
                  Características
                </p>
                <ul className="space-y-2.5">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 bg-secondary/50 rounded-lg">
                <p className="font-serif text-lg text-foreground mb-2">
                  ¿Te inspira este proyecto?
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Cuéntame tu idea y exploremos juntos las posibilidades.
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[12px] uppercase tracking-[0.12em] font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                >
                  Contactar
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
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
