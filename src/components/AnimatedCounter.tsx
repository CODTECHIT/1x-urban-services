"use client";

import React, { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
    value: string;
}

export const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Parse the value to get the numeric part and the suffix
    // Handles cases like "10+", "5000+", "15k+", "50+"
    const numericValueStr = value.replace(/[^0-9.]/g, '');
    const suffix = value.replace(/[0-9.]/g, '');
    const targetValue = parseFloat(numericValueStr);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });

    useEffect(() => {
        if (isInView) {
            const animation = animate(motionValue, targetValue, {
                duration: 2,
                ease: "easeOut",
            });
            return () => animation.stop();
        }
    }, [isInView, targetValue, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                // Handle formatting (e.g., adding commas for thousands)
                const formatted = Math.floor(latest).toLocaleString();

                // Special case for "k" suffix if we want to keep it
                // Actually the suffix is already separated, so we just append it.
                ref.current.textContent = `${formatted}${suffix}`;
            }
        });
    }, [springValue, suffix]);

    return (
        <span ref={ref}>0{suffix}</span>
    );
};
