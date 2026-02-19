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
  title: "Wide Range of Professional Services You Can Trust | 1x Urban Services",
  description: "Experience a wide range of professional services you can trust. 1x Urban Services offers expert home cleaning, pest control, painting, moving, and maintenance solutions in Hyderabad. Trusted by 5000+ happy homes. Book your service today!",
  keywords: [
    "professional home services hyderabad",
    "top rated cleaning services hyderabad",
    "professional deep cleaning hyderabad",
    "wide range of home services hyderabad",
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
    "best packers and movers hyderabad",
    "home shifting services hyderabad",
    "office relocation services hyderabad",
    "local movers and packers hyderabad",
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
    title: "Wide Range of Professional Services You Can Trust | 1x Urban Services",
    description: "Wide range of professional home services in Hyderabad. From deep cleaning and pest control to painting and repairs, we provide expert care for your home with 10+ years of experience.",
    url: "https://1xurbanservices.com",
    siteName: "1x Urban Services",
    images: [
      {
        url: "https://1xurbanservices.com/logo-circular.png",
        width: 800,
        height: 600,
        alt: "1x Urban Services - Wide Range of Professional Services You Can Trust",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wide Range of Professional Services You Can Trust | 1x Urban Services",
    description: "Experience a wide range of professional home services you can trust. Expert cleaning, painting, pest control, and maintenance in Hyderabad by verified pros.",
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
              "alternateName": "1x Urban Services - Wide Range of Professional Home Solutions",
              "description": "Offering a wide range of professional services you can trust. 1x Urban Services provides expert home cleaning, pest control, painting, and maintenance in Hyderabad with verified professionals.",
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
                      "name": "Professional Full House Deep Cleaning Solutions",
                      "description": "Premium deep cleaning for residential and commercial spaces."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Expert Pest Control & Sanitization Services",
                      "description": "Safe, effective, and professional pest management solutions."
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
