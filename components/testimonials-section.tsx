"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "I had a wonderful experience at the derma clinic from Dr. Vivek Choudhary. He is extremely careful and patient, taking time to understand your skin concerns and explaining every step of the treatment in detail. I never felt rushed and felt completely comfortable throughout the process. I underwent the yellow chemical peel, and the results were amazing my skin looks brighter, clearer, and more even-toned. The improvement was visible within a short time, and the healing was smooth under his guidance. Truly grateful for his expertise and genuine care. Highly recommended!",
    initials: "AV",
    name: "Abhishek Verma",
  },
  {
    text: 'I was struggled with severe acne for over 6 month and it was taking a serous toll on my confidence and skin health. I was referred to Dr. Vivek Chaudhary and he greeted me with a warm smile, and said "well fix this together". That meant the world.The staff amazing.... Receptionist remembered my name every visit. Nurse explained every step before applying treatment.Thank you so much Sir and staff, finally we fixed this together 😊 .Now 90% of my acne has been treated, and the remaining is under treatment. I\'m confident it will clear up soon too!',
    initials: "NY",
    name: "Nishu Yadav",
    delay: "reveal-d1",
  },
  {
    text: "I cannot express enough how thrilled I am with the results of my laser hair reduction! Honestly, it feels like a life-changing experience. From the very first session, I could see a dramatic difference – the stubborn hair that I struggled with for years started disappearing, and now my skin feels silky-smooth, flawless, and absolutely radiant.I would highly, highly recommend him to anyone who has ever felt insecure or frustrated because of unwanted hair. Don’t wait – this is hands down the best decision you can make for yourself.",
    initials: "KS",
    name: "Kratika Singh",
    delay: "reveal-d2",
  },
  {
    text: "Hey everyone,I am Tejeswarao and iam from Andhrapradesh,I have a complete baldness before consulting this hospital,I did my hair transplant in this hospital,I got a very very best results in decent time,I love the hospitality of the complete staff,I want to thankful to the great surgeon Vivek Choudhary sir,he is very polite,so many of friends suggested this hospital and finally I also experienced what my friends told.Dr.vivek Choudary sir is very friendly,I completely love his work,He loves his profession.Dr.vivek choudhary sir responds to my every calls and messages to my every single problem after and before my hair transplant surgery and He asks me to know how my hair growth is.Finally I experienced very very best memories in this year with this hospital because Dr choudhary sir completely changes my look.I surely suggest this hospital for every problem to your skin and hair.THANK YOU DR.VIVEK CHOUDHARY SIR 🙏🙏🙏",
    initials: "TT",
    name: "Tejeswarao Thandra",
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
