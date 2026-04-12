"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";

const results = [
  {
    beforeImg:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
    name: "Acne & Post-Acne Scarring",
    sub: "6 sessions · Laser + Chemical Peel",
  },
  {
    beforeImg:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
    name: "Facial Pigmentation · Melasma",
    sub: "4 sessions · Q-Switch Laser + Peel",
    delay: "reveal-d1",
  },
  {
    beforeImg: "/hairt.png",
    afterImg:
      "https://images.unsplash.com/photo-1605497787368-8a7e7c80a88d?w=400&q=80",
    name: "Hair Transplant",
    sub: " 12-month result",
    delay: "reveal-d2",
  },
];

export function BeforeAfterSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="ba-sec" id="results">
      <div className="reveal" ref={revealRef}>
        <div className="s-label">Clinical Results</div>
        <h2 className="s-title">
          Before &amp; <em>After</em>
        </h2>
        <p className="s-desc" style={{ marginTop: 10 }}>
          Real patient outcomes. Results may vary based on individual condition
          and treatment plan.
        </p>
      </div>
      <div className="ba-grid">
        {results.map((result, index) => (
          <BeforeAfterCard key={index} {...result} />
        ))}
      </div>
    </section>
  );
}

interface BeforeAfterCardProps {
  beforeImg: string;
  afterImg: string;
  name: string;
  sub: string;
  delay?: string;
}

function BeforeAfterCard({
  beforeImg,
  afterImg,
  name,
  sub,
  delay = "",
}: BeforeAfterCardProps) {
  const revealRef = useScrollReveal();

  return (
    <div className={`ba-card reveal ${delay}`} ref={revealRef}>
      <div className="ba-imgs">
        <img
          className="ba-img"
          src={beforeImg}
          alt="Before"
          width={400}
          height={210}
          style={{ width: "100%", height: 210, objectFit: "cover" }}
        />
        <img
          className="ba-img"
          src={afterImg}
          alt="After"
          width={400}
          height={210}
          style={{ width: "100%", height: 210, objectFit: "cover" }}
        />
        <div className="ba-div"></div>
      </div>
      <div className="ba-labels">
        <div className="ba-lbl">Before</div>
        <div className="ba-lbl after">After</div>
      </div>
      <div className="ba-info">
        <div className="ba-name">{name}</div>
        <div className="ba-sub">{sub}</div>
      </div>
    </div>
  );
}
