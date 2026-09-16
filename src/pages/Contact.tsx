import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
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

export default function Contact() {
  const submitMessage = useMutation(api.contactMessages.submit);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      await submitMessage(data);
      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos de tu proyecto"
            description="Cuéntame tu idea y exploremos juntos las posibilidades. Cada gran espacio comienza con una conversación."
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="size-14 text-accent mx-auto mb-5" />
                  </motion.div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    Mensaje enviado
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Gracias por contactarme. Revisaré tu mensaje y te
                    responderé a la brevedad posible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm text-accent hover:text-accent/80 underline underline-offset-4 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium"
                      >
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors"
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium"
                      >
                        Tipo de proyecto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors appearance-none"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Remodelación">Remodelación</option>
                        <option value="Hospitalidad">Hospitalidad</option>
                        <option value="Oficina">Oficina Corporativa</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium"
                    >
                      Cuéntame sobre tu proyecto *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors resize-none"
                      placeholder="Describe tu espacio, tus ideas, tu presupuesto aproximado y cualquier detalle relevante..."
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-[12px] uppercase tracking-[0.15em] font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <aside className="lg:col-span-2">
              <div className="sticky top-28 space-y-8">
                <motion.div
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 border border-border rounded-lg space-y-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium">
                    Información de Contacto
                  </p>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="mailto:mapa-aguirre@hotmail.com"
                        className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Mail className="size-4 mt-0.5 text-accent/70 shrink-0" />
                        <span>mapa-aguirre@hotmail.com</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/573016231736"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Phone className="size-4 mt-0.5 text-accent/70 shrink-0" />
                        <span>+57 301 623 1736</span>
                      </a>
                    </li>
                    <li>
                      <div className="flex items-start gap-3 text-sm text-muted-foreground">
                        <MapPin className="size-4 mt-0.5 text-accent/70 shrink-0" />
                        <span>Bogotá, Colombia</span>
                      </div>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/maria-paula-aguirre-carrasco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Linkedin className="size-4 mt-0.5 text-accent/70 shrink-0" />
                        <span>LinkedIn Profile</span>
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 bg-secondary/40 rounded-lg"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium mb-3">
                    Horario de Atención
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Lunes a Viernes
                    <br />
                    9:00 a.m. — 6:00 p.m.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Sábados con cita previa
                  </p>
                </motion.div>

                <motion.div
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 bg-primary rounded-lg text-primary-foreground"
                >
                  <p className="font-serif text-lg mb-1">¿Urgente?</p>
                  <p className="text-sm text-primary-foreground/60 mb-4">
                    Llama directamente o envía un mensaje de WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/573016231736"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-[12px] uppercase tracking-[0.12em] font-medium bg-primary-foreground text-primary rounded hover:bg-primary-foreground/90 transition-colors"
                  >
                    <Phone className="size-3.5" />
                    WhatsApp
                  </a>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
