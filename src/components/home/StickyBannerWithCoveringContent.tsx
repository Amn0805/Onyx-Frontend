// src/components/home/StickyBannerWithCoveringContent.tsx
//
// DEBUG VERSION - Simplified to test content visibility

"use client";

import React, { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface StickyBannerWithCoveringContentProps {
  banner: ReactNode;
  children: ReactNode;
}

export function StickyBannerWithCoveringContent({
  banner,
  children,
}: StickyBannerWithCoveringContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.05 });

  return (
    <div className="relative w-full">
      {/* STICKY BANNER */}
      <div className="relative w-full z-10 sticky top-0">
        {banner}
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative w-full z-20 bg-white">
        
        {/* Small spacer (reduced to 15vh for testing) */}
        <div className="h-[15vh] bg-transparent" />

        {/* ANIMATED CONTENT - DEBUG VERSION */}
        <motion.div
          ref={contentRef}
          className="relative w-full bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0,
          }}
          style={{
            // Debug: Make sure it's visible
            minHeight: "100vh",
          }}
        >
          {/* CONTENT SECTIONS */}
          <div className="bg-white">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default StickyBannerWithCoveringContent;