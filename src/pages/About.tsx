import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  ArrowRight,
  Linkedin,
  Mail,
  Phone,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Perfil"
            title="Maria Paula Aguirre"
            description="Arquitecta y Diseñadora de Interiores comprometida con crear espacios que elevan la experiencia humana."
          />
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Photo & contact sidebar */}
            <aside className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-28 space-y-8"
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/home/profile.png`}
                    alt="Maria Paula Aguirre"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contact card */}
                <div className="p-6 border border-border rounded-lg space-y-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium">
                    Datos de Contacto
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="mailto:mapa-aguirre@hotmail.com"
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Mail className="size-4 text-accent/70" />
                        mapa-aguirre@hotmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/573016231736"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Phone className="size-4 text-accent/70" />
                        +57 301 623 1736
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/maria-paula-aguirre-carrasco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Linkedin className="size-4 text-accent/70" />
                        LinkedIn Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </aside>

            {/* Bio */}
            <div className="lg:col-span-3 space-y-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-serif text-2xl mb-5">Sobre Mí</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Soy Maria Paula Aguirre Carrasco, arquitecta y diseñadora
                    de interiores con sede en Colombia. Durante más de seis
                    años he dedicado mi carrera a transformar espacios en
                    lugares que inspiran, conectan y elevan la calidad de vida
                    de quienes los habitan.
                  </p>
                  <p>
                    Mi enfoque se centra en la intersección entre estética,
                    funcionalidad y sostenibilidad. Cada proyecto comienza con
                    una escucha profunda — entender no solo lo que el cliente
                    necesita, sino cómo quiere sentirse en su espacio. A partir
                    de esa premisa, desarrollo soluciones que integran
                    materiales naturales, iluminación cuidada y una paleta
                    cromática que refuerza la identidad del lugar.
                  </p>
                  <p>
                    A lo largo de mi trayectoría he trabajado en proyectos
                    residenciales, comerciales y de hospitalidad, siempre con
                    la convicción de que el buen diseño no es un lujo sino una
                    herramienta para mejorar la experiencia humana.
                  </p>
                </div>
              </motion.div>

              {/* Timeline */}
              <div>
                <h3 className="font-serif text-2xl mb-8">Experiencia</h3>
                <div className="space-y-8">
                  {[
                    {
                      icon: Briefcase,
                      period: "2022 — Presente",
                      title: "Directora de Diseño",
                      org: "Estudio MAPA — Diseño & Arquitectura",
                      desc: "Liderazgo creativo de proyectos residenciales y comerciales de alto nivel.",
                    },
                    {
                      icon: Briefcase,
                      period: "2019 — 2022",
                      title: "Diseñadora de Interiores Senior",
                      org: "Estudio Creativo de Diseño",
                      desc: "Diseño y ejecución de proyectos de remodelación e interiores para clientes corporativos y residenciales.",
                    },
                    {
                      icon: GraduationCap,
                      period: "2018",
                      title: "Especialización en Diseño de Interiores",
                      org: "Universidad Nacional de Colombia",
                      desc: "Formación avanzada en diseño espacial, materiales y teoría del color.",
                    },
                    {
                      icon: GraduationCap,
                      period: "2017",
                      title: "Arquitectura",
                      org: "Universidad de los Andes",
                      desc: "Formación en arquitectura con enfoque en diseño sostenible y bioclimático.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title + item.period}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex gap-5"
                    >
                      <div className="shrink-0 mt-1">
                        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                          <item.icon className="size-4 text-accent" />
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                          {item.period}
                        </p>
                        <h4 className="font-serif text-lg text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-accent/80 mt-0.5">
                          {item.org}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Approach */}
              <div>
                <h3 className="font-serif text-2xl mb-6">Mi Enfoque</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Award,
                      title: "Diseño con Propósito",
                      desc: "Cada decisión responde a una intención clara, nunca a modas pasajeras.",
                    },
                    {
                      icon: Award,
                      title: "Materiales Honrados",
                      desc: "Utilizo materiales que revelan su naturaleza y envejecen con dignidad.",
                    },
                    {
                      icon: Award,
                      title: "Luz como Material",
                      desc: "La iluminación natural y artificial son herramientas fundamentales de mi práctica.",
                    },
                    {
                      icon: Award,
                      title: "Escucha Activa",
                      desc: "El mejor diseño nace de comprender verdaderamente al cliente y su contexto.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="p-6 bg-secondary/40 rounded-lg"
                    >
                      <item.icon className="size-5 text-accent mb-3" />
                      <h4 className="font-medium text-foreground mb-1.5 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 bg-primary rounded-lg text-primary-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-xl">¿Trabajamos juntos?</h3>
                  <p className="text-sm text-primary-foreground/60 mt-1">
                    Estoy disponible para proyectos residenciales, comerciales y
                    de hospitalidad.
                  </p>
                </div>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[12px] uppercase tracking-[0.12em] font-medium bg-primary-foreground text-primary rounded hover:bg-primary-foreground/90 transition-colors shrink-0"
                >
                  Contactar
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
