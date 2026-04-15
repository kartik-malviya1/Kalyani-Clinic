"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";

export function AboutSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="about-sec" id="about">
      <div className="about-intro reveal" ref={revealRef}>
        <div className="s-label">Medical Leadership</div>
        <h2 className="s-title">
          Expertise you can <em>trust.</em>
        </h2>
        <p className="s-desc">
          Kalyani Diagnostic Centre & Skin Clinic is built on a comprehensive
          approach to health — bringing together expert Radiology and
          Dermatology. What you get is a depth of diagnostic and clinical care
          under one roof.
        </p>
      </div>
      <div className="doctors-wrap">
        <DoctorCard
          image="/drajay.png"
          badge="Consultant Dermatologist"
          name="Dr. Ajay Singh Raghuwanshi"
          role="MBBS · MD (Dermatology)"
          description="Dr. Ajay Singh Raghuwanshi brings extensive clinical experience and a patient-centric approach to dermatology. He specializes in treating a wide spectrum of skin, hair, and nail disorders, focusing on both clinical wellness and aesthetic excellence."
          qualifications={[
            "MBBS, MD (Dermatology, Venereology & Leprosy)",
            "Specialised Training in Clinical Dermatology",
            "Expertise in Cosmetology & Laser Treatments",
            "Dedicated Clinical Practice",
          ]}
          pubTitle="Key Focus Areas"
          pubText="Clinical Dermatology · Cosmetology · Acne & Scar Management · Hair Loss Treatments · Laser Therapies · Anti-aging Treatments"
        />
        <DoctorCard
          image="/dr-kalyani1.jpeg"
          badge="Consultant Radiologist"
          name="Dr. Kalyani Raghuwanshi"
          role="MBBS · MD (Radiodiagnosis)"
          description="Dr. Kalyani Raghuwanshi is a highly skilled radiologist dedicated to providing precise and timely diagnostic services. Through advanced imaging techniques, she ensures accurate diagnoses that form the foundation of effective medical treatments."
          qualifications={[
            "MBBS, MD — Radiodiagnosis",
            "Expertise in Advanced Ultrasonography",
            "Specialist in Fetal Imaging & Anomaly Scans",
            "Proficient in Color Doppler Studies",
          ]}
          pubTitle="Diagnostic Expertise"
          pubText="Obstetric & Gynecological Ultrasound · Abdominal Imaging · Small Parts Sonography · Vascular Doppler · Neurosonography"
          delay="reveal-d1"
        />
      </div>
    </section>
  );
}

interface DoctorCardProps {
  image: string;
  badge: string;
  name: string;
  role: string;
  description: string;
  qualifications: string[];
  pubTitle: string;
  pubText: string;
  delay?: string;
}

function DoctorCard({
  image,
  badge,
  name,
  role,
  description,
  qualifications,
  pubTitle,
  pubText,
  delay = "",
}: DoctorCardProps) {
  const revealRef = useScrollReveal();

  return (
    <div className={`doc reveal ${delay}`} ref={revealRef}>
      <div className="doc-img-wrap">
        <Image
          src={image}
          alt={name}
          width={700}
          height={380}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
        <div className="doc-img-badge glass-dark">{badge}</div>
      </div>
      <div className="doc-body">
        <div className="doc-name">{name}</div>
        <div className="doc-role">{role}</div>
        <div className="doc-divider"></div>
        <p className="doc-desc">{description}</p>
        <div className="doc-quals">
          {qualifications.map((qual, index) => (
            <div key={index} className="doc-qual">
              {qual}
            </div>
          ))}
        </div>
        <div className="doc-pub">
          <div className="doc-pub-title">{pubTitle}</div>
          <div className="doc-pub-text">{pubText}</div>
        </div>
      </div>
    </div>
  );
}
