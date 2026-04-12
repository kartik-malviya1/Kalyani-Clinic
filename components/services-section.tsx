"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    num: "01",
    title: "Skin Treatment",
    image:
      "https://images.jdmagicbox.com/comp/bhopal/l3/0755px755.x755.210721101032.i3l3/catalogue/the-derma-clinic-skin-hair-cosmetic-laser-centre-dr-vivek-choudhary-md-hoshangabad-road-bhopal-cosmetic-dealers-2szhk3reij.jpg",
    description:
      "Medical-grade care for acne, pigmentation, melasma, psoriasis, eczema, and complex dermatological conditions.",
    chips: ["Acne", "Melasma", "Pigmentation", "Scars"],
  },
  {
    num: "02",
    title: "Hair Treatment",
    image: "/hairt.png",
    description:
      "Hair fall management, alopecia, PRP therapy, and surgical hair transplant using both FUE and FUT techniques.",
    chips: ["PRP Therapy", "FUE", "FUT", "Alopecia"],
    delay: "reveal-d1",
  },
  {
    num: "03",
    title: "Dermatosurgery",
    image:
      "https://images.jdmagicbox.com/comp/bhopal/l3/0755px755.x755.210721101032.i3l3/catalogue/the-derma-clinic-skin-hair-cosmetic-laser-centre-dr-vivek-choudhary-md-hoshangabad-road-bhopal-cosmetic-dealers-cp5b4t8zz1.jpg",
    description:
      "Precision surgical procedures — acne scar reduction, laser hair removal, wart & mole removal, keloid surgery.",
    chips: ["Laser", "Wart Removal", "Keloid", "DPN"],
    delay: "reveal-d2",
  },
  {
    num: "04",
    title: "Anti-Ageing & Aesthetics",
    image:
      "https://images.jdmagicbox.com/comp/bhopal/l3/0755px755.x755.210721101032.i3l3/catalogue/the-derma-clinic-skin-hair-cosmetic-laser-centre-dr-vivek-choudhary-md-hoshangabad-road-bhopal-cosmetic-dealers-vxn01w97ya.jpg",
    description:
      "Medical aesthetics including Botox, dermal fillers, and laser skin rejuvenation for natural, refreshed results.",
    chips: ["Botox", "Fillers", "Laser Toning", "Rejuvenation"],
  },
  {
    num: "05",
    title: "Clinical Dermatology",
    image:
      "https://images.jdmagicbox.com/v2/comp/bhopal/l3/0755px755.x755.210721101032.i3l3/catalogue/the-derma-clinic-skin-hair-cosmetic-laser-centre-dr-vivek-choudhary-md-hoshangabad-road-bhopal-cosmetic-dealers-ro1fvku8tb.jpg",
    description:
      "Comprehensive diagnosis and management of chronic skin conditions with an evidence-based medical approach.",
    chips: ["Eczema", "Psoriasis", "Vitiligo", "Allergies"],
    delay: "reveal-d1",
  },
  {
    num: "06",
    title: "Lasers & Nail Treatment",
    image:
      "https://images.jdmagicbox.com/comp/bhopal/l3/0755px755.x755.210721101032.i3l3/catalogue/the-derma-clinic-skin-hair-cosmetic-laser-centre-dr-vivek-choudhary-md-hoshangabad-road-bhopal-cosmetic-dealers-s1unf08slh.jpg",
    description:
      "Advanced laser platforms for resurfacing, pigmentation, skin tightening, and comprehensive nail disorder treatment.",
    chips: ["CO₂ Laser", "Q-Switch", "Nail Disorders", "Vitiligo"],
    delay: "reveal-d2",
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
