// src/components/home/Banner.tsx
// OPTIMIZED: Consistent padding, responsive sizing

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

      {/* OPTIMIZED PADDING: Matches universal standard (px-6 xl:px-20 3xl:px-40) */}
      <div className="relative h-full flex flex-col justify-end px-6 xl:px-20 3xl:px-40 py-10 md:py-16 lg:py-20 3xl:py-28">
        {/* HEADING */}
        <h1 className="heading text-white leading-[1.05] tracking-wide max-w-4xl 3xl:max-w-[80vw]">
          <span className="block font-light">We make ideas</span>
          <span className="block font-bold">impossible to ignore.</span>
        </h1>

        {/* Caption line */}
        <div className="flex items-center gap-4 md:gap-6 3xl:gap-8 mt-6 md:mt-8 3xl:mt-12">
          <span aria-hidden="true" className="h-px w-10 md:w-16 3xl:w-32 bg-white/70" />
          <p className="text-x-small md:text-small text-white/80 tracking-[0.25em] uppercase">
            Architecture · Visualization · Digital Experiences
          </p>
        </div>
      </div>
    </div>
  );
}