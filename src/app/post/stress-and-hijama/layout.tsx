import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stress and Hijama: How Cupping Therapy Relieves Stress and Restores Balance",
  description:
    "Learn how Hijama Cupping Therapy effectively reduces stress and promotes mental clarity. Discover the holistic benefits of cupping for relieving tension and boosting your well-being.",
  keywords: [
  "Stress relief with cupping",
  "Hijama therapy for stress",
  "cupping for relaxation",
  "mental clarity with cupping",
  "stress reduction therapy",
  "Hijama for anxiety",
  "alternative therapy for stress",
  "cupping therapy Hyderabad",
  "holistic stress relief",
  "natural stress management"
],

  openGraph: {
    title: "Stress and Hijama: How Cupping Therapy Relieves Stress and Restores Balance",
    description:
      "Learn how Hijama Cupping Therapy effectively reduces stress and promotes mental clarity. Discover the  holistic benefits of cupping for relieving tension and boosting your well-being.",
    url: "https://www.i-revive.com/contact-us",
    images: [
      {
        url: "https://www.i-revive.com/i-revive-og-img.jpg",
        width: 2500,
        height: 1330,
        alt: "i-Revive Body & Soul",
      },
    ],
    siteName: "i-Revive Body & Soul",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stress and Hijama: How Cupping Therapy Relieves Stress and Restores Balance",
    description:
      "Learn how Hijama Cupping Therapy effectively reduces stress and promotes mental clarity. Discover the  holistic benefits of cupping for relieving tension and boosting your well-being.",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/contact-us",
  },
  other: {
    "google-site-verification": "n9X_WPEBHM7-OhknawUN0VyEknPS3wDy3R9oyYQU1Ek",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            url: "https://www.i-revive.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://www.i-revive.com/search?q={search_term}",
              },
              "query-input": "required name=search_term",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            name: "i-Revive Body & Soul",
            url: "https://www.i-revive.com",
            image: "https://www.i-revive.com/i-revive-og-img.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "6th floor, Mawin Zamzam, opposite Prince Hotel, Mehdipatnam",
              addressLocality: "Hyderabad",
              addressRegion: "TG",
              postalCode: "500028",
              addressCountry: "IN",
            },
            telephone: "+918009944335",
          }),
        }}
      />
    </div>
  );
}
