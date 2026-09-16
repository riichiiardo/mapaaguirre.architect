import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/data/projects";

/* ─── Context ────────────────────────────────────────────────── */
interface CarouselCtx {
  onCardClose: (index: number) => void;
  currentIndex: number;
}

const CarouselContext = createContext<CarouselCtx>({
  onCardClose: () => {},
  currentIndex: 0,
});

/* ─── Main Component ─────────────────────────────────────────── */
export default function ProjectCarousel() {
  const cards = projects.map((project, index) => (
    <CarouselCard key={project.slug} project={project} index={index} />
  ));

  return (
    <div className="w-full">
      <Carousel items={cards} />
    </div>
  );
}

/* ─── Carousel ───────────────────────────────────────────────── */
function Carousel({ items }: { items: React.ReactNode[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 280 : 420;
      const gap = 16;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
        behavior: "smooth",
      });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 280 : 420;
      const gap = 16;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        {/* Scrollable track */}
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-auto overscroll-x-auto scroll-smooth py-8 md:py-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-4 pl-4 md:pl-10 pr-4 md:pr-[33%]">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                className="shrink-0"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-end gap-3 mt-4 px-4 md:px-10">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-200",
              canScrollLeft
                ? "bg-background text-foreground hover:bg-foreground hover:text-background"
                : "opacity-30 cursor-not-allowed"
            )}
            aria-label="Anterior"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-200",
              canScrollRight
                ? "bg-background text-foreground hover:bg-foreground hover:text-background"
                : "opacity-30 cursor-not-allowed"
            )}
            aria-label="Siguiente"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

/* ─── Card ───────────────────────────────────────────────────── */
function CarouselCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      {/* ─── Expanded Modal ─────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-primary/80 backdrop-blur-lg"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-6 md:my-10 h-fit max-w-4xl rounded-2xl bg-background p-4 md:p-8 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="sticky top-2 ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors z-10"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cover image */}
              <div className="rounded-xl overflow-hidden mb-6">
                <img
                  src={project.gallery[0]}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              {/* Project info */}
              <div className="px-2 pb-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-2">
                  {project.category}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  {project.title}
                </h3>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                  <span>{project.location}</span>
                  <span className="text-border">|</span>
                  <span>{project.area}</span>
                  <span className="text-border">|</span>
                  <span>{project.year}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Mini gallery */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden aspect-[4/3]">
                      <img
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={`/proyectos/${project.slug}`}
                  onClick={handleClose}
                  className="inline-flex items-center gap-2 px-6 py-3 text-[12px] uppercase tracking-[0.12em] font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                >
                  Ver Proyecto Completo
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── Thumbnail Card ─────────────────────────────────── */}
      <motion.button
        onClick={handleOpen}
        className="relative z-10 flex h-[22rem] w-[18rem] md:h-[28rem] md:w-[24rem] flex-col items-start justify-end overflow-hidden rounded-2xl bg-secondary group cursor-pointer shrink-0"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <BlurImage
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 z-0 object-cover"
        />
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-primary/40 via-transparent to-primary/70 z-10" />
        {/* Content */}
        <div className="relative z-20 p-6 w-full">
          <p className="text-left text-[11px] uppercase tracking-[0.2em] text-primary-foreground/60 font-medium">
            {project.category}
          </p>
          <p className="mt-1.5 max-w-[260px] text-left font-serif text-xl md:text-2xl font-semibold text-primary-foreground leading-snug">
            {project.title}
          </p>
          <div className="mt-3 flex items-center gap-2 text-primary-foreground/50 text-xs">
            <span>{project.location}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
        </div>
      </motion.button>
    </>
  );
}

/* ─── Blur Image ─────────────────────────────────────────────── */
function BlurImage({
  src,
  alt,
  className,
  ...rest
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-500",
        loaded ? "blur-0" : "blur-sm",
        className
      )}
      onLoad={() => setLoaded(true)}
      src={src}
      alt={alt || ""}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
}
