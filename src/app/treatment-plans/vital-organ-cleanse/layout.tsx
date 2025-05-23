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
  title: "Vital Organ Cleanse with Hijama Therapy in Hyderabad | i-Revive",
  description:
    "Cleanse and detox your vital organs with professional Hijama (cupping therapy) at i-Revive, Hyderabad. Safe and natural treatment for both women and men to support internal wellness and  vitality",
  keywords: [
  "vital organ detox Hyderabad",
  "Hijama organ cleanse therapy",
  "cupping therapy for detox",
  "i-Revive Hyderabad treatment",
  "Hijama for women and men",
  "liver and kidney cleanse therapy",
  "natural organ detoxification",
  "wet cupping for internal health",
  "alternative healing Hyderabad",
  "full body detox therapy"
],

  openGraph: {
    title: "Vital Organ Cleanse with Hijama Therapy in Hyderabad | i-Revive",
    description:
      "Cleanse and detox your vital organs with professional Hijama (cupping therapy) at i-Revive, Hyderabad. Safe and natural treatment for both women and men to support internal wellness and  vitality",
    url: "https://www.i-revive.com/treatment-plans/vital-organ-cleanse",
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
    title: "Vital Organ Cleanse with Hijama Therapy in Hyderabad | i-Revive",
    description:
      "Cleanse and detox your vital organs with professional Hijama (cupping therapy) at i-Revive, Hyderabad. Safe and natural treatment for both women and men to support internal wellness and  vitality",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/treatment-plans/vital-organ-cleanse",
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
