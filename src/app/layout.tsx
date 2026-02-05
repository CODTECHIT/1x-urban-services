// Last updated: 2026-02-05 17:30 - SEO technical fixes
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
  title: "1x Urban Services | Home Services & Pest Control in Hyderabad",
  description: "1x Urban Services offers professional home services & pest control in Hyderabad. Trusted experts for deep cleaning, painting, repairs & maintenance. 10+ years experience. Book your free quote today!",
  keywords: [
    // Primary Keywords - Home Services & Pest Control Focus
    "home services hyderabad",
    "pest control services hyderabad",
    "professional home services hyderabad",
    "home maintenance services hyderabad",
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
    "1x urban services hyderabad",
    "premium home services hyderabad",
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
        url: "https://1xurbanservices.com/logo.png",
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
    images: ["https://1xurbanservices.com/logo.png"],
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
              "alternateName": "1x Urban Services Hyderabad",
              "description": "Professional home services & pest control company in Hyderabad",
              "url": "https://1xurbanservices.com",
              "telephone": "+91 73538 76156",
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
              "areaServed": {
                "@type": "City",
                "name": "Hyderabad"
              },
              "makesOffer": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Services" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pest Control Services" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Painting Services" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Repair & Maintenance Services" } }
              ]
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
