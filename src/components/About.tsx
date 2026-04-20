import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Leaf, Palette, Heart } from "lucide-react";

const badges = [
  { icon: Leaf,       label: "100% Natural Henna" },
  { icon: BadgeCheck, label: "10+ Years Experience" },
  { icon: Palette,    label: "Bespoke Designs" },
  { icon: Heart,      label: "500+ Brides" },
];

export function About() {
  return (
    <section id="about" className="py-12 md:py-28 bg-background relative overflow-hidden">
      {/* Soft blobs — desktop only */}
      <div className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6">

        {/* ── MOBILE LAYOUT ── */}
        <div className="md:hidden">
          {/* Top image strip */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-5 shadow-lg">
            <img
              src="/images/artist-portrait.png"
              alt="Zara – Mehndi Artist"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <div>
                <div className="text-white font-serif font-bold text-lg leading-none">Zara Ahmed</div>
                <div className="text-secondary text-xs mt-0.5">Master Mehndi Artist</div>
              </div>
              <div className="bg-secondary/90 text-primary font-bold text-xs px-3 py-1.5 rounded-full">
                10+ Yrs
              </div>
            </div>
          </div>

          {/* Badge chips */}
          <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1 mb-4">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="shrink-0 flex items-center gap-1.5 bg-card border border-border rounded-full px-3 py-1.5 text-xs font-medium text-foreground"
              >
                <Icon className="w-3.5 h-3.5 text-secondary" />
                {label}
              </div>
            ))}
          </div>

          {/* Text */}
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3 leading-tight">
            The Hands Behind the <span className="italic text-primary">Magic</span>
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-4">
            What began as a childhood fascination with fresh henna has blossomed into a lifelong devotion.
            For over a decade, Zara has been crafting breathtaking mehndi that blends traditional Indian
            heritage with contemporary elegance — using 100% organic, natural henna paste.
          </p>
          <button
            className="mt-4 text-sm font-semibold text-primary underline underline-offset-4"
            onClick={() => {
              const el = document.querySelector("#booking");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a consultation →
          </button>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:grid grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative z-10">
              <img src="/images/artist-portrait.png" alt="Zara – Mehndi Artist" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -inset-4 border border-secondary/30 rounded-2xl z-0 translate-x-4 translate-y-4" />
            <div className="absolute -right-10 bottom-12 glass-card p-6 rounded-2xl z-20 max-w-[200px]">
              <div className="text-4xl font-serif font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years of Artistry</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Meet The Artist</span>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              The Hands Behind <br />The <span className="italic text-primary">Magic</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground font-light">
              <p>
                What began as a childhood fascination with the scent of fresh henna has blossomed into
                a lifelong devotion to the art of mehndi. For over a decade, Zara has been part of
                countless brides' most cherished moments.
              </p>
              <p>
                Her style is a delicate dance between traditional Indian heritage and contemporary elegance —
                using 100% natural, organic henna crafted with essential oils for a rich, deep stain.
              </p>
            </div>
            <div className="mt-10 pt-10 border-t border-border grid grid-cols-2 gap-8">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
