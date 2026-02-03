import React from 'react';
import { FileText } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions | 1x Urban Services',
    description: 'Read our terms and conditions for using 1x Urban Services. Understand our service agreements, booking policies, and user responsibilities.',
    keywords: ['terms and conditions', 'service agreement', '1x urban services terms', 'home services booking policy'],
};

export default function TermsConditions() {
    return (
        <div className="min-h-screen bg-white text-slate-700 selection:bg-emerald-100 selection:text-emerald-900">
            <Navbar activePage="home" /> {/* Terms usually doesn't highlight a main nav item, or could be distinct */}
            <div className="pt-20"></div>

            <main className="pt-10 md:pt-20 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8">
                        Legal Information
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight flex items-center gap-3 md:gap-4">
                        <FileText size={32} className="text-emerald-600 md:w-12 md:h-12" />
                        Terms & Conditions
                    </h1>
                    <p className="text-slate-500 font-bold mb-12">Effective Date: January 2026</p>

                    <div className="prose prose-slate max-w-none space-y-12">
                        <section className="space-y-4">
                            <p className="text-lg leading-relaxed font-medium">
                                Welcome to 1X Urban Services. By using our website or services, you agree to the following terms and conditions.
                            </p>
                        </section>

                        <section className="space-y-6 lg:bg-slate-50 lg:p-10 lg:rounded-[2.5rem] lg:border lg:border-slate-100">
                            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-l-4 border-emerald-500 pl-4">Services</h2>
                            <p className="font-medium leading-relaxed">
                                1X Urban Services provides home-related services including cleaning, pest control, painting, electrical, plumbing, packers & movers, and civil & interior works. Service availability may vary based on location and scheduling.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-l-4 border-emerald-500 pl-4">Booking & Payments</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-3xl border-2 border-slate-100">
                                    <p className="font-bold text-slate-600 italic mb-2">Availability</p>
                                    <p className="text-sm font-medium">Service bookings are subject to availability of specialists and equipment.</p>
                                </div>
                                <div className="bg-white p-6 rounded-3xl border-2 border-slate-100">
                                    <p className="font-bold text-slate-600 italic mb-2">Pricing</p>
                                    <p className="text-sm font-medium">Pricing may vary depending on service scope, materials, and complexity.</p>
                                </div>
                            </div>
                            <p className="font-medium leading-relaxed">Payments must be made as agreed at the time of service, either via digital payment or cash as per the invoice provided.</p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-l-4 border-emerald-500 pl-4">Cancellations</h2>
                            <p className="font-medium leading-relaxed">
                                Cancellations or rescheduling should be informed in advance. Late cancellations may attract charges depending on the service type and resources already committed.
                            </p>
                        </section>

                        <section className="space-y-6 lg:bg-slate-50 lg:p-10 lg:rounded-[2.5rem] lg:border lg:border-slate-100">
                            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-l-4 border-emerald-500 pl-4">User Responsibilities</h2>
                            <p className="font-medium leading-relaxed">
                                Customers must provide accurate information regarding their requirements and ensure safe, uninterrupted access to the service location at the scheduled time.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-l-4 border-emerald-500 pl-4">Liability</h2>
                            <p className="font-medium leading-relaxed">
                                While we strive to provide high-quality services, 1X Urban Services is not liable for damages caused by factors beyond reasonable control. We stand by our work but expect customers to perform necessary pre-service inspections.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-l-4 border-emerald-500 pl-4">Intellectual Property</h2>
                            <p className="font-medium leading-relaxed">
                                All content on this website (text, logos, images, design elements) is the property of 1X Urban Services and may not be reused, reproduced, or distributed without explicit written permission.
                            </p>
                        </section>

                        <section className="space-y-6 bg-slate-900 text-white p-10 rounded-[2.5rem] border border-slate-800 mt-20">
                            <h2 className="text-2xl font-black uppercase tracking-tight text-emerald-400">Updates to Terms</h2>
                            <p className="font-medium leading-relaxed text-slate-300">
                                We reserve the right to update these Terms & Conditions at any time. Continued use of our services implies acceptance of the updated terms. We recommend checking this page periodically.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
