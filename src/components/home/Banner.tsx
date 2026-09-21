"use client";
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

      {/* Weighted toward the bottom-left, where the copy sits, so the footage
          stays bright elsewhere. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/35 to-black/10"
      />

      {/* Padding matches the rest of the site's sections, so the headline lines
          up with the content below it rather than hugging the screen edge. */}
      <div className="relative h-full flex flex-col justify-end px-6 md:px-16 lg:px-20 3xl:px-40 pb-16 md:pb-24 lg:pb-28 3xl:pb-48">
        {/* Short rule plus label, so the support line reads as a lead-in. */}
        <div className="flex items-center gap-4 3xl:gap-8">
          <span aria-hidden="true" className="h-px w-10 md:w-16 3xl:w-32 bg-white/70" />
          <p className="text-x-small md:text-small text-white/80 tracking-[0.25em] uppercase">
            Architecture · Visualization · Digital Experiences
          </p>
        </div>

        <h1 className="text-white mt-6 md:mt-8 3xl:mt-16 leading-[1.05] tracking-tight text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl 3xl:text-[11rem]">
          <span className="block font-light">We make ideas</span>
          <span className="block font-bold">impossible to ignore.</span>
        </h1>

        <div className="flex flex-wrap gap-4 3xl:gap-8 mt-8 md:mt-12 3xl:mt-24">
          <Link href="/studio/#scheduleCall">
            <button className="btn-theme btn-pill hover:bg-[#0e3035]">
              Discuss Your Project
            </button>
          </Link>
          <Link href="/gallery">
            <button className="btn-pill border border-white/70 text-white hover:bg-white hover:text-[#114046] transition-colors">
              See Our Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}