"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";
import Link from "next/link";

export function LocationSection() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();
  const revealRef3 = useScrollReveal();

  return (
    <section className="loc-sec" id="location">
      <div className="reveal" ref={revealRef1}>
        <div className="s-label" style={{ color: "var(--sage3)" }}>
          Visit Our Clinic
        </div>
        <h2 className="s-title w">
          Find us in
          <br />
          <em>Gulmohar / Arera Colony</em>
        </h2>
      </div>
      <div className="loc-layout">
        <div className="loc-blocks reveal" ref={revealRef2}>
          <div className="loc-block">
            <h5>Address</h5>
            <p>
              Kalyani Diagnostic Centre & Skin Clinic
              <br />
              Gulmohar / Arera Colony
              <br />
              Bhopal, Madhya Pradesh
            </p>
          </div>
          <div className="loc-block">
            <h5>Our Specialists</h5>
            <p>
              Dr. Ajay Singh Raghuwanshi (Dermatologist)
              <br />
              Dr. Kalyani Raghuwanshi (Radiologist)
            </p>
          </div>
          <div className="loc-block">
            <h5>Consultations</h5>
            <p>
              In-Clinic Consultations Available
              <br />
              Appointments Preferred · Walk-ins Welcome
            </p>
          </div>
          <div className="loc-block">
            <h5>Get Directions</h5>
            <p>
              <Link
                href="https://maps.google.com/?q=Kalyani+Diagnostic+Centre+And+Skin+Clinic+Bhopal"
                target="_blank"
              >
                {"Open in Google Maps →"}
              </Link>
            </p>
          </div>
        </div>
        <div className="loc-img reveal reveal-d2" ref={revealRef3}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.1481050135267!2d77.42905687516992!3d23.19567497905277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43f979292f39%3A0xf4e4855434724560!2sKalyani%20Diagnostic%20Centre%20%7C%20Dr%20Kalyani%20Raghuwanshi%20%7C%20Radiologist%20%7C%20Sonologist%20%7C%20Obstetric%20Scans%7C%20Colour%20Doppler!5e1!3m2!1sen!2sin!4v1776227390924!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "24px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
