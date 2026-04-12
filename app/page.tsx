"use client";

import { Navigation } from "@/components/navigation";
import { MobileMenu } from "@/components/mobile-menu";
import { Hero } from "@/components/hero";
import { Ribbon } from "@/components/ribbon";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { TreatmentStrip } from "@/components/treatment-strip";
import { BeforeAfterSection } from "@/components/before-after-section";
import { WhyUsSection } from "@/components/why-us-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { GallerySection } from "@/components/gallery-section";
import { BlogSection } from "@/components/blog-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { LocationSection } from "@/components/location-section";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? "hidden" : "";
  };

  const closeMobile = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <MobileMenu isOpen={menuOpen} onClose={closeMobile} />
      <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <Ribbon />
      <AboutSection />
      <ServicesSection />
      {/* <TreatmentStrip /> */}
      {/* <BeforeAfterSection /> */}
      <WhyUsSection />
      <TestimonialsSection />
      <GallerySection />
      {/* <BlogSection /> */}
      <FaqSection />
      <CtaSection />
      <LocationSection />
      <Footer />
    </>
  );
}
