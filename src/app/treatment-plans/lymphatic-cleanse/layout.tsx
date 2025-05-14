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
  title: "Lymphatic Cleanse Therapy in Hyderabad | Detox & Boost Immunity | i-Revive",
  description:
    "Experience the benefits of Lymphatic Cleanse Therapy at i-Revive. Clear blockages, stimulate lymphatic  circulation, and detoxify your body, while enhancing metabolism, boosting immunity, and relieving anxiety and depression",
  keywords: [
  "lymphatic cleanse therapy",
  "i-Revive detox treatment",
  "cupping therapy for lymphatic system",
  "boost immune system",
  "lymphatic drainage therapy",
  "detoxify body Hyderabad",
  "stimulate lymphatic circulation",
  "weight loss cupping therapy",
  "reduce anxiety and depression",
  "blood and neurological disorders treatment"
],

  openGraph: {
    title: "Lymphatic Cleanse Therapy in Hyderabad | Detox & Boost Immunity | i-Revive",
    description:
      "Experience the benefits of Lymphatic Cleanse Therapy at i-Revive. Clear blockages, stimulate lymphatic  circulation, and detoxify your body, while enhancing metabolism, boosting immunity, and relieving anxiety and depression",
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
    title: "Lymphatic Cleanse Therapy in Hyderabad | Detox & Boost Immunity | i-Revive",
    description:
      "Experience the benefits of Lymphatic Cleanse Therapy at i-Revive. Clear blockages, stimulate lymphatic  circulation, and detoxify your body, while enhancing metabolism, boosting immunity, and relieving anxiety and depression",
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
