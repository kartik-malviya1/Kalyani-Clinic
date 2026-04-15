import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Kalyani Diagnostic Centre & Skin Clinic | Dr. Ajay & Dr. Kalyani Raghuwanshi",
  description:
    "Located in the heart of Gulmohar / Arera Colony, Bhopal, Kalyani Diagnostic Centre & Skin Clinic is a specialized centre for dermatology, aesthetic medicine, and diagnostic imaging.",
  keywords: [
    "Dermatologist in Bhopal",
    "Best Dermatologist in Bhopal",
    "Skin Specialist in Bhopal",
    "Radiologist in Bhopal",
    "Kalyani Diagnostic Centre",
    "Dr. Ajay Singh Raghuwanshi",
    "Dr. Kalyani Chandrakant Raghuwanshi",
    "Diagnostic Imaging",
    "Hair Transplant Surgeon",
    "FUT Hair Transplant Bhopal",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Kalyani Diagnostic Centre & Skin Clinic | Bhopal",
    description:
      "Expert skin, hair, laser treatments and high-accuracy diagnostic imaging.",
    url: "https://kalyaniclinic.com", // Fallback URL
    siteName: "Kalyani Diagnostic Centre & Skin Clinic",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
