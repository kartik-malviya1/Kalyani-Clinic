"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NavigationProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

export function Navigation({ menuOpen, toggleMenu }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <Link href="#" className="nav-logo">
        <span className="nav-logo-name">Kalyani Diagnostic Centre</span>
        <span className="nav-logo-sub">& Skin Clinic</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#results">Results</Link>
        </li>
        <li>
          <Link href="#testimonials">Reviews</Link>
        </li>
        <li>
          <Link href="#faq">FAQ</Link>
        </li>
        <li>
          <Link href="#location">Find Us</Link>
        </li>
        <li>
          <Link href="tel:+91" className="nav-cta">
            Book Consultation
          </Link>
        </li>
      </ul>
      <div className={`ham ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
