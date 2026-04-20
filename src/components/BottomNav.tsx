import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Grid3X3, CalendarCheck, MessageCircle, User } from "lucide-react";

const navItems = [
  { id: "home",       label: "Home",      icon: Home,          href: "#" },
  { id: "portfolio",  label: "Gallery",   icon: Grid3X3,       href: "#portfolio" },
  { id: "booking",    label: "Book",      icon: CalendarCheck, href: "#booking" },
  { id: "contact",    label: "Contact",   icon: MessageCircle, href: "#contact" },
  { id: "about",      label: "About",     icon: User,          href: "#about" },
];

export function BottomNav() {
  const [active, setActive] = useState("home");

  const handleClick = (item: typeof navItems[0]) => {
    setActive(item.id);
    if (item.href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-xl border-t border-border shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-stretch h-[60px]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          const isBook = item.id === "booking";
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 relative transition-colors duration-200 ${
                isBook
                  ? "text-primary-foreground"
                  : isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {/* Book button special pill */}
              {isBook && (
                <span className="absolute inset-x-2 inset-y-1.5 bg-primary rounded-xl -z-[1]" />
              )}
              <Icon className={`${isBook ? "w-5 h-5" : "w-[22px] h-[22px]"} transition-transform duration-200 ${isActive && !isBook ? "scale-110" : ""}`} />
              <span className={`text-[10px] font-semibold tracking-wide leading-none ${isBook ? "text-primary-foreground" : ""}`}>
                {item.label}
              </span>
              {isActive && !isBook && (
                <motion.span
                  layoutId="bottomNavDot"
                  className="absolute top-1 w-1 h-1 rounded-full bg-primary"
                />
              )}
            </button>
          );
        })}
      </div>
      {/* safe area spacer for phones with home bar */}
      <div className="h-safe-area-inset-bottom bg-background" style={{ height: "env(safe-area-inset-bottom)" }} />
    </motion.nav>
  );
}
