import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "../shared/CountUp";
import styles from "./home.module.css";
import { getLogos } from "@/lib/sanity";
import { HEADING, BODY } from "@/components/shared/typography";
import { PILL } from "@/components/shared/buttonStyles";

type Logo = { logo: string };

const ROW_COUNT = 3;

/** Total clients, shown in the section heading. */
const CLIENT_COUNT = 225;

const stats = [
  { target: 1100, suffix: "+", label: "Successful Projects " },
  { target: 225, suffix: "+", label: "Happy Clients" },
  { target: 93, suffix: "%", label: "Repeat & Preferred" },
  { target: 9, suffix: "+ Years", label: "Practice"},
];

/**
 * Distributes the logos across a fixed number of rows, spreading any remainder
 * one per row. With 35 logos that gives 12 / 12 / 11 rather than 12 / 12 / 12
 * and a stranded row of one, which would loop visibly.
 */
function distribute<T>(items: T[], rowCount: number): T[][] {
  const rows: T[][] = [];
  const base = Math.floor(items.length / rowCount);
  const remainder = items.length % rowCount;

  let cursor = 0;
  for (let i = 0; i < rowCount; i++) {
    const size = base + (i < remainder ? 1 : 0);
    rows.push(items.slice(cursor, cursor + size));
    cursor += size;
  }
  return rows.filter((row) => row.length > 0);
}

const Statistics = async () => {
  const logos: Logo[] = await getLogos();
  const rows = distribute(logos, ROW_COUNT);

  return (
    <div className="py-10 xl:pt-[8%] xl:pb-0 overflow-x-hidden">
      <div className="w-9/12 mx-auto">
        <h2 className={`${HEADING} text-center`}>
          Trusted by{" "}
          <span className="font-bold text-[#114046]">{CLIENT_COUNT}+</span>{" "}
          clients, developers, and project teams
        </h2>
      </div>

      {/* Three rows, alternating direction. Each row is tripled so the
          -33.333% translate resets to an identical position, and the strip is
          wide enough that no logo is ever visible twice at once.

          From 3xl up, logo size and gaps are in vw so the strip keeps its
          desktop proportions at 4K rather than shrinking relative to the page. */}
      <div className="my-10 xl:my-20 3xl:my-[5vw] flex flex-col gap-3 3xl:gap-[0.85vw]">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="overflow-x-hidden">
            <div
              style={{
                animationDuration: "80s",
                animationDirection: rowIdx % 2 === 1 ? "reverse" : "normal",
              }}
              className={`flex w-fit items-center gap-6 3xl:gap-[1.7vw] ${styles.slider}`}
            >
              {[...row, ...row, ...row].map((item, idx) => (
                <div
                  key={idx}
                  className="relative h-[90px] md:h-[110px] 3xl:h-[7.6vw] aspect-square shrink-0"
                >
                  <Image
                    src={item.logo}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 90px, (max-width: 2048px) 110px, 8vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-20 lg:gap-32 3xl:gap-[9vw] 3xl:mb-20">
        {stats.map((stat) => (
          <div key={stat.label} className="text-[#114046] space-y-1 md:space-y-2">
            <h3 className={`${HEADING} text-center`}>
              <CountUp target={stat.target} />
              {stat.suffix}
            </h3>
            <p className={`${BODY} text-center text-[#7D7D7D]`}>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center py-5 sm:py-16 xl:py-20">
        <Link href="/studio/#scheduleCall">
          <button className={`${PILL} bg-[#114046] text-white border border-[#114046] hover:bg-transparent hover:text-black`}>
            Let&apos;s Interact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Statistics;