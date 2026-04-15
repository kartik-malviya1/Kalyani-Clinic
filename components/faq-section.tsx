"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Link from "next/link";

const faqs = [
  {
    question: "What is Radiology?",
    answer:
      "Radiology is a branch of medicine that uses medical imaging technology to diagnose and treat diseases. It allows doctors to see inside the human body to identify and understand illnesses or injuries.",
  },
  {
    question: "What is General Dermatology?",
    answer:
      "General dermatology is the branch of medicine concerned with the diagnosis and treatment of diseases of the skin, hair, and nails. A doctor who specializes in this field is called a dermatologist.",
  },
  {
    question: "What are the clinic timings?",
    answer:
      "The timings of Kalyani Diagnostic Centre & Skin Clinic are: Mon - Thu & Sat: 04:00 PM - 09:00 PM and Fri: 07:00 AM - 09:00 PM. We recommend booking an appointment in advance.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We provide a comprehensive range of dermatology and radiology services including Laser Hair Removal, Fungal Infection treatment, Skin Allergy treatments, Acne treatments, Hair Loss treatment, Hair Transplant, Sonography, and Anomaly scans.",
  },
  {
    question: "Who are the consulting doctors?",
    answer:
      "Our clinic is spearheaded by Dr. Ajay Singh Raghuwanshi, an experienced Dermatologist, Pediatric Dermatologist, and Cosmetologist, alongside Dr. Kalyani Chandrakant Raghuwanshi, a highly qualified Radiologist specializing in advanced diagnostic scans.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-sec" id="faq">
      <div className="faq-layout">
        <div className="faq-sticky reveal" ref={revealRef1}>
          <div className="s-label">Common Questions</div>
          <h2 className="s-title">
            Got <em>questions?</em>
          </h2>
          <p className="s-desc">
            We believe in full transparency. Here are the questions our patients
            ask most — answered clearly and honestly.
          </p>
          <br />
          <div className="faq-contact">
            <p>
              {
                "Still have something on your mind? We're happy to talk you through it before your consultation."
              }
            </p>
            <Link href="tel:+91" className="btn-sm">
              Call Us Directly
            </Link>
          </div>
        </div>
        <div className="faq-list reveal reveal-d1" ref={revealRef2}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <div className="faq-q" onClick={() => toggleFaq(index)}>
                <span className="faq-q-text">{faq.question}</span>
                <div className="faq-icon">+</div>
              </div>
              <div className="faq-a">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
