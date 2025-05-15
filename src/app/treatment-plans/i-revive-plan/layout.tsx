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
  title: "i-Revive Plan: Reset Your Body, Heal Chronic Issues & Boost Health",
  description:
    "The i-Revive Plan is a comprehensive body reset therapy that addresses diseases, chronic issues, and  imbalances. With a 21-day diet plan and cupping sessions, it revitalizes the body, boosts healing, and promotes overall wellness.",
  keywords: [
  "i-Revive Plan",
  "full body reset therapy",
  "cupping therapy Hyderabad",
  "chronic health issues treatment",
  "lymphatic drainage therapy",
  "holistic health plan",
  "detox and cleanse",
  "body healing therapy",
  "homeostasis treatment",
  "wellness plan Hyderabad"
],

  openGraph: {
    title: "i-Revive Plan: Reset Your Body, Heal Chronic Issues & Boost Health",
    description:
      "The i-Revive Plan is a comprehensive body reset therapy that addresses diseases, chronic issues, and  imbalances. With a 21-day diet plan and cupping sessions, it revitalizes the body, boosts healing, and promotes overall wellness.",
    url: "https://www.i-revive.com/treatment-plans/i-revive-plan",
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
    title: "i-Revive Plan: Reset Your Body, Heal Chronic Issues & Boost Health",
    description:
      "The i-Revive Plan is a comprehensive body reset therapy that addresses diseases, chronic issues, and  imbalances. With a 21-day diet plan and cupping sessions, it revitalizes the body, boosts healing, and promotes overall wellness.",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/treatment-plans/i-revive-plan",
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
