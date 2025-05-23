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
  title: "Spider & Varicose Veins Treatment with Hijama Cupping in Hyderabad",
  description:
    "Learn how Hijama cupping therapy in Hyderabad helps treat spider veins and varicose veins by  improving blood circulation and reducing symptoms like swelling, pain, and discomfort. Understand the stages of varicose veins and how cupping can alleviate these conditions naturally. ",
  keywords: [
  "Treating spider veins Hyderabad",
  "varicose veins treatment Hyderabad",
  "Hijama cupping therapy Hyderabad",
  "cupping for blood circulation",
  "reduce varicose veins symptoms",
  "improve circulation Hyderabad",
  "varicose veins stages",
  "spider veins cupping Hyderabad",
  "cupping for leg pain",
  "natural varicose veins treatment Hyderabad"
],

  openGraph: {
    title: "Spider & Varicose Veins Treatment with Hijama Cupping in Hyderabad",
    description:
      "Learn how Hijama cupping therapy in Hyderabad helps treat spider veins and varicose veins by  improving blood circulation and reducing symptoms like swelling, pain, and discomfort. Understand the stages of varicose veins and how cupping can alleviate these conditions naturally. ",
    url: "https://www.i-revive.com/post/treating-spider-veins-varicose-veins-by-hijama-cupping",
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
    title: "Spider & Varicose Veins Treatment with Hijama Cupping in Hyderabad",
    description:
      "Learn how Hijama cupping therapy in Hyderabad helps treat spider veins and varicose veins by  improving blood circulation and reducing symptoms like swelling, pain, and discomfort. Understand the stages of varicose veins and how cupping can alleviate these conditions naturally. ",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/post/treating-spider-veins-varicose-veins-by-hijama-cupping",
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
