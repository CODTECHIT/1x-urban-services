"use client";

import Link from 'next/link';
import { WhatsAppBtn, PHONE_DISPLAY, WHATSAPP_NUMBER } from './Shared';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
    onNavigate?: (page: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleLinkClick = (page: string) => {
        if (pathname === '/' && onNavigate) {
            onNavigate(page);
        } else {
            router.push(`/?page=${page}`);
        }
    };

    return (
        <footer className="bg-white border-t border-slate-100 transition-all duration-700">
            <div className="container mx-auto px-6 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => handleLinkClick('home')}>
                            <div className="relative w-48 h-12 md:w-56 md:h-16 transition-transform hover:scale-105">
                                <Image src="/logo-v2.png" alt="1x Urban Services" fill className="object-contain object-left" />
                            </div>
                        </div>
                        <p className="text-slate-500 leading-relaxed font-bold text-sm md:text-base max-w-sm">
                            Your trusted partner for professional home services. Delivering quality, safety, and customer satisfaction for over a decade.
                        </p>

                        <div className="space-y-5 pt-4">
                            <div className="flex gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                                    <MapPin className="text-emerald-600" size={18} />
                                </div>
                                <p className="text-slate-500 font-bold text-sm leading-relaxed pt-1">
                                    Plot No 36/3, Chintal, Qutubullapur, <br />
                                    Ramreddy Nagar, Hyderabad, Flat no 105 <br />
                                    Medchal Malkajgiri, Telangana - 500054
                                </p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                                    <Phone className="text-emerald-600" size={18} />
                                </div>
                                <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-slate-500 font-bold text-sm hover:text-emerald-600 transition-colors">
                                    {PHONE_DISPLAY} (Calling)
                                </a>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                                    <MessageCircle className="text-emerald-600" size={18} />
                                </div>
                                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 font-bold text-sm hover:text-emerald-600 transition-colors">
                                    +91 73538 76156 (WhatsApp)
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-black text-[10px] mb-10 uppercase tracking-[0.4em] text-slate-700 border-b-2 border-emerald-500 w-fit pb-2">Company</h4>
                        <ul className="space-y-5 text-slate-500 font-bold text-sm">
                            {[
                                { label: 'Home', id: 'home' },
                                { label: 'About Us', id: 'about' },
                                { label: 'Our Vision', id: 'vision' },
                                { label: 'Contact', id: 'contact' }
                            ].map(item => (
                                <li key={item.id}>
                                    <button onClick={() => handleLinkClick(item.id)} className="hover:text-emerald-600 transition-colors tracking-tight text-left">
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-3">
                        <h4 className="font-black text-[10px] mb-10 uppercase tracking-[0.4em] text-slate-700 border-b-2 border-emerald-500 w-fit pb-2">Our Services</h4>
                        <ul className="grid grid-cols-1 gap-y-5 text-slate-500 font-bold text-sm">
                            {[
                                { label: 'Home Cleaning', slug: 'home-cleaning' },
                                { label: 'Pest Control', slug: 'pest-control' },
                                { label: 'Packers & Movers', slug: 'packers-movers' },
                                { label: 'Electrical & Plumbing', slug: 'electrical-plumbing' },
                                { label: 'Home Painting', slug: 'home-painting' },
                                { label: 'Civil & Interior', slug: 'civil-interior' }
                            ].map(l => (
                                <li key={l.slug}>
                                    <button
                                        onClick={() => router.push(`/services/${l.slug}`)}
                                        className="hover:text-emerald-600 transition-colors tracking-tight text-left"
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Section */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
                            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-slate-700 border-b-2 border-emerald-500 w-fit pb-2 mb-6">Ready to Start?</h4>
                            <p className="text-slate-500 font-bold text-xs leading-relaxed mb-6">
                                Book your professional home service today. We are just a WhatsApp message away.
                            </p>
                            <WhatsAppBtn text="Contact Us Now" className="!py-3.5 !text-[11px] w-full shadow-lg shadow-emerald-600/10" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 font-bold text-[10px] tracking-[0.2em] uppercase">
                    <p>© {new Date().getFullYear()} 1x urban services. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-12">
                        <Link href="/privacy" className="hover:text-slate-700 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-700 transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
