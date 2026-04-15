"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    num: "01",
    title: "Clinical Dermatology",
    image: "/Clinical-Dermatology.png",
    description: "Precision-led treatment for medical skin conditions.",
    chips: ["Acne", "Melasma", "Psoriasis", "Skin Infections"],
  },
  {
    num: "02",
    title: "Hair Restoration & Trichology",
    image: "/hair-treatment.png",
    description:
      "Targeted solutions for hair loss, thinning, and scalp disorders",
    chips: ["PRP Therapy", "Pattern Baldness", "Dandruff", "Hair Fall"],
    delay: "reveal-d1",
  },
  {
    num: "03",
    title: "Laser & Procedural Treatments",
    image:
      "https://images.unsplash.com/flagged/photo-1577081410894-c26514fc2b76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Advanced procedures designed to improve skin quality. Laser hair removal, hydrafacial, chemical peels, acne scar correction, and anti-aging treatments.",
    chips: ["Laser", "Hydrafacial", "Chemical Peels", "Anti-Aging"],
    delay: "reveal-d2",
  },
  {
    num: "04",
    title: "Cosmetic Procedure",
    image:
      "https://images.unsplash.com/photo-1761718210089-ba3bb5ccb54f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Facial Peel.",
    chips: ["Facial Peel", "Natural Radiant", "Glow"],
  },
  {
    num: "05",
    title: "Laser mole removal",
    image:
      "https://images.jdmagicbox.com/v2/comp/service_catalogue/laser-mole-removal-treatment-0755px755.x755.210606143340.d1u4-587upt3.jpg",
    description:
      "Laser mole removal is a dermatological treatment that uses focused laser energy to break down and remove unwanted moles from the skin with precision and minimal damage to surrounding tissue.",

    chips: [
      "Laser Mole Removal",
      "Non-Surgical",
      "Precise Treatment",
      "Minimal Downtime",
    ],
    delay: "reveal-d1",
  },
  {
    num: "06",
    title: "Diagnostic Imaging & Sonography",
    image:
      "https://images.pexels.com/photos/7108421/pexels-photo-7108421.jpeg?_gl=1*1x7k2vh*_ga*MTczNzA5NjcxMC4xNzU3NTM0MDE2*_ga_8JE65Q40S6*czE3NzYyNDE5MDAkbzMzJGcwJHQxNzc2MjQxOTAwJGo2MCRsMCRoMA..",
    description:
      "Accurate and timely imaging services, including Ultrasound / Sonography, Pregnancy & anomaly scans, and Color Doppler studies for precise medical decision-making.",
    chips: [
      "Ultrasound",
      "Pregnancy Scans",
      "Color Doppler",
      "Early Detection",
    ],
    delay: "reveal-d1",
  },
];

export function ServicesSection() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();

  return (
    <section className="services-sec" id="services">
      <div className="services-head">
        <div className="reveal" ref={revealRef1}>
          <div className="s-label">Core Specialities</div>
          <h2 className="s-title">
            Everything your skin
            <br />
            <em>needs, in one place</em>
          </h2>
        </div>
        {/* <p className="s-desc reveal reveal-d1" ref={revealRef2}>
          From everyday dermatology to advanced aesthetic and laser procedures —
          each treatment is personalised, evidence-based, and delivered with
          genuine care.
        </p> */}
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.num} {...service} />
        ))}
      </div>
    </section>
  );
}

interface ServiceCardProps {
  num: string;
  title: string;
  image: string;
  description: string;
  chips: string[];
  delay?: string;
}

function ServiceCard({
  num,
  title,
  image,
  description,
  chips,
  delay = "",
}: ServiceCardProps) {
  const revealRef = useScrollReveal();

  return (
    <div className={`svc reveal ${delay}`} ref={revealRef}>
      <div className="svc-img">
        <img
          src={image}
          alt={title}
          width={600}
          height={190}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="svc-num">{num}</div>
      </div>
      <div className="svc-body">
        <div className="svc-title">{title}</div>
        <div className="svc-desc">{description}</div>
        <div className="svc-chips">
          {chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
