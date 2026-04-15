import Link from "next/link";

const specialities = [
  { label: "Skin Treatment", href: "#" },
  { label: "Hair Treatment", href: "#" },
  { label: "Dermatosurgery", href: "#" },
  { label: "Lasers", href: "#" },
  { label: "Anti-Ageing", href: "#" },
  { label: "Aesthetic Surgery", href: "#" },
];

const quickLinks = [
  { label: "Our Doctors", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Find Us", href: "#location" },
];

const contactLinks = [
  { label: "Phone: +91 09297868686", href: "tel:+919297868686" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  {
    label: "Google Maps",
    href: "https://maps.google.com/?q=Kalyani+Diagnostic+Centre+And+Skin+Clinic+Bhopal",
  },
];

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Kalyani Diagnostic Centre</div>
          <div className="footer-sub">& Skin Clinic</div>
          <p className="footer-desc">
            {
              "Bhopal's premier centre integrating clinical dermatology, advanced cosmetology, and precision radiology."
            }
          </p>
          <div className="mt-4 text-sm text-gray-400">
            <p className="font-semibold text-white/80">Timings:</p>
            <p>Mon – Thu, Sat: 4:00 PM – 9:00 PM</p>
            <p>Friday: 7:00 AM – 9:00 PM</p>
          </div>
        </div>
        <div className="fcol">
          <h5>Specialities</h5>
          <ul>
            {specialities.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="fcol">
          <h5>Quick Links</h5>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="fcol">
          <h5>Contact</h5>
          <ul>
            {contactLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 Kalyani Diagnostic Centre & Skin Clinic · Gulmohar / Arera
          Colony, Bhopal · All rights reserved.
        </p>
      </div>
    </footer>
  );
}
