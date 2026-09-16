import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProjectCarousel from "@/components/ProjectCarousel";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/home/hero-bg.png"
            alt="Interior de diseño contemporáneo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-32 lg:py-40 w-full">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/50 font-medium mb-6"
            >
              Arquitectura & Diseño de Interiores
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl text-primary-foreground leading-[1.08] tracking-tight"
            >
              Espacios que
              <br />
              cuentan historias
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 text-base sm:text-lg text-primary-foreground/60 max-w-lg leading-relaxed"
            >
              Diseño que transforma la manera en que habitas, trabajas y
              conectas con tu entorno. Cada proyecto nace de la escucha y se
              materializa en soluciones estéticas con sentido.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/proyectos"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[12px] uppercase tracking-[0.15em] font-medium bg-primary-foreground text-primary rounded hover:bg-primary-foreground/90 transition-colors"
              >
                Ver Proyectos
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[12px] uppercase tracking-[0.15em] font-medium border border-primary-foreground/30 text-primary-foreground rounded hover:bg-primary-foreground/10 transition-colors"
              >
                Agendar Cita
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-primary-foreground/40 to-transparent" />
        </motion.div>
      </section>

      {/* ─── Philosophy ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <SectionHeading
              eyebrow="Filosofía"
              title="El equilibrio entre forma y funcionalidad"
              description="Creo que los espacios bien diseñados no solo se ven — se sienten. Mi enfoque combina una mirada contemporánea con sensibilidad por los materiales, la luz y las personas que habitarán cada proyecto."
            />
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "6+", label: "Años de experiencia" },
                { number: "40+", label: "Proyectos realizados" },
                { number: "100%", label: "Clientes satisfechos" },
                { number: "1", label: "Visión coherente" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 bg-secondary/50 rounded-lg"
                >
                  <p className="font-serif text-3xl lg:text-4xl text-foreground">
                    {stat.number}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Projects Carousel ──────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Portafolio"
            title="Mis proyectos"
            description="Cada proyecto es una oportunidad para crear algo único. Haz clic en cualquiera para explorar los detalles."
          />
        </div>
        <div className="mt-8">
          <ProjectCarousel />
        </div>
      </section>

      {/* ─── Services ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Servicios"
            title="Cómo puedo transformar tu espacio"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Gerencia de Proyecto",
                description:
                  "Gestión integral del proyecto desde la conceptualización hasta la entrega, asegurando tiempos, costos y calidad.",
              },
              {
                title: "Planeación Estratégica",
                description:
                  "Análisis y planificación del espacio según las necesidades funcionales y estéticas del cliente.",
              },
              {
                title: "Costos y Presupuestos",
                description:
                  "Elaboración detallada de presupuestos y control de costos para cada fase del proyecto.",
              },
              {
                title: "Diseño 3D",
                description:
                    "Visualización fotorrealista del proyecto antes de su ejecución, facilitando la toma de decisiones.",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group p-8 border border-border rounded-lg hover:border-accent/40 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Preview ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="/images/home/about-portrait.png"
                  alt="Maria Paula Aguirre — Arquitecta y Diseñadora de Interiores"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-lg -z-10" />
            </motion.div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/40 font-medium mb-4">
                Sobre Mí
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
                Maria Paula Aguirre
              </h2>
              <p className="mt-2 text-accent text-sm font-medium">
                Arquitecta & Diseñadora de Interiores
              </p>
              <p className="mt-6 text-primary-foreground/60 leading-relaxed">
                Con más de seis años de trayectoria, me especializo en crear
                espacios residenciales y comerciales que equilibran estética,
                confort y sostenibilidad. Mi trabajo parte de la escucha
                atenta y se materializa en diseños que superan expectativas.
              </p>
              <Link
                to="/perfil"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-[12px] uppercase tracking-[0.15em] font-medium border border-primary-foreground/20 text-primary-foreground rounded hover:bg-primary-foreground/10 transition-colors"
              >
                Conocer Más
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Colaboración"
            title="¿Tienes un proyecto en mente?"
            description="Cada espacio tiene una historia por contar. Cuéntame tu idea y hagamos juntos realidad ese espacio que imaginas."
            align="center"
          />
          <div className="mt-10 text-center">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 text-[12px] uppercase tracking-[0.15em] font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
            >
              Iniciar Conversación
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
