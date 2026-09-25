// src/components/shared/FooterCTA.tsx
//
// Full-bleed band that sits directly above LowerFooter. Server component.
// Uses standardized typography and button styles.

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
      <div aria-hidden="true" className="absolute inset-0 bg-black/70" />

      {/* Fades the lower edge into LowerFooter's black background so the two
          sections read as one. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black"
      />

      <div className="relative z-10 text-center text-white px-5 md:px-12 3xl:px-24">
        <p className="text-x-small tracking-[0.25em] uppercase text-white/70">
          Now accepting · 05 projects for 2027
        </p>

        {/* Two spans with a gap rather than a <br />, matching how every other
            heading on the site breaks its lines. */}
        <h2 className="heading flex flex-col items-center gap-2 md:gap-4 3xl:gap-8 mt-5 3xl:mt-10">
          <span>Have a project, a brief,</span>
          <span>or a quiet ambition?</span>
        </h2>

        <div className="mt-8 md:mt-12 3xl:mt-[3vw]">
          <Link href="/studio/#scheduleCall">
            <button className="btn-pill bg-white text-[#114046] border border-white hover:bg-transparent hover:text-white">
              Book a Call
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}