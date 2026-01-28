"use client";

import Link from 'next/link';
import { WhatsAppBtn } from './Shared';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

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
            <div className="container mx-auto px-6 pt-20 md:pt-32 pb-12 md:pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-12 mb-20 md:mb-32">
                    <div className="space-y-6 md:space-y-8">
                        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => handleLinkClick('home')}>
                            <div className="relative w-10 h-10 md:w-12 md:h-12 group-hover:rotate-6 transition-transform">
                                <Image src="/logo.png" alt="1x Logo" fill className="object-contain" />
                            </div>
                            <span className="text-xl md:text-2xl font-black tracking-tighter">1x urban services</span>
                        </div>
                        <p className="text-slate-500 leading-relaxed font-bold text-sm md:text-base">Your trusted partner for professional home services. Delivering quality, safety, and customer satisfaction for over a decade.</p>
                    </div>
                    <div>
                        <h4 className="font-black text-[10px] mb-10 uppercase tracking-[0.4em] text-slate-700 border-b border-emerald-500 w-fit pb-2">Company</h4>
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
                    <div>
                        <h4 className="font-black text-[10px] mb-10 uppercase tracking-[0.4em] text-slate-700 border-b border-emerald-500 w-fit pb-2">Services</h4>
                        <ul className="space-y-5 text-slate-500 font-bold text-sm">
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
                    <div className="space-y-6">
                        <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-slate-700 border-b border-emerald-500 w-fit pb-2">Ready to Start?</h4>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">Book your professional home service today. We are just a WhatsApp message away.</p>
                        <WhatsAppBtn text="Contact Us" className="!py-3 !text-[11px] w-full" />
                    </div>
                </div>
                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 font-bold text-[10px] tracking-[0.2em] uppercase">
                    <p>© {new Date().getFullYear()} 1x urban services. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-12">
                        <Link href="/privacy" className="hover:text-slate-700 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-slate-700 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
