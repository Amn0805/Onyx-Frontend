// src/components/home/OurVision.tsx
//
// Full-bleed vision statement. Server component — no state, no client JS.

import Image from "next/image";
import { blurDataURL } from "@/constants";

export default function OurVision() {
  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/home/W.png"
        alt=""
        placeholder="blur"
        blurDataURL={blurDataURL}
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Darkens the photograph so the statement stays readable over any crop. */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

      {/* Still centred, then shifted up and right from that position.
          The offsets only apply from lg — on smaller screens there isn't
          room to give away. */}
      <div className="relative z-10 text-center text-white px-5 md:px-12 3xl:px-24 py-20 3xl:py-40  lg:-translate-y-12 lg:translate-x-32 3xl:-translate-y-24 3xl:translate-x-64">
        <p className="text-x-small tracking-[0.3em] uppercase text-white/70">
          Our Vision
        </p>

        <h2 className="heading mt-6 3xl:mt-12 max-w-4xl 3xl:max-w-7xl mx-auto">
          We don&apos;t just visualize spaces.
          <br />
          We bring ideas to life.
        </h2>

        <p className="text-small text-white/80 mt-8 3xl:mt-16 max-w-2xl 3xl:max-w-4xl mx-auto">
          Our vision is to transform architectural concepts into immersive
          visual experiences that help people see, understand, and feel a space
          before it exists.
        </p>

        <p className="text-small text-white/60 mt-10 3xl:mt-20">
          — OnyxRenders
        </p>
      </div>
    </section>
  );
}