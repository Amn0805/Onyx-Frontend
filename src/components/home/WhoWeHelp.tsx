
// src/components/home/WhoWeHelp.tsx
//
// Four audience cards, each with an image, a badge icon and an outcome line.
// Server component — no state.
//
// Every spacing, type and icon value carries a 3xl variant at roughly double
// its desktop value, so a 4K screen shows the same proportions at twice the
// size rather than large type in small boxes.

import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/constants";
import {
  ArrowRight,
  Building2,
  Compass,
  GraduationCap,
  Home,
  Sofa,
} from "lucide-react";

interface Audience {
  title: string;
  body: string;
  outcome: string;
  href: string;
  image: string;
  /** Badge, top-right of the image. */
  Badge: typeof Building2;
  tint: string;
}

const audiences: Audience[] = [
  {
    title: "Developers & construction",
    body: "For real estate developers and construction companies launching off-plan.",
    outcome: "Visuals that sell units",
    href: "/who-we-help/developers",
    image: "/home/who we help/developers.webp",
    Badge: Building2,
    tint: "#114046",
  },
  {
    title: "Architects & landscape",
    body: "For architects and landscape architects pitching designs, approvals and competitions.",
    outcome: "Images that win projects",
    href: "/who-we-help/architects",
    image: "/home/who we help/architects.webp",
    Badge: Compass,
    tint: "#2f5d3a",
  },
  {
    title: "Interior designers",
    body: "For interior designers presenting concepts, materials and finishes.",
    outcome: "Faster client approvals",
    href: "/who-we-help/interior-designers",
    image: "/home/who we help/interior.webp",
    Badge: Sofa,
    tint: "#7a5230",
  },
  {
    title: "Homeowners",
    body: "For homeowners planning a new build, extension or renovation.",
    outcome: "Decide with confidence",
    href: "/who-we-help/homeowners",
    image: "/home/who we help/homeowner.webp",
    Badge: Home,
    tint: "#2b4a7a",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="px-6 md:px-16 lg:px-20 3xl:px-40 pt-0 pb-16 md:pb-24 3xl:pb-48">
      <div className="flex flex-wrap items-baseline justify-between gap-4 3xl:gap-8">
        <h2 className="sub-heading">
          What are you <span className="heading-bold text-[#4a5f66]">working</span>{" "}
          <span >on?</span>
        </h2>

        <Link
          href="/who-we-help/developers"
          className="group text-small inline-flex items-center gap-2 3xl:gap-4 underline underline-offset-4 hover:text-[#114046] transition-colors whitespace-nowrap"
        >
          See how we help
          <ArrowRight className="w-4 h-4 3xl:w-8 3xl:h-8 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="mt-8 md:mt-12 3xl:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 3xl:gap-8">
        {audiences.map(({ Badge, ...audience }) => (
          <Link
            key={audience.href}
            href={audience.href}
       className="group bg-white/60 border border-black/10 rounded-2xl 3xl:rounded-[2rem] overflow-hidden flex flex-col hover:border-black/25 transition-colors"
          >
             <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#bac3c833]">
              <Image
                src={audience.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />

              <span
                className="absolute top-3 right-3 3xl:top-6 3xl:right-6 w-10 h-10 3xl:w-20 3xl:h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: audience.tint }}
              >
                <Badge className="w-5 h-5 3xl:w-10 3xl:h-10 text-white" />
              </span>
            </div>

                <div className="p-5 3xl:p-10 flex flex-col flex-1">
              <h3 className="text-small !font-bold group-hover:text-[#114046] transition-colors">
                {audience.title}
              </h3>

              <p className="text-x-small text-[#7D7D7D] mt-3 3xl:mt-6">
                {audience.body}
              </p>

              {/* mt-auto pins the outcome to the bottom, so all four align
                  across the row despite different body lengths. */}
              <div className="flex items-center gap-3 3xl:gap-6 mt-auto pt-6 3xl:pt-12">
                <p
                  className="text-small !font-medium"
                  style={{ color: audience.tint }}
                >
                  {audience.outcome}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-small text-[#7D7D7D] mt-6 3xl:mt-12 flex flex-wrap items-center gap-3 3xl:gap-6">
        <GraduationCap className="w-6 h-6 3xl:w-12 3xl:h-12 text-[#7D7D7D] shrink-0" />
        Architecture or interior design student?
        <Link
          href="/who-we-help/students"
          className="group text-black text-small-bold inline-flex items-center gap-2 3xl:gap-4 underline underline-offset-4 hover:text-[#114046] transition-colors"
        >
          See student packages
          <ArrowRight className="w-4 h-4 3xl:w-8 3xl:h-8 group-hover:translate-x-1 transition-transform" />
        </Link>
      </p>
    </section>
  );
}