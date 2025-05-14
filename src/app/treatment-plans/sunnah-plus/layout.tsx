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
  title: "Sunnah Plus Therapy – Full-Body Cupping for Pain, PMS, Skin Issues & Stress Relief",
  description:
    "Discover the Sunnah Plus plan at i-Revive – a powerful Hijama therapy covering 9 key points with deep tissue stroke and gliding cupping. Ideal for back pain, migraines, arthritis, skin issues, PMS, and more in Hyderabad.",
  keywords: [
  "Sunnah Plus Hijama",
  "deep tissue cupping Hyderabad",
  "cupping for migraines",
  "Hijama for arthritis",
  "therapeutic cupping Hyderabad",
  "back pain Hijama treatment",
  "PMS cupping therapy",
  "cupping for skin problems",
  "Hijama for gynecological issues",
  "i-Revive Hijama Hyderabad"
],

  openGraph: {
    title: "Sunnah Plus Therapy – Full-Body Cupping for Pain, PMS, Skin Issues & Stress Relief",
    description:
      "Discover the Sunnah Plus plan at i-Revive – a powerful Hijama therapy covering 9 key points with deep tissue stroke and gliding cupping. Ideal for back pain, migraines, arthritis, skin issues, PMS, and more in Hyderabad.",
    url: "https://www.i-revive.com/sunnah-basic",
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
    title: "Sunnah Plus Therapy – Full-Body Cupping for Pain, PMS, Skin Issues & Stress Relief",
    description:
      "Discover the Sunnah Plus plan at i-Revive – a powerful Hijama therapy covering 9 key points with deep tissue stroke and gliding cupping. Ideal for back pain, migraines, arthritis, skin issues, PMS, and more in Hyderabad.",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/sunnah-basic",
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
