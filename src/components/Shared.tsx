"use client";

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const WHATSAPP_NUMBER = "917353876156";
export const PHONE_DISPLAY = "+91 73538 76156";

export const WhatsAppBtn = ({ text = "WhatsApp Us", className = "", message = "Hello! I need your services." }: { text?: string, className?: string, message?: string }) => (
    <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative overflow-hidden group flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-emerald-200/50 ${className}`}
    >
        <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>
        <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
        <span>{text}</span>
    </a>
);

export const CallBtn = ({ text = `Call Now: ${PHONE_DISPLAY}`, className = "" }: { text?: string, className?: string }) => (
    <a
        href={`tel:${WHATSAPP_NUMBER}`}
        className={`flex items-center justify-center gap-2 border-2 border-emerald-600/30 hover:border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 ${className}`}
    >
        <Phone size={20} />
        {text}
    </a>
);
