"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function AboutSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="about-sec" id="about">
      <div className="lg:about-intro  reveal hidden">
        <div className="s-label">Our Specialist</div>
        <h2 className="s-title">
          Expert care. <em>Lasting results.</em>
        </h2>
        <p className="s-desc">
          The Derma Clinic is led by Dr. Vivek Choudhary, a highly experienced
          and dedicated dermatologist combining clinical excellence with
          advanced aesthetic treatments to help you look and feel your absolute
          best.
        </p>
      </div>

      {/* Desktop Integrated Layout (Reference Style) */}
      <div className="about-grid reveal" ref={revealRef}>
        <div className="about-portrait-side">
          <div className="badge-rating">
            <div className="stars">★★★★★</div>
            <div className="count">940+ REVIEWS</div>
          </div>
          <img
            src="/drvivek.png"
            alt="Dr. Vivek Choudhary"
            className="about-img-main"
          />
          <div className="badge-exp">
            <h4>12+</h4>
            <p>Years of Clinical</p>
          </div>
        </div>

        <div className="about-content-side">
          <div className="s-label">Meet the Doctor</div>
          <h2 className="s-title">
            Expertise You
            <br />
            <em>Can Trust</em>
          </h2>
          <p className="s-desc" style={{ maxWidth: "100%" }}>
            With over 12 years of clinical experience, Dr. Vivek Choudhary
            founded The Derma Clinic to redefine skin treatment in Bhopal. As an
            ex-Assistant Professor, his academic background ensures the highest
            standard of care in medical, aesthetic, and laser dermatology.
          </p>

          <div className="quals-v2">
            <div className="qual-v2-item">
              <div className="qual-bullet"></div>
              <div className="qual-info">
                <h5>MBBS & MD — Dermatology, Venereology & Leprosy</h5>
                <p>Expert medical evaluation and specialized care</p>
              </div>
            </div>
            <div className="qual-v2-item">
              <div className="qual-bullet"></div>
              <div className="qual-info">
                <h5>Ex-Assistant Professor — Chirayu Medical College</h5>
                <p>Academic excellence & over a decade of clinical practice</p>
              </div>
            </div>
            <div className="qual-v2-item">
              <div className="qual-bullet"></div>
              <div className="qual-info">
                <h5>Consultant Dermatologist & Laser Surgeon</h5>
                <p>Specialized in advanced aesthetic and laser procedures</p>
              </div>
            </div>
          </div>

          <div className="about-actions">
            <a
              href="tel:+91"
              className="nav-cta"
              style={{ position: "static", padding: "14px 32px" }}
            >
              Book a Consultation
            </a>
            <a href="#services" className="btn-about-secondary">
              View Treatments
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div
        className="doctors-wrap desktop-hidden"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <DoctorCard
          image="/drvivek.png"
          badge="Consultant Dermatologist & Laser Surgeon"
          name="Dr. Vivek Choudhary"
          role="MBBS · MD (Dermatology)"
          description="With over 12 years of clinical experience, Dr. Vivek Choudhary offers a deeply empathetic and evidence-first approach to dermatology. As an ex-Assistant Professor, his academic background ensures the highest standard of care in medical and aesthetic dermatology."
          qualifications={[
            "MBBS (2013), MD in Dermatology, Venereology & Leprosy (2019)",
            "Ex-Assistant Professor, Chirayu Medical College & Hospital",
            "Expertise in Clinical, Aesthetic & Laser Dermatology",
            "12+ Years of Clinical Practice",
          ]}
          pubTitle="Specialisations"
          pubText="Acne Management · Laser Hair Removal · Anti-Aging Treatments · Pigmentation · Scalp and Hair Restoration · Clinical Dermatology"
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
        <img src={image} alt={name} width={700} height={380} />
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
