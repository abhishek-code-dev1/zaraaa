import React from "react";
import { Link } from "wouter";
import { Instagram as InstaIcon, Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">

      {/* Mobile: compact stacked footer */}
      <div className="md:hidden px-4 py-8">
        <Link href="/">
          <div className="font-serif text-2xl font-bold tracking-tighter text-primary-foreground mb-1 cursor-pointer">
            <span className="text-secondary">Z</span>ara
          </div>
        </Link>
        <p className="text-primary-foreground/70 text-xs font-light mb-4 max-w-xs">
          Luxury bridal mehndi elevating the ancient tradition of henna for the modern Indian bride.
        </p>

        {/* Quick contact pills */}
        <div className="flex flex-col gap-2 mb-5">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-xs text-primary-foreground/80">
            <Phone className="w-3.5 h-3.5 text-secondary shrink-0" /> +91 98765 43210
          </a>
          <a href="mailto:hello@zaramehndi.com" className="flex items-center gap-2 text-xs text-primary-foreground/80">
            <Mail className="w-3.5 h-3.5 text-secondary shrink-0" /> hello@zaramehndi.com
          </a>
          <div className="flex items-center gap-2 text-xs text-primary-foreground/80">
            <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" /> Delhi, NCR · Travel Available
          </div>
        </div>

        {/* Social icons */}
        <div className="flex gap-3 mb-6">
          {[InstaIcon, Facebook].map((Icon, i) => (
            <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Quick links — horizontal */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-primary-foreground/60 mb-5">
          {["#about", "#services", "#portfolio", "#testimonials", "#booking"].map((href, i) => (
            <a key={href} href={href} className="hover:text-secondary transition-colors capitalize">
              {["About", "Services", "Portfolio", "Reviews", "Book"][i]}
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-4 text-[11px] text-primary-foreground/40">
          © {year} Zara Mehndi Arts. All rights reserved.
        </div>
      </div>

      {/* Desktop: full footer */}
      <div className="hidden md:block py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            <div className="lg:col-span-1">
              <Link href="/">
                <div className="font-serif text-3xl font-bold tracking-tighter text-primary-foreground mb-5 cursor-pointer">
                  <span className="text-secondary">Z</span>ara
                </div>
              </Link>
              <p className="text-primary-foreground/75 font-light mb-6 text-sm leading-relaxed">
                Elevating the ancient tradition of henna into a breathtaking modern art form for the contemporary bride.
              </p>
              <div className="flex gap-3">
                {[InstaIcon, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xl font-bold mb-5 text-secondary">Quick Links</h4>
              <ul className="space-y-3">
                {["About Zara", "Services & Pricing", "Portfolio", "Testimonials", "Book an Appointment"].map((label, i) => (
                  <li key={label}>
                    <a href={["#about","#services","#portfolio","#testimonials","#booking"][i]} className="text-primary-foreground/75 hover:text-secondary transition-colors font-light text-sm">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl font-bold mb-5 text-secondary">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-primary-foreground/75">
                  <Phone className="w-4 h-4 text-secondary shrink-0" /> +91 98765 43210
                </li>
                <li className="flex items-center gap-2 text-sm text-primary-foreground/75">
                  <Mail className="w-4 h-4 text-secondary shrink-0" /> hello@zaramehndi.com
                </li>
                <li className="flex items-start gap-2 text-sm text-primary-foreground/75">
                  <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> Delhi NCR · Travel Available Across India
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl font-bold mb-5 text-secondary">Newsletter</h4>
              <p className="text-primary-foreground/75 font-light mb-4 text-sm">
                Subscribe for bridal inspiration, henna tips, and exclusive offers.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border border-white/20 text-white rounded-full px-4 py-2 w-full focus:outline-none focus:border-secondary transition-colors placeholder:text-white/50 text-sm"
                />
                <button type="submit" className="bg-secondary text-primary font-semibold px-4 py-2 rounded-full hover:bg-white transition-colors text-sm whitespace-nowrap">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50 font-light">
            <p>© {year} Zara Mehndi Arts. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
