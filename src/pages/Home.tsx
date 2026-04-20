import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Instagram } from "@/components/Instagram";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-[60px] md:pb-0">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Booking />
        <Instagram />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
