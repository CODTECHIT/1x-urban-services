// Last updated: 2026-02-17 18:49 - Public Repo Deployment Trigger
import React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { FloatingContact } from "@/components/FloatingContact";
import { SmoothScroll } from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Best Home Cleaning Services Hyderabad | NO 1 Professionals | 1x Urban Services",
  description: "Looking for the best home cleaning services in Hyderabad? 1x Urban Services offers 5-star rated deep cleaning, pest control, and home maintenance. Over 5000+ happy homes served. More affordable & reliable than standard urban apps. Book today!",
  keywords: [
    "best home cleaning services hyderabad",
    "top rated cleaning services hyderabad",
    "professional deep cleaning hyderabad",
    "home cleaning services hyderabad",
    "house cleaning services hyderabad near me",
    "affordable cleaning services hyderabad",
    "bathroom cleaning services hyderabad",
    "kitchen deep cleaning hyderabad",
    "sofa cleaning services hyderabad",
    "water tank cleaning hyderabad",
    "full house deep cleaning packages hyderabad",
    "pest control services hyderabad",
    "sanitization services hyderabad",
    // Location-based 'Near Me' Keywords
    "home cleaning services near me",
    "bathroom cleaning services near me",
    "pest control near me",
    "deep cleaning services near me",
    "sofa cleaning services near me",
    "professional house cleaners near me",
    // Secondary Keywords - Specific Services
    "deep cleaning services hyderabad",
    "house cleaning services hyderabad",
    "termite control hyderabad",
    "cockroach pest control hyderabad",
    "painting services hyderabad",
    "electrical plumbing services hyderabad",
    "packers movers hyderabad",
    // Brand Intent Keywords
    "1x urban services",
    "1xurbanservices",
    "1x urban services hyderabad",
    "premium home services hyderabad",
    "best home services in hyderabad",
    // Entity & Category Keywords
    "home care services",
    "residential pest control",
    "professional home cleaning",
    "verified home service experts"
  ],
  authors: [{ name: "1x Urban Services" }],
  creator: "1x Urban Services",
  publisher: "1x Urban Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Home Services & Pest Control in Hyderabad | 1x Urban Services",
    description: "Premium home services & pest control in Hyderabad by verified professionals. Cleaning, pest control, painting & repairs. Trusted by 5000+ customers.",
    url: "https://1xurbanservices.com",
    siteName: "1x Urban Services",
    images: [
      {
        url: "https://1xurbanservices.com/logo-circular.png",
        width: 800,
        height: 600,
        alt: "1x Urban Services - Home Services & Pest Control in Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Services & Pest Control in Hyderabad | 1x Urban Services",
    description: "Premium home services & pest control by verified professionals. Deep cleaning, painting, repairs & maintenance in Hyderabad.",
    images: ["https://1xurbanservices.com/logo-circular.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "_Kt04O5F5VNlQ8B8SCIL5TpIFmpHOHQUxwYc8sOrytc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <meta name="google-site-verification" content="_Kt04O5F5VNlQ8B8SCIL5TpIFmpHOHQUxwYc8sOrytc" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PF6VJDRG0G"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PF6VJDRG0G');
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "1x Urban Services",
              "alternateName": "Best Home Cleaning Hyderabad",
              "description": "Premium home cleaning, deep cleaning, and pest control services in Hyderabad. Verified professionals, affordable rates, and 5-star service.",
              "url": "https://1xurbanservices.com",
              "logo": "https://1xurbanservices.com/logo-circular.png",
              "image": "https://1xurbanservices.com/hero-image.jpg",
              "telephone": "+91 73538 76156",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No 36/3, Chintal, Qutubullapur, Flat no 105",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500054",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.5028,
                "longitude": 78.4419
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "5240"
              },
              "areaServed": [
                { "@type": "City", "name": "Hyderabad" },
                { "@type": "City", "name": "Secunderabad" },
                { "@type": "City", "name": "Gachibowli" },
                { "@type": "City", "name": "Madhapur" },
                { "@type": "City", "name": "Banjara Hills" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Home Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Full House Deep Cleaning Services Hyderabad",
                      "description": "Total professional deep cleaning for homes and apartments."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Best Pest Control Services Hyderabad",
                      "description": "Safe and effective termite, cockroach, and bed bug control."
                    }
                  }
                ]
              }
            })
          }}
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <FloatingContact />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for(let registration of registrations) {
                    registration.unregister();
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
