// src/components/shared/FooterCTA.tsx
//
// Full-bleed band that sits directly above LowerFooter. Server component.

import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/constants";

export default function FooterCTA() {
  return (
    <section className="relative w-full aspect-[21/9] min-h-[420px] flex items-center justify-center overflow-hidden">
      <Image
        src="/home/M.png"
        alt=""
        placeholder="blur"
        blurDataURL={blurDataURL}
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Keeps the heading readable over any crop of the photograph. */}
            {/* Keeps the heading readable over any crop of the photograph. */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/55" />

      {/* Fades the lower edge into LowerFooter's black background so the two
          sections read as one. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black"
      />

      <div className="relative z-10 text-center text-white px-5 md:px-12 3xl:px-24">
        <p className="text-x-small tracking-[0.3em] uppercase text-white/70">
          Now Accepting New Projects
        </p>

        <h2 className="heading mt-5 3xl:mt-10 max-w-3xl 3xl:max-w-6xl mx-auto">
          Have a project, a brief,
          <br />
          or a quiet ambition?
        </h2>

        <Link href="/studio/#scheduleCall">
          <button className="bg-white text-[#114046] hover:bg-transparent hover:text-white border border-white btn-pill mt-8 md:mt-12 3xl:mt-[3vw]">
            Book a Call
          </button>
        </Link>
      </div>
    </section>
  );
}