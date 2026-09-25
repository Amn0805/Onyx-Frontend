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
        <h1 className="heading text-white leading-[1.05] tracking-tight">
          <span className="block font-light">We make ideas</span>
          <span className="block font-bold">impossible to ignore.</span>
        </h1>

        {/* Short rule plus label, reading as a caption to the heading above. */}
        <div className="flex items-center gap-4 3xl:gap-8 mt-6 md:mt-8 3xl:mt-16">
          <span
            aria-hidden="true"
            className="h-px w-10 md:w-16 3xl:w-32 bg-white/70"
          />
          <p className="text-x-small md:text-small text-white/80 tracking-[0.25em] uppercase">
            Architecture · Visualization · Digital Experiences
          </p>
        </div>
      </div>
    </div>
  );
}