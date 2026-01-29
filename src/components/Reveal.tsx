"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    overflow?: "hidden" | "visible";
    className?: string; // Added className prop
}

export const Reveal = ({ children, width = "fit-content", direction = "up", delay = 0.25, overflow = "hidden", className = "" }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
            x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        },
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.4, delay, ease: [0.25, 1, 0.5, 1] }}
                className="h-full" // Ensure motion div takes full height too if needed
            >
                {children}
            </motion.div>
        </div>
    );
};
