import React from "react";
import CountUp from "../shared/CountUp";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { getLogos } from "@/lib/sanity";

type Logo = { logo: string };

const LOGOS_PER_ROW = 5;

/** Splits the logos into fixed-size rows; the last row may be shorter. */
function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
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
  const rows = chunk(logos, LOGOS_PER_ROW);

  return (
    <div className="py-10 xl:pt-[7%] xl:py-0 overflow-x-hidden">
      <div className="w-11/12 mx-auto">
        <h2 className="heading text-center">
          A Studio Built on Excellence - Trusted by{" "}
          <span className="text-[#114046]">{CLIENT_COUNT}</span> Clients
          Worldwide for 3D Modeling and Visualization.
        </h2>
      </div>

      {/* Logo marquee — five per row, alternating direction. Adding logos in
          Sanity creates new rows automatically; nothing here changes. */}
                    <div className="my-10 xl:my-20 3xl:my-[5vw] flex flex-col gap-8 3xl:gap-16">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="overflow-x-hidden">
            <div
              style={{
                animationDuration: "30s",
                // Reuses the existing keyframe; every other row runs backwards
                // so the rows don't read as one block sliding together.
                animationDirection: rowIdx % 2 === 1 ? "reverse" : "normal",
              }}
              className={`flex w-fit items-center gap-10 3xl:gap-20 ${styles.slider}`}
            >
              {/* Duplicated so the -50% translate loops without a gap. */}
              {[...row, ...row].map((item, idx) => (
                <div
                  key={idx}
               className="h-[60px] md:h-[75px] 3xl:h-[140px] aspect-[3/1] relative flex items-center shrink-0"
                >
                  <Image
                    src={item.logo}
                    alt=""
                    className="object-cover"
                    sizes="(max-width: 768px) 40vw, 20vw"
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