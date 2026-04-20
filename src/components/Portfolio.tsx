import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "All" | "Bridal" | "Arabic" | "Traditional" | "Modern";

const portfolioItems = [
  { id: 1, category: "Bridal",      src: "/images/gallery-bridal-1.png",  alt: "Bridal full hands" },
  { id: 2, category: "Bridal",      src: "/images/gallery-bridal-2.png",  alt: "Bridal feet design" },
  { id: 3, category: "Arabic",      src: "/images/gallery-arabic-1.png",  alt: "Arabic trailing design" },
  { id: 4, category: "Traditional", src: "/images/insta-1.png",           alt: "Traditional palm design" },
  { id: 5, category: "Modern",      src: "/images/gallery-modern-1.png",  alt: "Modern minimalist" },
  { id: 6, category: "Arabic",      src: "/images/insta-3.png",           alt: "Arabic fingers" },
  { id: 7, category: "Traditional", src: "/images/insta-6.png",           alt: "Traditional deep stain" },
  { id: 8, category: "Bridal",      src: "/images/insta-4.png",           alt: "Bridal back hand" },
  { id: 9, category: "Modern",      src: "/images/insta-2.png",           alt: "Modern geometric" },
];

const categories: Category[] = ["All", "Bridal", "Arabic", "Traditional", "Modern"];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const filtered = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((i) => i.category === activeCategory);

  const openLightbox = (idx: number) => {
    setCurrentIdx(idx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };
  const prev = () => setCurrentIdx((c) => (c - 1 + filtered.length) % filtered.length);
  const next = () => setCurrentIdx((c) => (c + 1) % filtered.length);

  return (
    <section id="portfolio" className="py-12 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-4 md:mb-10">
          <div>
            <span className="text-secondary font-semibold tracking-widest uppercase text-[11px] md:text-sm mb-1 block">
              Gallery
            </span>
            <h2 className="text-2xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              A Masterclass in <span className="italic text-primary">Detail</span>
            </h2>
          </div>
        </div>

        {/* Category chips — scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-4 md:mb-8 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-background text-muted-foreground border-border hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid — 3 cols on mobile (tight), 3 cols on desktop */}
        <motion.div layout className="grid grid-cols-3 md:grid-cols-3 gap-1.5 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden group cursor-pointer bg-muted"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white w-7 h-7 drop-shadow-md scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 p-2 rounded-full z-10"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            >
              <X className="w-5 h-5" />
            </button>
            {/* Prev/Next */}
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 p-2 rounded-full z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 p-2 rounded-full z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.img
              key={filtered[currentIdx]?.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={filtered[currentIdx]?.src}
              alt={filtered[currentIdx]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs">
              {currentIdx + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
