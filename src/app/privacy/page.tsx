import React from 'react';
import { ShieldCheck, Phone } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | 1x Urban Services',
    description: 'Read our privacy policy to understand how we handle your data and ensure your privacy while using our home services.',
    keywords: ['privacy policy', 'data protection', '1x urban services privacy', 'home services privacy'],
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white text-slate-700 selection:bg-emerald-100 selection:text-emerald-900">
            <Navbar activePage="home" /> {/* Privacy usually doesn't highlight a main nav item */}
            <div className="pt-20"></div>

            <main className="pt-10 md:pt-20 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8">
                        Legal Information
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight flex items-center gap-3 md:gap-4">
                        <ShieldCheck size={32} className="text-emerald-600 md:w-12 md:h-12" />
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500 font-bold mb-12">Effective Date: January 2026</p>

                    <div className="prose prose-slate max-w-none space-y-12">
                        <section className="space-y-4">
                            <p className="text-lg leading-relaxed font-medium">
                                At 1X Urban Services, we respect your privacy and are committed to protecting your personal information.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-l-4 border-emerald-500 pl-4">Information We Collect</h2>
                            <p className="font-medium leading-relaxed">We may collect basic personal details such as:</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                                {['Name', 'Phone number', 'Email address', 'Service-related information shared by you'].map((item, i) => (
                                    <li key={i} className="bg-slate-50 p-4 rounded-2xl font-bold border border-slate-100 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="font-medium leading-relaxed">This information is collected only when you contact us, fill out a form, or request a service or quote.</p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-l-4 border-emerald-500 pl-4">How We Use Your Information</h2>
                            <p className="font-medium leading-relaxed">Your information is used to:</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: "Response", desc: "Respond to your inquiries" },
                                    { title: "Management", desc: "Provide and manage our services" },
                                    { title: "Communication", desc: "Communicate service updates" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-3xl border-2 border-slate-100 hover:border-emerald-200 transition-all">
                                        <h4 className="font-black text-emerald-600 text-xs uppercase tracking-widest mb-2">{item.title}</h4>
                                        <p className="text-sm font-bold text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="font-medium leading-relaxed p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800 italic">
                                We do not sell, rent, or trade your personal information to third parties.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-l-4 border-emerald-500 pl-4">Data Security</h2>
                            <p className="font-medium leading-relaxed">
                                We take reasonable measures to protect your personal data from unauthorized access, misuse, or disclosure. Our goal is to ensure your peace of mind while using our professional home services.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-l-4 border-emerald-500 pl-4">Third-Party Links</h2>
                            <p className="font-medium leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to read the privacy policies of any website you visit.
                            </p>
                        </section>

                        <section className="space-y-6 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 mt-20">
                            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Consent & Changes</h2>
                            <p className="font-medium leading-relaxed">
                                By using our website and services, you consent to this Privacy Policy. We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                            </p>
                            <div className="pt-6 border-t border-slate-200 mt-6 lg:flex items-center justify-between gap-8">
                                <p className="text-sm font-bold text-slate-600 mb-4 lg:mb-0">Questions about this policy? Contact us:</p>
                                <a href="tel:+917353876156" className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200">
                                    <Phone size={20} /> +91 73538 76156
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
