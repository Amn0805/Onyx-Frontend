// src/app/services/_components/ServiceHero.tsx
import Link from "next/link";
import type { ServiceContent } from "../_types";

export default function ServiceHero({
  hero,
  exploreHeading,
}: {
  hero: ServiceContent["hero"];
  exploreHeading: string;
}) {
  return (
    <>
      <section className="p-5 md:p-12 3xl:p-24">
        <div className="max-w-5xl 3xl:max-w-[90rem]">
          <h1 className="heading">
            {hero.headingLead}{" "}
            <span className="text-[#114046]">{hero.headingAccent}</span>
            {hero.headingTail}
          </h1>

          <p className="text-small text-[#7D7D7D] mt-6 3xl:mt-[2vw] max-w-3xl 3xl:max-w-6xl">
            {hero.body}
          </p>

          <Link href={hero.ctaHref}>
            <button className="bg-[#114046] text-white mt-10 md:mt-16 3xl:mt-[4.5vw] btn-pill btn-theme hover:bg-[#0e3035]">
              {hero.ctaLabel}
            </button>
          </Link>
        </div>
      </section>

      <section className="px-5 md:px-12 3xl:px-24 pb-6 md:pb-10 3xl:pb-16">
        <h2 className="sub-heading">{exploreHeading}</h2>
      </section>
    </>
  );
}