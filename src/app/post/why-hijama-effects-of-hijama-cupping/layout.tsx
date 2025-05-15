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
  title: "Why Hijama? Effects of Hijama Cupping Therapy for Pain Relief, Detox, and Healing",
  description:
    "Discover the benefits of Hijama cupping therapy. Learn how this ancient technique helps with pain  relief, improves circulation, detoxifies the body, and boosts the immune system. Find out why Hijama is effective for holistic healing.",
  keywords: [
  "Hijama cupping therapy",
  "Hijama benefits",
  "pain relief cupping",
  "detox cupping",
  "blood circulation",
  "cupping therapy",
  "stress relief cupping",
  "detoxification",
  "improve immunity",
  "holistic healing"
],

  openGraph: {
    title: "Why Hijama? Effects of Hijama Cupping Therapy for Pain Relief, Detox, and Healing",
    description:
      "Discover the benefits of Hijama cupping therapy. Learn how this ancient technique helps with pain  relief, improves circulation, detoxifies the body, and boosts the immune system. Find out why Hijama is effective for holistic healing.",
    url: "https://www.i-revive.com/post/why-hijama-effects-of-hijama-cupping",
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
    title: "Why Hijama? Effects of Hijama Cupping Therapy for Pain Relief, Detox, and Healing",
    description:
      "Discover the benefits of Hijama cupping therapy. Learn how this ancient technique helps with pain  relief, improves circulation, detoxifies the body, and boosts the immune system. Find out why Hijama is effective for holistic healing.",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/post/why-hijama-effects-of-hijama-cupping",
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
