import { motion } from "framer-motion";
import { Link } from "react-router";
import Navigation from "@/components/Navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          <p className="font-serif text-8xl lg:text-9xl text-muted-foreground/20 mb-4">
            404
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl text-foreground mb-3">
            Página no encontrada
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            El espacio que buscas no existe aún. Tal vez fue reubicado o
            aún está en diseño.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-[12px] uppercase tracking-[0.15em] font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
          >
            Volver al Inicio
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
