import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const categories = ["Todos", ...new Set(projects.map((p) => p.category))];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero band */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Portafolio"
            title="Proyectos"
            description="Una selección de espacios diseñados con criterio, sensibilidad y atención al detalle."
          />
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 py-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-[12px] uppercase tracking-[0.12em] font-medium rounded transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <Link
                  to={`/proyectos/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/60 mb-1">
                        {project.category}
                      </p>
                      <h3 className="font-serif text-xl text-primary-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                      {project.location} — {project.year}
                    </p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">
                No hay proyectos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
