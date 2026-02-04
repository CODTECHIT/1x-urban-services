// Last updated: 2026-02-04 13:24
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
  title: "1x Urban Services | #1 Premium Home Services in Bangalore",
  description: "Transform your home with 1x Urban Services. Professional deep cleaning, reliable pest control, expert painting, and complete home solutions with 10+ years of experience in Bangalore. Book your free quote today!",
  keywords: [
    "home services Bangalore",
    "professional cleaning services",
    "pest control Bangalore",
    "home painting services Bangalore",
    "packers and movers Bangalore",
    "electrical and plumbing services",
    "deep cleaning Bangalore",
    "sofa cleaning service",
    "1x services",
    "urban services",
    "quality home maintenance",
    "verified home professionals",
    "residential cleaning Bangalore",
    "commercial pest control"
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
    title: "1x Urban Services | Premium Home Services & Solutions",
    description: "Your trusted partner for home hygiene and maintenance. Book professional cleaning, painting, and pest control services in Bangalore.",
    url: "https://1xurbanservices.com",
    siteName: "1x Urban Services",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "1x Urban Services Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1x Urban Services | Bangalore's Best Home Solutions",
    description: "Professional home services trusted by 5000+ happy customers. Quality guaranteed.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
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
              "image": "https://1xurbanservices.com/logo.png",
              "@id": "https://1xurbanservices.com",
              "url": "https://1xurbanservices.com",
              "telephone": "+91 73538 76156",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No 36/3, Chintal, Qutubullapur",
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
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://wa.me/917353876156"
              ],
              "priceRange": "INR"
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
