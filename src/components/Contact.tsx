import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const contactCards = [
  { icon: Phone,   label: "Phone",    value: "+91 98765 43210",         sub: "Mon–Sat, 10am–7pm IST",   href: "tel:+919876543210" },
  { icon: Mail,    label: "Email",    value: "hello@zaramehndiarts.com", sub: "Usually replies within 2h", href: "mailto:hello@zaramehndiarts.com" },
  { icon: MapPin,  label: "Location", value: "Haus Khas, New Delhi",    sub: "Travel available India-wide", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-6 md:mb-12">
          <span className="text-secondary font-semibold tracking-widest uppercase text-[11px] md:text-sm mb-1.5 block">
            Get in Touch
          </span>
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-foreground leading-tight">
            Let's Create <span className="italic text-primary">Beautiful</span> Memories
          </h2>
        </div>

        {/* Mobile: tap-to-action cards */}
        <div className="md:hidden space-y-3 mb-5">
          {contactCards.map(({ icon: Icon, label, value, sub, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 bg-card border border-border rounded-2xl px-4 py-3.5 active:scale-[0.98] transition-transform"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground font-medium">{label}</div>
                <div className="text-sm font-semibold text-foreground truncate">{value}</div>
                <div className="text-[11px] text-muted-foreground">{sub}</div>
              </div>
              <svg className="w-4 h-4 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          ))}
        </div>

        {/* WhatsApp CTA — full width on mobile */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold rounded-2xl text-sm shadow-md active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp · Quick Reply
        </a>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-7 mb-10">
              {contactCards.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-foreground">{label}</h4>
                    <p className="text-muted-foreground">{value}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold px-8 py-3 shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-[450px] w-full rounded-2xl overflow-hidden glass-card p-2"
          >
            <div className="w-full h-full rounded-xl overflow-hidden bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center animate-bounce">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="mt-2 glass-card px-4 py-2 rounded-full text-sm font-medium">
                    Zara Mehndi Arts
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
