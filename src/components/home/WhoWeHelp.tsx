// src/components/home/WhoWeHelp.tsx
//
// Four audience cards in one bordered row. Server component — no state.
// Links point at the /who-we-help/* routes, which don't exist yet.

import Link from "next/link";

interface Audience {
  title: string;
  body: string;
  outcome: string;
  href: string;
}

const audiences: Audience[] = [
  {
    title: "Developers & construction",
    body: "For real estate developers and construction companies launching off-plan.",
    outcome: "Visuals that sell units",
    href: "/who-we-help/developers",
  },
  {
    title: "Architects & landscape",
    body: "For architects and landscape architects pitching designs, approvals and competitions.",
    outcome: "Images that win projects",
    href: "/who-we-help/architects",
  },
  {
    title: "Interior designers",
    body: "For interior designers presenting concepts, materials and finishes.",
    outcome: "Faster client approvals",
    href: "/who-we-help/interior-designers",
  },
  {
    title: "Homeowners",
    body: "For homeowners planning a new build, extension or renovation.",
    outcome: "Decide with confidence",
    href: "/who-we-help/homeowners",
  },
];

export default function WhoWeHelp() {
  return (
       <section className="px-6 md:px-16 lg:px-20 3xl:px-32 pt-0 pb-16 md:pb-24 3xl:pb-40">
      <div className="flex items-baseline justify-between gap-6">
        <h2 className="sub-heading">What are you working on?</h2>
        <Link
          href="/who-we-help/developers"
          className="text-small underline underline-offset-4 hover:text-[#114046] transition-colors whitespace-nowrap"
        >
          See how we help
        </Link>
      </div>

      {/* One outer border with dividers between cards, so the row reads as a
          single block rather than four separate boxes. */}
      <div className="mt-8 md:mt-12 3xl:mt-20 border border-black/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 divide-black/10 md:[&>*:nth-child(-n+2)]:border-b md:lg:[&>*]:border-b-0 md:divide-x">
        {audiences.map((audience) => (
                       <Link
            key={audience.href}
            href={audience.href}
            className="group flex flex-col justify-between gap-10 3xl:gap-20 p-6 md:p-8 3xl:p-16 hover:bg-[#114046] transition-colors duration-300"
          >
            <div>
              <h3 className="text-small !font-bold group-hover:text-white transition-colors">
                {audience.title}
              </h3>
              <p className="text-x-small text-[#7D7D7D] group-hover:text-white/70 mt-4 3xl:mt-8 transition-colors">
                {audience.body}
              </p>
            </div>

            <p className="text-small font-medium text-[#114046] group-hover:text-white transition-colors">
              {audience.outcome}
            </p>
          </Link>
        ))}
      </div>

      <p className="text-small text-[#7D7D7D] mt-6 3xl:mt-12">
        Architecture or interior design student?{" "}
        <Link
          href="/who-we-help/students"
          className="text-black text-small-bold underline underline-offset-4 hover:text-[#114046] transition-colors"
        >
          See student packages
        </Link>
      </p>
    </section>
  );
}