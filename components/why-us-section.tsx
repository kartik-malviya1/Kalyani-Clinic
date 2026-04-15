"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pillars = [
  {
    num: "01",
    title: "Expertise & Excellence",
    description:
      "Advanced clinical and cosmetic dermatology under one roof by a highly qualified MD Dermatologist.",
  },
  {
    num: "02",
    title: "Patient Education First",
    description:
      "We empower patients with knowledge so every decision is informed and confident.",
  },
  {
    num: "03",
    title: "Aesthetic Precision",
    description:
      "Function and appearance treated as inseparable — results that look natural, not overdone.",
  },
  {
    num: "04",
    title: "Evidence-Based Practice",
    description:
      "Drawing from over 12 years of clinical and academic experience to offer scientifically proven treatments.",
  },
  {
    num: "05",
    title: "Advanced Technology",
    description:
      "Modern laser systems, surgical tools, and diagnostic equipment for precise outcomes every time.",
  },
];

const stats = [
  { num: "10+", label: "Years experience" },
  { num: "2", label: "Board-certified MD" },
  { num: "6+", label: "Core aesthetic & clinical specialities" },
  { num: "10k+", label: "Happy Patients" },
];

export function WhyUsSection() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();
  const revealRef3 = useScrollReveal();

  return (
    <section className="why-sec">
      <div className="reveal" ref={revealRef1}>
        <div className="s-label">Why The Derma Clinic</div>
        <h2 className="s-title">
          Built on trust,
          <br />
          <em>driven by results</em>
        </h2>
      </div>
      <div className="why-layout">
        <div className="reveal" ref={revealRef2}>
          <p className="s-desc" style={{ marginBottom: 40 }}>
            We believe every patient deserves more than a prescription — they
            deserve understanding, transparency, and a plan that truly fits
            them.
          </p>
          <div className="pillars">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="pillar">
                <div className="pil-n">{pillar.num}</div>
                <div>
                  <div className="pil-h">{pillar.title}</div>
                  <div className="pil-p">{pillar.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal reveal-d2" ref={revealRef3}>
          <div className="why-card">
            <div className="why-card-glow"></div>
            <div className="why-card-badge">Personalised Care · Bhopal</div>
            <div className="why-card-h">
              Advanced Care —<br />
              <em>For Your Skin & Hair</em>
            </div>
            <div className="why-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="wstat">
                  <div className="wstat-n">{stat.num}</div>
                  <div className="wstat-l">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
