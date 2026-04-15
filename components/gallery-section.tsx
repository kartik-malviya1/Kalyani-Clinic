"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const galleryItems = [
  {
    image:
      "https://images.jdmagicbox.com/comp/bhopal/u4/0755px755.x755.210606143340.d1u4/catalogue/dr-ajay-singh-raghuwanshi-skin-and-you-clinic-arera-colony-bhopal-skin-care-clinics-lsj9duqnr9.jpg",
    label: "Awards",
  },
  {
    image: "/reception.webp",
    label: "Reception",
  },
  {
    image: "/reception1.webp",
    label: "Reception",
  },
  {
    image: "cabin1.webp",
    label: "",
  },
  {
    image: "cabin2.jpg",
    label: "",
  },
  {
    image: "bgkalyani.jpeg",
    label: "",
  },
  {
    image:
      "https://images1-fabric.practo.com/practices/1293130/kalyani-diagnostic-centre-skin-clinic-bhopal-67f79ce5ebad8.jpeg",
    label: "",
  },
  {
    image:
      "https://images.jdmagicbox.com/comp/bhopal/u4/0755px755.x755.210606143340.d1u4/catalogue/-9s3e1586go.jpg",
    label: "",
  },
];

export function GallerySection() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();

  return (
    <section className="gallery-sec">
      <div className="reveal" ref={revealRef1}>
        <div className="s-label">Clinical Gallery</div>
        <h2 className="s-title">
          Outcomes that
          <br />
          <em>speak for themselves</em>
        </h2>
      </div>
      <div className="gal-grid reveal" ref={revealRef2}>
        {galleryItems.map((item, index) => (
          <div key={index} className="gi">
            <img
              src={item.image}
              alt={item.label}
              width={index === 0 ? 800 : 500}
              height={index === 0 ? 454 : 220}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="gi-ov">
              <span className="gi-lbl">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
