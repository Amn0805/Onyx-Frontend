import React from "react";
import CountUp from "../shared/CountUp";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { getLogos } from "@/lib/sanity";

type Logo = { logo: string };

const ROW_COUNT = 3;

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

const stats = [
  { target: 1100, suffix: "+", label: "Projects Completed" },
  { target: 156, suffix: "", label: "Clients Won" },
  { target: 98, suffix: "%", label: "Repeat & Preferred" },
  { target: 9, suffix: "+ Years", label: "Practice" },
];

/** Also shown in the section heading, so it lives in one place. */
const CLIENT_COUNT = 156;

const Statistics = async () => {
  const logos: Logo[] = await getLogos();
  const rows = distribute(logos, ROW_COUNT);

  return (
    <div className="py-10 xl:pt-[7%] xl:py-0 overflow-x-hidden">
      <div className="w-11/12 mx-auto">
        <h2 className="heading text-center">
          A Studio Built on Excellence - Trusted by{" "}
          <span className="text-[#114046]">{CLIENT_COUNT}</span> Clients
          Worldwide for 3D Modeling and Visualization.
        </h2>
      </div>

      {/* Three rows, alternating direction. Each row is tripled so the
          -33.333% translate resets to an identical position. At ~12 cards per
          row the strip is far wider than any viewport, so the clone stays
          off-screen and no logo is ever visible twice at once. */}
      <div className="my-10 xl:my-20 3xl:my-[5vw] flex flex-col gap-3 3xl:gap-12">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="overflow-x-hidden">
            <div
              style={{
                animationDuration: "80s",
                animationDirection: rowIdx % 2 === 1 ? "reverse" : "normal",
              }}
              className={`flex w-fit items-center gap-6 3xl:gap-12 ${styles.slider}`}
            >
              {[...row, ...row, ...row].map((item, idx) => (
                <div
                  key={idx}
                  className="h-[90px] md:h-[110px] 3xl:h-[190px] aspect-square relative flex items-center shrink-0"
                >
                  <Image
                    src={item.logo}
                    alt=""
                    className="object-contain"
                    sizes="(max-width: 768px) 30vw, 12vw"
                    priority={rowIdx === 0}
                    fill
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="leading-none flex flex-wrap 3xl:mb-20 justify-center gap-10 md:gap-20 lg:gap-32 3xl:gap-64">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-[#114046] justify-center items-center space-y-1 md:space-y-2"
          >
            <h3 className="heading text-center">
              <CountUp target={stat.target} />
              {stat.suffix}
            </h3>
            <p className="para text-center text-[#7D7D7D]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center py-5 sm:py-16 xl:py-20">
        <Link href="/studio/#scheduleCall">
          <button className="btn-pill btn-theme hover:bg-[#ff565605] hover:text-black">
            Let&apos;s Interact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Statistics;