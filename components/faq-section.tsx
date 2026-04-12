"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Link from "next/link";

const faqs = [
  {
    question:
      "What are the consultation timings of Dr. Vivek Choudhary for an appointment?",
    answer:
      "The consultation timings for Dr. Vivek Choudhary may vary depending on the location and type of consultation. You can check his availability on his appointment calendar for booking a slot.\n\nHis general consultation hours are:\n\nMon - Sat\n06:00 PM - 09:00 PM",
  },
  {
    question: "How many sessions will I need for my treatment?",
    answer:
      "The number of sessions depends on your specific condition, severity, and the treatment chosen. For example, laser hair removal typically requires 6–8 sessions, while acne treatments may need 4–6. Your doctor will provide a clear roadmap at your first consultation.",
  },
  {
    question: "Are the procedures painful?",
    answer:
      "Most procedures involve minimal discomfort. Topical anaesthetics are used before laser and surgical procedures to ensure you're comfortable. Our team walks you through every step and addresses all concerns before beginning.",
  },
  {
    question: "Do you treat teenage acne?",
    answer:
      "Absolutely. We treat patients of all ages for acne. Our approach for teenagers focuses on gentle, effective treatments and skincare education — avoiding harsh regimens that can worsen skin in the long term.",
  },
  {
    question: "Do you treat vitiligo?",
    answer:
      "Yes. We offer vitiligo surgery and phototherapy as part of our vitiligo management programme. The appropriate treatment depends on extent, location, and stability — all assessed at consultation.",
  },
  {
    question: "How long do Botox and fillers last?",
    answer:
      "Botox results typically last 4–6 months before a top-up session. Fillers can last 6 months to 2 years depending on the type and area. We use only premium-grade, clinically approved products.",
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
