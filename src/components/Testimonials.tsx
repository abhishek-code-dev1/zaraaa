import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priyanka S.",
    role: "Bride",
    text: "Zara is truly a magician! She understood exactly what I wanted for my big day. The stain was incredibly dark and lasted through my entire honeymoon.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anjali K.",
    role: "Bride",
    text: "I wanted a mix of traditional Indian motifs with modern spacing, and Zara delivered beyond expectations. Everyone asked about my mehndi at the wedding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Meera R.",
    role: "Bridesmaid",
    text: "Booked for my best friend's sangeet. She managed beautiful designs for 15 girls with such speed and grace. The quality of organic henna paste is unmatched.",
    rating: 5,
  },
  {
    id: 4,
    name: "Simran V.",
    role: "Bride",
    text: "My skin is very sensitive but Zara's natural henna gave zero issues and the deepest mahogany stain I've ever seen. Her portrait work is stunning.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "36px 36px" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="mb-7 md:mb-14 text-center">
          <span className="text-secondary font-semibold tracking-widest uppercase text-[11px] md:text-sm mb-1.5 block">
            Love Notes
          </span>
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-primary-foreground">
            Words from Our <span className="italic text-secondary">Brides</span>
          </h2>
        </div>

        {/* Mobile: vertical compact cards */}
        <div className="md:hidden space-y-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-3"
            >
              {/* Avatar */}
              <div className="shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-serif text-lg font-bold">
                {t.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <span className="text-sm font-bold text-primary-foreground">{t.name}</span>
                    <span className="text-secondary text-xs font-medium ml-1.5">{t.role}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-primary-foreground/80 text-xs leading-relaxed line-clamp-3">
                  "{t.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 2-col grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col hover:bg-white/10 transition-colors"
            >
              <Quote className="w-8 h-8 text-secondary/40 mb-4" />
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="fill-current w-4 h-4" />
                ))}
              </div>
              <p className="text-lg font-serif font-medium leading-relaxed mb-8 flex-grow text-primary-foreground/90">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-serif text-xl font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-primary-foreground">{t.name}</div>
                  <div className="text-secondary text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
