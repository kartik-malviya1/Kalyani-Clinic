"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "I had a wonderful experience at Kalyani Diagnostic Centre with Dr. Kalyani Raghuwanshi. The clinic is well-maintained, and the staff is very courteous and professional. Dr. Kalyani is highly knowledgeable and takes the time to explain everything in detail, ensuring that patients feel comfortable and well-informed. The diagnostic services are efficient, and the reports are accurate and delivered on time. The overall environment is clean and well-organized, making the entire process smooth and hassle-free. I truly appreciate the excellent care and professionalism displayed by the entire team. Highly recommended for anyone seeking reliable diagnostic services in a patient-friendly atmosphere!",
    initials: "GB",
    name: "Gourav Bhati",
  },
  {
    text: "Dr Kalyani, is a thorough professional, very good approach towards patients. Handles a very good and trained staff, with a state of the art facility enabling a quick scan Very hygienic and clean center which follows all the required corona protocols.My diagnosis was handled very well with utmost care to the questions and doubts I had on the same, which were answered very well. Highly recommended.",
    initials: "AR",
    name: "Aditi Raghuwanshi",
    delay: "reveal-d1",
  },
  {
    text: "Ma'am is so skilled that the findings in my sonography done by kalyani mam, which were missed at other two sonography centers that I visited before, was accurate and lead to early diagnosis of my disease and its treatment. The report was so detailed and even scan was very fast and comfortable with no pain and no hesitation experienced by me. Mam is very polite in nature and takes full history and understands the problem before scanning in detail and with very precision.",
    initials: "GM",
    name: "Garima M",
    delay: "reveal-d2",
  },
  {
    text: "I would like to sincerely thank my doctor for their exceptional care and professionalism. They listened to me attentively, answered all of my questions with patience, and provided a treatment plan that truly helped me for my skin lightening treatment. Their calm and compassionate attitude made me feel comfortable and confident throughout the process. The clinic was also clean and well-organized, which added to the overall positive experience. I’m extremely satisfied with the care I received and would highly recommend this doctor to anyone in need of medical attentive and who needs skin whitening treatment in bhopal",
    initials: "PR",
    name: "Prachi rajput",
    delay: "reveal-d3",
  },
];

export function TestimonialsSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="testi-sec" id="testimonials">
      <div className="reveal" ref={revealRef}>
        <div className="s-label">Patient Stories</div>
        <h2 className="s-title">
          Heard it from
          <br />
          <em>our patients</em>
        </h2>
      </div>
      <div className="testi-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  text: string;
  initials: string;
  name: string;
  delay?: string;
}

function TestimonialCard({
  text,
  initials,
  name,
  delay = "",
}: TestimonialCardProps) {
  const revealRef = useScrollReveal();

  return (
    <div className={`tcard reveal ${delay}`} ref={revealRef}>
      <div className="tcard-q">&quot;</div>
      <p className="tcard-text">{text}</p>
      <div className="tcard-meta">
        <div className="tcard-av">{initials}</div>
        <div>
          <div className="tcard-name">{name}</div>
          <div className="flex">
            <Star size={14} className="fill-gold text-gold" />
            <Star size={14} className="fill-gold text-gold" />
            <Star size={14} className="fill-gold text-gold" />
            <Star size={14} className="fill-gold text-gold" />
            <Star size={14} className="fill-gold text-gold" />
          </div>
        </div>
      </div>
    </div>
  );
}
