import React from "react";
import { motion } from "framer-motion";
import { Instagram as InstaIcon } from "lucide-react";

const images = [
  "/images/insta-1.png",
  "/images/insta-2.png",
  "/images/insta-3.png",
  "/images/insta-4.png",
  "/images/insta-5.png",
  "/images/insta-6.png",
];

export function Instagram() {
  return (
    <section className="py-10 md:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <div>
            <h3 className="text-base md:text-2xl font-serif font-bold text-foreground flex items-center gap-2">
              <InstaIcon className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              <span className="text-secondary">@zaramehndiarts</span>
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground font-light mt-0.5">
              Daily inspiration & behind-the-scenes magic
            </p>
          </div>
          <a
            href="#"
            className="text-xs md:text-sm font-semibold text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground px-3 py-1.5 rounded-full transition-colors"
          >
            Follow
          </a>
        </div>

        {/* Grid — 3 cols mobile, 6 cols desktop */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2">
          {images.map((src, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="aspect-square overflow-hidden group rounded-md md:rounded-lg block relative"
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <InstaIcon className="w-6 h-6 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
