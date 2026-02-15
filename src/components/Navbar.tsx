"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppBtn, CallBtn } from './Shared';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavbarProps {
    activePage?: string;
    onNavigate?: (page: string) => void;
}

export const Navbar = ({ activePage, onNavigate }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (page: string) => {
        setIsMenuOpen(false);
        if (pathname === '/' && onNavigate) {
            onNavigate(page);
        } else {
            router.push(`/?page=${page}`);
        }
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'about', label: 'About Us' },
        { id: 'vision', label: 'Our Vision' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled || pathname !== '/' ? 'bg-white/80 backdrop-blur-2xl py-3 md:py-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]' : 'bg-transparent py-4 md:py-10'}`}>
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3 md:gap-4 cursor-pointer group" onClick={() => handleLinkClick('home')}>
                        <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform hover:scale-105">
                            <Image src="/logo-circular.png" alt="1x Urban Services" fill className="object-contain object-left" priority />
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => handleLinkClick(link.id)}
                                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:text-emerald-600 relative group py-2 ${activePage === link.id ? 'text-emerald-600' : 'text-slate-700'}`}
                            >
                                {link.label}
                                <div className={`absolute -bottom-1 left-0 h-[3px] bg-emerald-600 transition-all duration-500 rounded-full ${activePage === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                            </button>
                        ))}
                        <WhatsAppBtn text="Book a service" className="!px-8 !py-3 !text-[11px] !tracking-widest uppercase shadow-lg shadow-emerald-200" />
                    </div>

                    <button className="lg:hidden w-10 h-10 md:w-12 md:h-12 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl flex items-center justify-center text-slate-700 shadow-sm" onClick={() => setIsMenuOpen(true)}>
                        <Menu size={20} className="md:w-6 md:h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-slate-950 z-[200] transition-all duration-500 flex flex-col ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-4 md:p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <Image src="/logo-circular.png" alt="1x Urban Services" fill className="object-contain" />
                        </div>
                    </div>
                    <button
                        className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors active:scale-95"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 flex flex-col px-6 py-8 overflow-y-auto">
                    <div className="space-y-2 mb-auto">
                        <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-4 pl-1">Menu</p>
                        {navLinks.map((link, i) => (
                            <button
                                key={link.id}
                                onClick={() => handleLinkClick(link.id)}
                                className="block w-full text-left text-3xl font-black text-white hover:text-emerald-400 transition-all tracking-tight py-3 border-b border-white/5 last:border-0"
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <div className="pt-8 space-y-4">
                        <WhatsAppBtn className="w-full !py-4 !text-sm !rounded-xl" text="Book a Service" />
                        <CallBtn className="w-full !py-4 !text-sm !rounded-xl !text-white !border-white/20 !bg-white/5 hover:!bg-white/10" />
                    </div>
                </div>
            </div>
        </>
    );
};
