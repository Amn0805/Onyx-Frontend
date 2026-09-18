// src/components/home/ServicesOverview.tsx
//
// Four service groups on a teal field. Reads serviceGroups from navigation.ts,
// so adding a service to the nav adds it here with no change to this file.
// Server component — no state.

import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/constants";
import { serviceGroups, services } from "@/components/shared/nav/navigation";

/** Temporary — one per group, in order. Replace with real artwork. */
const groupImages: Record<string, string> = {
  "Architectural renders": "/home/exterior-visualization.svg",
  "Plans & modeling": "/home/M2.svg",
  "Animation & tours": "/home/architecturalWalkthrough.webp",
  "Product & furniture": "/home/interior-visualization.svg",
};

export default function ServicesOverview() {
  return (
    <section className="bg-[#114046] text-white px-6 md:px-16 lg:px-20 3xl:px-32 py-16 md:py-24 3xl:py-40">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 3xl:gap-32">
        <h2 className="sub-heading lg:w-1/2 flex flex-col gap-6 md:gap-4 tracking-wide">
          <span>Every visual you need, from</span>
          <span>one studio</span>
        </h2>

        <p className="text-small text-white/70 lg:w-1/2 max-w-md 3xl:max-w-2xl pt-8 tracking-wide">
          {services.length} services in four groups. Pick one, or combine them
          into a full launch package.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 3xl:gap-10 mt-12 md:mt-16 3xl:mt-28">
        {serviceGroups.map((group) => (
                  <div
            key={group.title}
            className="bg-white/[0.04] rounded-xl 3xl:rounded-3xl overflow-hidden flex flex-col"
          >
            {/* Full-bleed within the card — no padding above or to the sides. */}
            <div className="relative w-full aspect-video overflow-hidden bg-white/10">
              <Image
                src={groupImages[group.title] ?? "/home/M2.svg"}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>

            <div className="p-6 3xl:p-12">
              <h3 className="text-small-bold">{group.title}</h3>

              <ul className="flex flex-col gap-3 3xl:gap-6 mt-5 3xl:mt-10">
                {group.services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                     className="text-small text-white/70 hover:text-white hover:underline underline-offset-4 transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-12 md:mt-16 3xl:mt-28">
        <p className="text-small text-white/70">
          Not sure which service fits your project?
        </p>
        <Link href="/studio/#scheduleCall">
          <button className="bg-white/10 text-white border border-white/30 btn-pill hover:bg-white hover:text-[#114046] transition-colors">
            Get a free recommendation
          </button>
        </Link>
      </div>
    </section>
  );
}