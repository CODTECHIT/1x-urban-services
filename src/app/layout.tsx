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
  title: "1x | Premium Home Services & Solutions",
  description: "One-stop solution for all home needs. Professional deep cleaning, pest control, painting, and more with 10+ years of experience.",
  keywords: ["home services", "cleaning", "pest control", "painting", "bangalore", "urban services", "1x services"],
  openGraph: {
    title: "1x | Premium Home Services",
    description: "Professional home services trusted by thousands. Book cleaning, painting, and pest control today.",
    type: "website",
    locale: "en_IE",
    url: "https://1xurbanservices.com",
    siteName: "1x Urban Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "1x | Premium Home Services",
    description: "Your trusted partner for home hygiene and maintenance.",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased" suppressHydrationWarning>
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
