"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    num: "01",
    title: "Dermatology (Medical Skin Care)",
    image:
      "https://images.jdmagicbox.com/comp/bhopal/l3/0755px755.x755.210721101032.i3l3/catalogue/the-derma-clinic-skin-hair-cosmetic-laser-centre-dr-vivek-choudhary-md-hoshangabad-road-bhopal-cosmetic-dealers-ro1fvku8tb.jpg",
    description:
      "Comprehensive diagnosis and treatment of acute and chronic skin conditions, including acne, pigmentation, fungal infections, psoriasis, and eczema.",
    chips: ["Acne", "Melasma", "Psoriasis", "Skin Infections"],
  },
  {
    num: "02",
    title: "Hair & Scalp Treatments",
    image: "/hairt.png",
    description:
      "Targeted solutions for hair fall, thinning, male & female pattern baldness, PRP therapy, dandruff, and scalp disorders. Root-cause treatment, not temporary solutions.",
    chips: ["PRP Therapy", "Pattern Baldness", "Dandruff", "Hair Fall"],
    delay: "reveal-d1",
  },
  {
    num: "03",
    title: "Aesthetic & Cosmetic Dermatology",
    image:
      "https://images.jdmagicbox.com/comp/bhopal/l3/0755px755.x755.210721101032.i3l3/catalogue/the-derma-clinic-skin-hair-cosmetic-laser-centre-dr-vivek-choudhary-md-hoshangabad-road-bhopal-cosmetic-dealers-vxn01w97ya.jpg",
    description:
      "Advanced procedures designed to improve skin quality. Laser hair removal, hydrafacial, chemical peels, acne scar correction, and anti-aging treatments.",
    chips: ["Laser", "Hydrafacial", "Chemical Peels", "Anti-Aging"],
    delay: "reveal-d2",
  },
  {
    num: "04",
    title: "Hair Transplant Centre",
    image:
      "https://images.jdmagicbox.com/comp/bhopal/l3/0755px755.x755.210721101032.i3l3/catalogue/the-derma-clinic-skin-hair-cosmetic-laser-centre-dr-vivek-choudhary-md-hoshangabad-road-bhopal-cosmetic-dealers-2szhk3reij.jpg",
    description:
      "Offering FUT (Follicular Unit Transplantation) — a proven surgical method for permanent hair restoration with natural hairline design and high graft survival rate.",
    chips: ["FUT Transplant", "Hair Restoration", "Surgical", "Permanent"],
  },
  {
    num: "05",
    title: "Diagnostic & Radiology Services",
    image:
      "https://images.jdmagicbox.com/comp/bhopal/l3/0755px755.x755.210721101032.i3l3/catalogue/the-derma-clinic-skin-hair-cosmetic-laser-centre-dr-vivek-choudhary-md-hoshangabad-road-bhopal-cosmetic-dealers-s1unf08slh.jpg",
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
        <p className="s-desc reveal reveal-d1" ref={revealRef2}>
          From everyday dermatology to advanced aesthetic and laser procedures —
          each treatment is personalised, evidence-based, and delivered with
          genuine care.
        </p>
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
