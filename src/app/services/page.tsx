import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Professional Home Services | 1x Urban Services",
  description:
    "Explore our wide range of home services including cleaning, pest control, painting, and more.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage="services" />
      <div className="pt-20"></div>

      {/* Header */}
      <section className="relative bg-emerald-950 text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent)]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <div className="inline-block px-5 py-2 rounded-full border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
              Professional Home Services
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100/70 leading-relaxed">
              From deep cleaning to complete renovations, we provide
              professional services for all your home and office needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => {
              const customImages: { [key: string]: string } = {
                "pest-control": "/images/services/pest-control-main.jpg",
                "packers-movers": "/images/services/packers-movers-main-v2.jpg",
                "electrical-plumbing":
                  "/images/services/sub/electrical-services-v2.jpg",
                "home-painting": "/images/services/home-painting.jpg",
              };

              const imageSrc =
                customImages[service.slug] ||
                `/images/services/${service.slug}.png`;

              return (
                <Reveal key={service.id} direction="up" delay={i * 0.1}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block cursor-pointer"
                  >
                    {/* Service Image */}
                    <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[4/3] bg-slate-100">
                      <Image
                        src={imageSrc}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Service Name */}
                    <h3 className="text-2xl font-black mb-3 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 font-bold text-sm leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Service Count & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        {service.subServices.length} Services
                      </span>
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-600 group-hover:gap-4 transition-all">
                        View Details <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
