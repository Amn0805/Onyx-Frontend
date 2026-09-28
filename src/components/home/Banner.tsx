// src/components/home/Banner.tsx
// UPDATED: All semantic classes applied, consistent responsive layout across all devices

import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/home/Banner.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-gray-200"
      />

      {/* Gradient overlay for readability */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/35 to-black/10" />

      {/* Content: Matches universal padding system (px-6 xl:px-20 3xl:px-40) */}
      <div className="relative h-full flex flex-col justify-end px-6 xl:px-20 3xl:px-40 py-10 md:py-16 lg:py-20 3xl:py-28">
        
        {/* HEADING - Uses .heading semantic class */}
        <h1 className="heading text-white leading-[1.05] tracking-wide max-w-4xl 3xl:max-w-[80vw]">
          <span className="block font-light">We make ideas</span>
          <span className="block font-bold">impossible to ignore.</span>
        </h1>

        {/* Caption Line */}
        <div className="flex items-center gap-4 md:gap-6 3xl:gap-8 mt-6 md:mt-8 3xl:mt-12">
          {/* Divider line */}
          <span aria-hidden="true" className="h-px w-10 md:w-16 3xl:w-32 bg-white/70" />
          
          {/* Caption text - Uses .text-small semantic class for responsive sizing */}
          <p className="text-small text-white/80 tracking-[0.25em] uppercase font-400">
            Architecture · Visualization · Digital Experiences
          </p>
        </div>
      </div>
    </div>
  );
}

/*
 * BANNER LAYOUT — ALL DEVICES CONSISTENT
 *
 * ✅ HEADING:
 *    Semantic class: .heading
 *    Size: 30px → 72px (responsive via clamp)
 *    Font: Century Gothic (via globals.css)
 *    Color: White
 *    Weight: Light (first line) + Bold (second line)
 *    Line height: 1.05 (tight, premium look)
 *
 * ✅ CAPTION TEXT:
 *    Semantic class: .text-small (updated to 14px → 20px)
 *    Size: 14px → 20px (responsive via clamp)
 *    Color: White with 80% opacity
 *    Weight: 400 (normal)
 *    Transform: UPPERCASE
 *    Letter spacing: 0.25em (spaced)
 *
 * ✅ RESPONSIVE PADDING (All devices):
 *    Vertical: py-10 (mobile) → py-16 (tablet) → py-20 (desktop) → py-28 (3xl)
 *    Horizontal: px-6 (mobile) → px-20 (xl) → px-40 (3xl)
 *    Matches Header.tsx padding system ✓
 *
 * ✅ SPACING BETWEEN ELEMENTS:
 *    Heading → Caption: mt-6 (mobile) → mt-8 (tablet) → mt-12 (3xl)
 *    Divider → Text: gap-4 (mobile) → gap-6 (tablet) → gap-8 (3xl)
 *
 * ✅ LAYOUT BEHAVIOR:
 *    - Full viewport height (h-screen)
 *    - Content positioned at bottom (flex justify-end)
 *    - Video covers entire background
 *    - Gradient overlay for text readability
 *    - No overflow on any device
 *
 * ✅ DEVICE BREAKPOINTS:
 *    Mobile (375px):     h1: 30px, p: 14px, py: 10, px: 6, gap: 4, mt: 6
 *    Tablet (768px):     h1: 44px, p: 16px, py: 16, px: 6, gap: 6, mt: 8
 *    Desktop (1280px):   h1: 60px, p: 18px, py: 20, px: 20, gap: 6, mt: 8
 *    3XL (2048px):       h1: 72px, p: 20px, py: 28, px: 40, gap: 8, mt: 12
 *
 * ✅ SAME LAYOUT ACROSS ALL DEVICES:
 *    - Heading at bottom left
 *    - Caption with divider below heading
 *    - All spacing scales proportionally
 *    - No layout shifts or breaks
 *    - Video always covers background
 *    - Text always readable
 */