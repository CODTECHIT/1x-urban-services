"use client";

import React, { useState } from 'react';
import { MessageCircle, Phone, Headset, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from './Shared';

export const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const message = encodeURIComponent("Hello! I'm interested in your services.");

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
            {/* Options */}
            <div className={`flex flex-col gap-4 transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'}`}>
                {/* WhatsApp */}
                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 group"
                    title="WhatsApp Us"
                >
                    <MessageCircle size={28} />
                    <span className="absolute right-16 bg-white text-slate-700 px-3 py-1.5 rounded-lg shadow-md text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-slate-100">
                        Chat on WhatsApp
                    </span>
                </a>

                {/* Call */}
                <a
                    href={`tel:${WHATSAPP_NUMBER}`}
                    className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all hover:scale-110 active:scale-95 group"
                    title="Call Us"
                >
                    <Phone size={24} />
                    <span className="absolute right-16 bg-white text-slate-700 px-3 py-1.5 rounded-lg shadow-md text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-slate-100">
                        Call Us Now
                    </span>
                </a>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 transform active:scale-90 ${isOpen ? 'bg-rose-500 text-white rotate-0' : 'bg-emerald-600 text-white'}`}
            >
                {isOpen ? <X size={32} /> : <Headset size={32} className="animate-pulse" />}
            </button>
        </div>
    );
};
