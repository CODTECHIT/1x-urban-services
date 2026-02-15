"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Users,
  Target,
  Award,
  ChevronRight,
  ShieldCheck,
  Globe,
  Paintbrush,
  Bug,
  Truck,
  Zap,
  CheckCircle2,
  Sparkles,
  Wrench,
  Layout,
} from "lucide-react";

import {
  WhatsAppBtn,
  CallBtn,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
} from "@/components/Shared";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedCounter } from "@/components/AnimatedCounter";

import { Reveal } from "@/components/Reveal";

const Hero = () => (
  <section className="relative min-h-[85vh] flex flex-col pt-28 lg:pt-32 pb-8 lg:pb-16 overflow-hidden bg-white">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/house-bg.png"
        alt="Background"
        fill
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      {/* Decorative Green Leaves/Blur */}
      <div className="absolute bottom-0 left-0 w-48 h-48 lg:w-64 lg:h-64 bg-emerald-100 rounded-full blur-[80px] lg:blur-[100px] opacity-60"></div>
      <div className="absolute top-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-emerald-50 rounded-full blur-[100px] lg:blur-[120px] opacity-40"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-7 max-w-2xl text-center mx-auto lg:mx-0 lg:text-left">
          <Reveal direction="up" delay={0.2} width="100%">
            {/* SEO-optimized H1: Topic-focused with brand secondary */}
            <h1 className="mb-4 leading-none">
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-800 mb-3">
                Best Home Cleaning & Professional Services in Hyderabad
              </span>
              <span className="flex flex-wrap items-baseline justify-center lg:justify-start gap-4">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter text-emerald-500">
                  1x
                </span>
                <span className="text-2xl sm:text-4xl lg:text-4xl font-black tracking-tight text-emerald-600">
                  Urban Services
                </span>
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-[1.2] tracking-tight text-slate-700">
              Your <span className="text-emerald-600">trusted partner</span> for{" "}
              cleaning, pest control, painting & home maintenance
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.4} width="100%">
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              Premium home services with{" "}
              <span className="font-bold text-slate-700">
                10+ years of experience
              </span>{" "}
              in Hyderabad. Deep cleaning, pest control, painting, and complete home solutions by verified professionals.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.6} width="100%">
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 lg:gap-4 pt-2 lg:pt-3">
              <WhatsAppBtn
                text="Get a Free Quote"
                className="!w-full sm:!w-auto !bg-[#fbbf24] !text-slate-900 border-b-4 border-[#d97706] hover:!bg-[#f59e0b] !shadow-xl !shadow-amber-900/20 active:border-b-0 active:translate-y-1"
              />
              <CallBtn className="!w-full sm:!w-auto" />
            </div>
          </Reveal>
        </div>

        {/* Right Content - Composition with Man and Floating Cards */}
        <Reveal direction="up" delay={0.4} width="100%" overflow="visible">
          <div className="relative h-[350px] lg:h-[550px] flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            {/* Composition Wrapper */}
            <div className="relative group">
              {/* Main Character Image */}
              <div className="relative w-[260px] h-[300px] lg:w-[400px] lg:h-[440px] z-10 lg:mr-12">
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/hero-image.jpg"
                    alt="Founder N G Miskin"
                    fill
                    className="object-cover lg:object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Founder Label */}
                <div className="absolute -bottom-4 right-8 lg:right-4 bg-white px-5 py-3 rounded-2xl shadow-xl z-20 border border-emerald-100 animate-float stagger-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-0.5">
                    Founder
                  </p>
                  <p className="text-sm lg:text-base font-black text-slate-800">
                    N G Miskin
                  </p>
                </div>
              </div>

              {/* 100% Secure - Top Right */}
              <div className="absolute -top-4 -right-6 lg:top-0 lg:-right-4 bg-white p-2.5 lg:p-3.5 rounded-xl lg:rounded-2xl shadow-xl flex items-center gap-2.5 animate-float z-20 max-w-[140px] lg:max-w-[180px] hidden sm:flex">
                <div className="w-7 h-7 lg:w-9 lg:h-9 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={14} className="lg:w-4 lg:h-4" />
                </div>
                <div>
                  <p className="text-[7px] lg:text-[9px] uppercase font-bold text-slate-400">
                    100% Secure
                  </p>
                  <p className="text-[11px] lg:text-xs font-bold text-slate-700">
                    Verified Experts
                  </p>
                </div>
              </div>

              {/* Global Scale - Middle Left */}
              <div className="absolute top-20 -left-8 lg:top-24 lg:-left-12 bg-white p-2.5 lg:p-3.5 rounded-xl lg:rounded-2xl shadow-xl flex flex-col items-center gap-1 animate-float stagger-2 z-20 text-center w-20 lg:w-28 hidden sm:flex">
                <Globe className="text-emerald-500 w-5 h-5 lg:w-7 lg:h-7" />
                <p className="text-[9px] lg:text-[11px] font-bold text-slate-700">
                  Global Scale
                </p>
              </div>

              {/* Top Rated - Middle Right */}
              <div className="absolute bottom-24 -right-10 lg:bottom-32 lg:-right-8 bg-white p-2.5 lg:p-3.5 rounded-xl lg:rounded-2xl shadow-xl flex flex-col items-center gap-1 animate-float stagger-1 z-20 text-center w-20 lg:w-28 hidden sm:flex">
                <Award className="text-emerald-500 w-5 h-5 lg:w-7 lg:h-7" />
                <p className="text-[9px] lg:text-[11px] font-bold text-slate-700">
                  Top Rated
                </p>
              </div>

              {/* Quality Service - Bottom Left */}
              <div className="absolute bottom-6 -left-4 lg:bottom-10 lg:left-0 bg-white p-2.5 lg:p-3.5 rounded-xl lg:rounded-2xl shadow-xl flex items-center gap-2 animate-float stagger-3 z-20 max-w-[160px] lg:max-w-[200px] hidden sm:flex">
                <div className="bg-emerald-600 text-white text-[9px] lg:text-[11px] font-black px-1.5 py-0.5 rounded">
                  1x
                </div>
                <p className="text-[9px] lg:text-[11px] font-bold text-slate-700">
                  Quality Service
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Service Strip - Optimized for Mobile (Horizontal Scroll) */}
      <div className="mt-8 lg:mt-16 bg-white rounded-3xl shadow-xl border border-slate-100 p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 lg:items-center lg:justify-between">
          <div className="overflow-hidden -mx-4 px-4 lg:mx-0 lg:px-0">
            <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-8 pb-4 lg:pb-0 animate-marquee lg:animate-none">
              {[
                { icon: Sparkles, text: "Cleaning Services" },
                { icon: Bug, text: "Pest Control" },
                { icon: Paintbrush, text: "Painting" },
                { icon: Truck, text: "Moving Services" },
                { icon: Sparkles, text: "Cleaning Services" },
                { icon: Bug, text: "Pest Control" },
                { icon: Paintbrush, text: "Painting" },
                { icon: Truck, text: "Moving Services" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 flex flex-col lg:flex-row items-center gap-3 lg:gap-4 group cursor-pointer text-center lg:text-left min-w-[100px] lg:min-w-0 ${idx >= 4 ? "lg:hidden" : ""}`}
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <item.icon size={20} className="lg:w-6 lg:h-6" />
                  </div>
                  <span className="font-bold text-slate-700 text-xs lg:text-base group-hover:text-emerald-600 transition-colors whitespace-nowrap lg:whitespace-normal">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <WhatsAppBtn text="WhatsApp Us" className="w-full" />
          </div>
        </div>

        <div className="mt-6 lg:mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs lg:text-sm text-slate-500 font-medium gap-2 lg:gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-500" size={16} />
            <AnimatedCounter value="5000" />+ Satisfied Customers
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExperienceStats = () => (
  <section className="py-16 bg-slate-950 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        {[
          { label: "Years Experience", value: "10+", sub: "Trusted Service" },
          { label: "Happy Customers", value: "5000+", sub: "Homes Served" },
          {
            label: "Services Completed",
            value: "15k+",
            sub: "Quality Guaranteed",
          },
          {
            label: "Expert Technicians",
            value: "50+",
            sub: "Trained Professionals",
          },
        ].map((stat, idx) => (
          <Reveal key={idx} direction="up" delay={idx * 0.1}>
            <div className="group cursor-default text-center lg:text-left">
              <div className="mb-2 text-3xl sm:text-4xl lg:text-6xl font-black text-white group-hover:text-emerald-400 transition-all duration-700 tracking-tighter">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="h-1 w-12 bg-emerald-500 mb-4 group-hover:w-full transition-all duration-700 rounded-full mx-auto lg:mx-0"></div>
              <p className="text-emerald-500 font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-1">
                {stat.label}
              </p>
              <p className="text-slate-500 text-xs sm:text-sm font-bold">
                {stat.sub}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section
    id="about"
    className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
  >
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
      {/* Left Side - Feature Cards */}
      <div className="relative order-2 lg:order-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {/* Visionary Approach Card */}
          <Reveal direction="up" delay={0.1} className="h-full" width="100%">
            <div className="h-full bg-white rounded-[2rem] p-8 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col justify-center">
              <div className="w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-6 lg:mb-4">
                <Target size={24} className="text-emerald-600 lg:w-5 lg:h-5" />
              </div>
              <h4 className="text-xl lg:text-lg font-black mb-3 lg:mb-2 text-slate-800">
                Visionary Approach
              </h4>
              <p className="text-sm lg:text-xs text-slate-600 leading-relaxed">
                Leading with innovation and future-proof logic.
              </p>
            </div>
          </Reveal>

          {/* Proven Integrity Card */}
          <Reveal direction="up" delay={0.2} className="h-full" width="100%">
            <div className="h-full bg-slate-800 rounded-[2rem] p-8 lg:p-6 shadow-[0_10px_30px_rgba(30,41,59,0.2)] hover:shadow-[0_20px_40px_rgba(30,41,59,0.4)] transition-all duration-500 text-white flex flex-col justify-center">
              <div className="w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 lg:mb-4">
                <ShieldCheck
                  size={24}
                  className="text-emerald-400 lg:w-5 lg:h-5"
                />
              </div>
              <h4 className="text-xl lg:text-lg font-black mb-3 lg:mb-2">
                Proven Integrity
              </h4>
              <p className="text-sm lg:text-xs text-slate-300 leading-relaxed">
                10+ years of unwavering market trust.
              </p>
            </div>
          </Reveal>

          {/* Skilled Professionals Card */}
          <Reveal direction="up" delay={0.3} className="h-full" width="100%">
            <div className="h-full bg-white rounded-[2rem] p-8 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col justify-center">
              <div className="w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-6 lg:mb-4">
                <Users size={24} className="text-emerald-600 lg:w-5 lg:h-5" />
              </div>
              <h4 className="text-xl lg:text-lg font-black mb-3 lg:mb-2 text-slate-800">
                Skilled Professionals
              </h4>
              <p className="text-sm lg:text-xs text-slate-600 leading-relaxed">
                Trained and background-verified technicians.
              </p>
            </div>
          </Reveal>

          {/* 1x Quality Assured Card - Large */}
          <Reveal direction="up" delay={0.4} className="h-full" width="100%">
            <div className="h-full bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[2rem] p-10 lg:p-8 shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:shadow-[0_30px_60px_rgba(16,185,129,0.4)] flex flex-col justify-center items-center text-center text-white hover:scale-105 transition-all duration-500">
              <p className="text-5xl lg:text-4xl font-black mb-2">1x</p>
              <div className="h-1 w-12 bg-emerald-300 rounded-full mb-4"></div>
              <p className="text-xs lg:text-[10px] font-black uppercase tracking-[0.2em] text-emerald-50">
                Quality Assured
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="space-y-8 order-1 lg:order-2">
        <Reveal direction="right" delay={0.2}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-1.5 bg-emerald-600 rounded-full"></div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">
              The 1x Advantage
            </p>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.4}>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-800 leading-[1.2] tracking-tight">
            Why Choose{" "}
            <span className="text-emerald-600">1x Urban Services?</span>
          </h2>
        </Reveal>

        <Reveal direction="right" delay={0.6}>
          <div className="space-y-6">
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Hyderabad&apos;s trusted home services partner with over a decade
              of experience. From deep cleaning and pest control to painting and
              repairs, we ensure quality, safety, and customer satisfaction in
              every job.
            </p>
            <div className="pt-4 border-t border-slate-100 inline-block">
              <p className="text-xl font-black text-slate-800 mb-1">
                N G Miskin
              </p>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
                Founder & Managing Director
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Inquiry*%0A*Name:* ${formData.name}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section className="py-20 bg-white selection:bg-emerald-600 selection:text-white">
      <div className="container mx-auto px-6">
        <div className="relative bg-slate-950 rounded-[2.5rem] lg:rounded-[3rem] p-8 sm:p-10 lg:p-16 overflow-hidden text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 skew-x-12 translate-x-1/2"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 items-center">
            <Reveal direction="up" delay={0.2}>
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  Contact 24/7
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight px-4 sm:px-0">
                  Get a{" "}
                  <span className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-8">
                    Free Quote
                  </span>{" "}
                  Today.
                </h2>
                <p className="text-base sm:text-lg text-slate-400 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed px-4 sm:px-0">
                  Our team is ready to serve you. Book your service now and
                  experience professional home care.
                </p>

                <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
                  <div className="group flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] group-hover:rotate-6 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-0.5">
                        Direct Line
                      </p>
                      <p className="text-lg font-black">{PHONE_DISPLAY}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 text-slate-700 shadow-2xl relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 rounded-xl rotate-12 -z-10 animate-float"></div>
                <form className="space-y-6" onSubmit={handleWhatsAppInquiry}>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 px-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] px-8 py-5 focus:border-emerald-500 focus:bg-white focus:outline-none transition-all font-bold placeholder:text-slate-300 text-base"
                      placeholder="Johnathan Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 px-2">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.25rem] px-6 py-4 focus:border-emerald-500 focus:bg-white focus:outline-none transition-all font-bold placeholder:text-slate-300 resize-none text-base"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white font-black py-4 rounded-[1.25rem] shadow-2xl shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-2 transition-all active:scale-95 uppercase tracking-[0.2em] text-sm"
                  >
                    Send to WhatsApp
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const KeyFeatures = () => (
  <section className="py-8 lg:py-10 bg-emerald-50 border-y border-emerald-100/50 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        {[
          {
            icon: Zap,
            title: "Super Fast",
            desc: "Quick Service",
            color: "text-amber-500",
            bg: "bg-amber-100",
          },
          {
            icon: ShieldCheck,
            title: "100% Secure",
            desc: "Verified Makers",
            color: "text-emerald-600",
            bg: "bg-emerald-100",
          },
          {
            icon: Award,
            title: "Best Price",
            desc: "Affordable",
            color: "text-blue-500",
            bg: "bg-blue-100",
          },
        ].map((feat, i) => (
          <Reveal key={i} direction="up" delay={i * 0.1} width="100%">
            <div className="bg-white rounded-2xl p-4 lg:p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100/50 group cursor-default">
              <div
                className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl ${feat.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                <feat.icon size={24} className={`${feat.color}`} />
              </div>
              <div>
                <h4 className="font-black text-slate-800 text-sm lg:text-base uppercase tracking-tight">
                  {feat.title}
                </h4>
                <p className="text-xs font-bold text-slate-500">{feat.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: "Home Cleaning Services",
      desc: "Professional home cleaning solutions designed to keep your living spaces hygienic, fresh, and comfortable.",
      icon: <Sparkles className="text-emerald-500" size={32} />,
      slug: "home-cleaning",
      image: "/images/services/home-cleaning.png",
      subs: [
        "Bathroom Cleaning",
        "Balcony Cleaning",
        "Window Cleaning",
        "Fridge Cleaning",
        "Kitchen Cleaning",
        "Floor Cleaning",
        "Sofa Cleaning",
        "Carpet Cleaning",
        "Mattress Cleaning",
        "Jumbo Water Tank & Softener Cleaning",
      ],
    },
    {
      id: 2,
      name: "Pest Control Services",
      desc: "Reliable and safe pest control services to protect your home from harmful insects and pests.",
      icon: <Bug className="text-emerald-500" size={32} />,
      slug: "pest-control",
      image: "/images/services/pest-control-main.jpg",
      subs: [
        "Cockroach & Ant Control",
        "General Pest Control",
        "Bed Bug Control",
        "Termite Control",
      ],
    },
    {
      id: 3,
      name: "Packers & Movers",
      desc: "Professional packing and moving solutions for safe and hassle-free relocation across India.",
      icon: <Truck className="text-emerald-500" size={32} />,
      slug: "packers-movers",
      image: "/images/services/packers-movers-main-v2.jpg",
      subs: [
        "Home Shifting",
        "Office Relocation",
        "Safe Packing & Transportation",
      ],
    },
    {
      id: 4,
      name: "Electrical & Plumbing",
      desc: "Skilled technicians handle everyday electrical and plumbing needs with precision and reliability.",
      icon: <Wrench className="text-emerald-500" size={32} />,
      slug: "electrical-plumbing",
      image: "/images/services/sub/electrical-services-v2.jpg",
      subs: ["Electrical Repairs & Fittings", "Plumbing Repairs & Maintenance"],
    },
    {
      id: 5,
      name: "Home Painting Services",
      desc: "Professional home painting services that enhance the appearance and protection of your home.",
      icon: <Paintbrush className="text-emerald-500" size={32} />,
      slug: "home-painting",
      image: "/images/services/home-painting.jpg",
      subs: ["Interior Painting", "Exterior Painting", "Texture Painting"],
    },
    {
      id: 6,
      name: "Civil & Interior Design",
      desc: "Complete civil and interior solutions, from planning to execution, tailored to your needs.",
      icon: <Layout className="text-emerald-500" size={32} />,
      slug: "civil-interior",
      image: "/images/services/civil-interior.png",
      subs: ["Civil Works", "Interior Design & Execution"],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-white selection:bg-emerald-600 selection:text-white"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-emerald-600 mb-4 lg:mb-6">
            Our Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 lg:mb-8 tracking-tight leading-tight text-slate-800">
            Premium Home Services <br /> in{" "}
            <span className="text-emerald-600">Hyderabad</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-bold leading-relaxed px-4 sm:px-0">
            Complete home care solutions including deep cleaning, pest control,
            painting, and maintenance services by verified professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {services.map((s, i) => {
            return (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <a
                  href={`/services/${s.slug}`}
                  className="block group cursor-pointer"
                >
                  {/* Service Image */}
                  <div className="relative overflow-hidden rounded-[1.5rem] mb-4 aspect-[4/3] bg-slate-100">
                    <Image
                      src={s.image}
                      alt={s.name}
                      width={500}
                      height={375}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Service Name */}
                  <h3 className="text-xl font-black mb-2 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">
                    {s.name}
                  </h3>

                  {/* Service Description */}
                  <p className="text-slate-600 font-bold text-xs leading-relaxed mb-4">
                    {s.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 group-hover:gap-4 transition-all">
                    Book Now <ChevronRight size={14} />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const VisionSection = () => (
  <section className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden selection:bg-white selection:text-emerald-950">
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/50 to-transparent"></div>

    <div className="container mx-auto px-6 text-center relative z-10">
      {/* OUR VISION Label */}
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-200/80 mb-4 lg:mb-6">
        Trusted Pest Control Services
      </p>

      {/* Main Heading - SEO H2 */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 lg:mb-4 tracking-tight leading-tight text-white">
        Professional Home Care in Hyderabad
      </h2>

      {/* Subheading with Green Accent - H3 */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-8 lg:mb-10 tracking-tight leading-tight">
        <span className="text-white">Quality Service. </span>
        <span className="text-emerald-400">Every Time.</span>
      </h3>

      {/* Description with local SEO */}
      <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 lg:mb-16 font-medium px-4">
        Serving homes across Hyderabad with reliable pest control, deep cleaning,
        painting, and complete home maintenance solutions. We put quality, safety,
        and customer trust first in everything we do.
      </p>

      {/* Glassmorphic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
        {[
          {
            title: "Quality You Can Trust",
            icon: <CheckCircle2 size={32} />,
            desc: "Every service is delivered by trained professionals using safe methods and proven processes to ensure lasting results.",
          },
          {
            title: "Reliable & On Time",
            icon: <Zap size={32} />,
            desc: "We respect your time. Our team arrives on schedule and completes every job with care and professionalism.",
          },
          {
            title: "Customer-First Approach",
            icon: <ShieldCheck size={32} />,
            desc: "Your satisfaction is our priority. We listen, we deliver, and we stand by our work every time.",
          },
        ].map((item, i) => (
          <Reveal
            key={i}
            direction="up"
            delay={i * 0.2}
            className="h-full"
            width="100%"
          >
            <div className="h-full flex flex-col justify-center group p-8 lg:p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] hover:bg-white/15 hover:border-white/30 transition-all duration-500 relative overflow-hidden">
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                <div className="text-white">{item.icon}</div>
              </div>
              <h4 className="text-xl font-black mb-4">{item.title}</h4>
              <p className="text-sm text-emerald-50/70 font-bold leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const LocationSEO = () => (
  <section className="py-16 bg-slate-50 border-t border-slate-100">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-slate-800 mb-6 border-b-2 border-emerald-500 w-fit pb-1">
            Home Cleaning Services Hyderabad
          </h4>
          <ul className="space-y-3 text-xs font-bold text-slate-500">
            <li>Full house deep cleaning services Hyderabad</li>
            <li>Home cleaning services Hyderabad price</li>
            <li>Cheap home cleaning services Hyderabad</li>
            <li>Best flat cleaning Hyderabad</li>
            <li>Eco-friendly home cleaning near me</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-slate-800 mb-6 border-b-2 border-emerald-500 w-fit pb-1">
            Why Choose Us Over Apps?
          </h4>
          <ul className="space-y-3 text-xs font-bold text-slate-500">
            <li>Professional home cleaning hyderabad vs urban company</li>
            <li>Best alternative to home service apps</li>
            <li>Reliable private cleaning services near me</li>
            <li>Verified local cleaners Hyderabad</li>
            <li>Same day home services Hyderabad</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-slate-800 mb-6 border-b-2 border-emerald-500 w-fit pb-1">
            Pest Control Authorities
          </h4>
          <ul className="space-y-3 text-xs font-bold text-slate-500">
            <li>Anti termite treatment Hyderabad cost</li>
            <li>Herbal pest control Hyderabad</li>
            <li>Cockroach treatment for kitchen Hyderabad</li>
            <li>Odorless pest control services Hyderabad</li>
            <li>Bed bug elimination experts near me</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-slate-800 mb-6 border-b-2 border-emerald-500 w-fit pb-1">
            Areas We Serve (Local Hubs)
          </h4>
          <p className="text-[10px] font-bold text-slate-400 mb-4 leading-relaxed">
            Leading home cleaning & maintenance company serving:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Banjara Hills", "Jubilee Hills", "Gachibowli", "Kondapur", "Madhapur",
              "Hitech City", "Manikonda", "Kukatpally", "Miyapur", "Nallagandla",
              "Tellapur", "Bowenpally", "Secunderabad", "Begumpet", "Ameerpet",
              "Dilshuknagar", "Kothapet", "Nagole", "Uppal", "LB Nagar"
            ].map((area) => (
              <span key={area} className="px-2 py-1 bg-white border border-slate-200 rounded text-[9px] text-slate-400 font-bold hover:border-emerald-300 transition-colors">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-200 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">
          Trusted by 5000+ happy customers in Hyderabad
        </p>
      </div>
    </div>
  </section>
);

function HomeContent() {
  const [activePage, setActivePage] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page");
    setTimeout(() => {
      if (
        page &&
        ["home", "services", "about", "vision", "contact"].includes(page)
      ) {
        setActivePage(page);
      }
      setIsVisible(true);
    }, 50);
  }, [searchParams]);

  const navigate = (page: string) => {
    setIsVisible(false);
    setTimeout(() => {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsVisible(true);
    }, 200); // Snappier transition
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar activePage={activePage} onNavigate={navigate} />

      {/* Page Content with Transition Wrapper - Optimized for performance */}
      <div
        className={`transition-opacity duration-500 ease-out min-h-screen ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {activePage === "home" && (
          <main>
            <Hero />
            <KeyFeatures />
            <ServicesSection />
            <ExperienceStats />
            <AboutSection />
            <VisionSection />
            <ContactUs />
            <LocationSEO />
          </main>
        )}

        {activePage === "about" && (
          <main className="pt-24 lg:pt-32">
            <AboutSection />
            <div className="bg-slate-50 py-32 mt-20">
              <div className="container mx-auto px-6 text-center">
                <div className="inline-block p-4 rounded-3xl bg-emerald-100 mb-8">
                  <Award size={48} className="text-emerald-600" />
                </div>
                <h2 className="text-5xl lg:text-7xl font-black mb-10 tracking-tight text-slate-800">
                  Ready to build your legacy?
                </h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-16 font-bold leading-relaxed">
                  Join hundreds of local families who trust 1x for their most
                  critical home care services.
                </p>
                <WhatsAppBtn className="inline-flex !px-16 !py-6" />
              </div>
            </div>
            <ExperienceStats />
          </main>
        )}

        {activePage === "vision" && (
          <main className="pt-24 lg:pt-32">
            <VisionSection />
            <div className="bg-white py-40">
              <div className="container mx-auto px-6 text-center">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 mb-6 block">
                  Our Commitment
                </span>
                <h2 className="text-5xl lg:text-7xl font-black mb-12 tracking-tight text-slate-700">
                  Service that matters.
                </h2>
                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
                  <div className="p-10 rounded-[3rem] bg-slate-50 hover:bg-emerald-50 transition-colors">
                    <h4 className="text-2xl font-black mb-4">Integrity</h4>
                    <p className="text-slate-500 font-bold leading-relaxed">
                      We believe in transparent pricing and clear communication.
                      No hidden complexities or charges.
                    </p>
                  </div>
                  <div className="p-10 rounded-[3rem] bg-slate-50 hover:bg-emerald-50 transition-colors">
                    <h4 className="text-2xl font-black mb-4">Innovation</h4>
                    <p className="text-slate-500 font-bold leading-relaxed">
                      Staying ahead with modern techniques and safe service
                      standards is our daily goal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ExperienceStats />
          </main>
        )}

        {activePage === "services" && (
          <main className="pt-24 lg:pt-32">
            <ServicesSection />
            <ExperienceStats />
          </main>
        )}

        {activePage === "contact" && (
          <main className="pt-24 lg:pt-32">
            <ContactUs />
          </main>
        )}
      </div>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
