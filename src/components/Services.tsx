import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    id: "bridal",
    title: "Bridal Mehndi",
    tag: "Most Popular",
    description: "Intricate bespoke designs with custom portraits, love stories for your special day.",
    price: "₹2,500",
    image: "/images/gallery-bridal-1.png",
    color: "from-rose-900/80",
  },
  {
    id: "arabic",
    title: "Arabic Mehndi",
    tag: "Trending",
    description: "Elegant flowing floral patterns with bold outlines. Perfect for sangeet.",
    price: "₹1,500",
    image: "/images/gallery-arabic-1.png",
    color: "from-amber-900/80",
  },
  {
    id: "engagement",
    title: "Engagement",
    tag: "Bestseller",
    description: "Refined mid-arm designs with beautiful symmetry to complement your ring.",
    price: "₹2,000",
    image: "/images/insta-4.png",
    color: "from-purple-900/80",
  },
  {
    id: "festival",
    title: "Festival & Party",
    tag: "Quick Book",
    description: "Chic minimalist designs for Karwa Chauth, Eid, Diwali, or as a wedding guest.",
    price: "₹800",
    image: "/images/gallery-modern-1.png",
    color: "from-emerald-900/80",
  },
];

export function Services() {
  const handleBook = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-12 md:py-28 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-6 md:mb-14">
          <div>
            <span className="text-secondary font-semibold tracking-widest uppercase text-[11px] md:text-sm mb-1.5 block">
              Offerings
            </span>
            <h2 className="text-2xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Curated <span className="italic text-primary">Experiences</span>
            </h2>
          </div>
          <button
            onClick={handleBook}
            className="hidden md:flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile: horizontal scroll strip (like Flipkart) */}
        <div className="md:hidden -mx-4 px-4 flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none">
          {services.map((service) => (
            <div
              key={service.id}
              className="snap-start shrink-0 w-[200px] rounded-2xl overflow-hidden relative cursor-pointer shadow-md active:scale-[0.97] transition-transform"
              onClick={handleBook}
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent`} />
                {/* Tag */}
                <div className="absolute top-2.5 left-2.5 bg-secondary text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  {service.tag}
                </div>
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-serif text-base font-bold text-white leading-tight mb-0.5">
                    {service.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-bold text-sm">{service.price}</span>
                    <span className="text-white/70 text-[10px]">onwards</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* CTA card */}
          <div
            className="snap-start shrink-0 w-[140px] rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-[0.97] transition-transform"
            onClick={handleBook}
          >
            <Sparkles className="w-8 h-8 text-secondary" />
            <span className="text-xs font-medium text-center text-muted-foreground px-3 leading-snug">
              Book a Custom Session
            </span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Desktop: 4-col grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={handleBook}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent opacity-70`} />
                <div className="absolute top-3 left-3 bg-secondary text-primary text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                  {service.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 inline-block rounded-full">
                    <span className="text-white text-sm font-semibold">{service.price} onwards</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light mb-3 line-clamp-2">
                {service.description}
              </p>
              <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary transition-colors">
                Inquire Now <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Mobile: "View all" link */}
        <button
          onClick={handleBook}
          className="md:hidden mt-4 w-full py-3 border border-border rounded-xl text-sm font-semibold text-primary flex items-center justify-center gap-2"
        >
          Book a Service <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
