import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-background">
      {/* Parallax bg */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 dark:bg-black/65 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
        <img
          src="/images/hero-bg.png"
          alt="Intricate bridal mehndi"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-lg md:max-w-3xl mx-auto w-full"
        >
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 mb-5"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white/90 text-xs font-medium ml-1">500+ Happy Brides</span>
          </motion.div>

          <span className="text-secondary font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 block">
            Luxury Bridal Mehndi · Delhi NCR
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 leading-[1.1] text-balance">
            Artistry That{" "}
            <span className="italic text-secondary">Speaks</span>
          </h1>

          <p className="text-sm md:text-xl text-white/80 font-light max-w-sm md:max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed">
            Elevating the ancient tradition of henna into a breathtaking modern art form
            for the contemporary Indian bride.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={() => handleNavClick("#booking")}
              size="lg"
              className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base px-7 py-5 h-auto font-semibold shadow-lg"
            >
              Book Your Date
            </Button>
            <Button
              onClick={() => handleNavClick("#portfolio")}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/20 text-white border-white/25 backdrop-blur-md text-sm md:text-base px-7 py-5 h-auto"
            >
              View Gallery
            </Button>
          </div>

          {/* Quick stats — mobile stripe */}
          <div className="flex items-center justify-center gap-6 mt-8 md:hidden">
            {[
              { val: "10+", label: "Years" },
              { val: "₹800", label: "Starting" },
              { val: "100%", label: "Natural" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-white font-bold text-base leading-none">{s.val}</div>
                <div className="text-white/60 text-[10px] mt-0.5 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-[72px] md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce opacity-60">
        <ChevronDown className="text-white w-5 h-5" />
      </div>
    </section>
  );
}
