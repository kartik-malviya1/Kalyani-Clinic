"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";

const galleryItems = [
  {
    image:
      "https://lh3.googleusercontent.com/geougc-cs/AMG9lESCKOTg4c0d4PBq9mrEAvP1k_CaOLpEQK7YS4L6-07TBl2JBwYXTeGgppQlDFQMFLB3pxN0iVpuigR8Y5tdIqyNQMYiQxfmr35c5Iy3NYqbyz2fcZ_MNS5BzchrYQn86qIQiAY=s3072-w3072-h1484-rw",
    label: "Hair Transplant",
  },
  {
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMQKYWPp4emRH-6nJlcfgKTwKH0Zpe6OjpUWbxi=s1360-w1360-h1020-rw",
    label: "Reception",
  },
  {
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNuzceH5HRPWBdVyXoZ8cGrN8X5yHF7ha813DzQ=s1360-w1360-h1020-rw",
    label: "Reception",
  },
  {
    image:
      "https://lh3.googleusercontent.com/geougc-cs/AMG9lER6WNUHKEGzhwzSBtPT2agcK6M5vb_JCK07D4wTbAQ8fvKyXDKK6F_CDs127Mu8eqH5zbBg1el_EUOVfqLERmavhRlUsVSsLvveSMPSf8lG9fWbIQ18TBUn3zT-EmF8ADLT8BQMHg=s3072-w3072-h1484-rw",
    label: "Hair Transplant",
  },
  {
    image:
      "https://lh3.googleusercontent.com/p/AF1QipM-Wbmir2UtWIAqIPMleMJG7612YSM2YqEg1ZmJ=s1360-w1360-h1020-rw",
    label: "Laser Treatment",
  },
  {
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMPD2rTo4fBpQYeIfpLAg10Zinn5JLIQkKXkg5P=s1360-w1360-h1020-rw",
    label: "Hair Treatment",
  },
  {
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPWwXPLPAgxNMsv1qdnC2qKt8pHZ6NF2erQqn31=s1360-w1360-h1020-rw",
    label: "",
  },
  {
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMA35hYSHSSDW-RB4HIjtlrEiywLX2Haac0HAwz=s1360-w1360-h1020-rw",
    label: "",
  },
];

export function GallerySection() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();

  return (
    <section className="gallery-sec">
      <div className="reveal" ref={revealRef1}>
        <div className="s-label">Clinical Gallery</div>
        <h2 className="s-title">
          Outcomes that
          <br />
          <em>speak for themselves</em>
        </h2>
      </div>
      <div className="gal-grid reveal" ref={revealRef2}>
        {galleryItems.map((item, index) => (
          <div key={index} className="gi">
            <img
              src={item.image}
              alt={item.label}
              width={index === 0 ? 800 : 500}
              height={index === 0 ? 454 : 220}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="gi-ov">
              <span className="gi-lbl">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
