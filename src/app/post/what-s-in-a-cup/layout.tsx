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
  title: "What's in a Cup? Understanding Hijama Cupping Therapy Benefits",
  description:
    "Discover the powerful effects of Hijama Cupping Therapy. Learn how this ancient technique detoxifies  the body, improves circulation, and promotes healing. Explore the benefits today!",
  keywords: [
  "Hijama cupping therapy",
  "cupping therapy benefits",
  "detoxification with cupping",
  "cupping for healing",
  "cupping therapy in Hyderabad",
  "improve circulation",
  "natural healing",
  "ancient therapy",
  "alternative medicine",
  "body detox with cupping"
],

  openGraph: {
    title: "What's in a Cup? Understanding Hijama Cupping Therapy Benefits",
    description:
      "Discover the powerful effects of Hijama Cupping Therapy. Learn how this ancient technique detoxifies  the body, improves circulation, and promotes healing. Explore the benefits today!",
    url: "https://www.i-revive.com/post/what-s-in-a-cup",
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
    title: "What's in a Cup? Understanding Hijama Cupping Therapy Benefits",
    description:
      "Discover the powerful effects of Hijama Cupping Therapy. Learn how this ancient technique detoxifies  the body, improves circulation, and promotes healing. Explore the benefits today!",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/post/what-s-in-a-cup",
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
