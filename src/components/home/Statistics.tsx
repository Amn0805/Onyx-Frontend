// src/components/home/Statistics.tsx
//
// Stats section with animated numbers. Uses CountUp for number animation.
// Server component — displays only the statistics.

import React from "react";
import CountUp from "../shared/CountUp";

const stats = [
  { target: 1100, suffix: "+", label: "Successful Projects" },
  { target: 225, suffix: "+", label: "Happy Clients" },
  { target: 93, suffix: "%", label: "Repeat & Preferred" },
  { target: 9, suffix: "+ Years", label: "Practice" },
];

const Statistics = async () => {
  return (
    <section className="pt-3 pb-18 md:pt-3 md:pb-28 lg:pt-4 lg:pb-35 3xl:pt-[2.2vw] 3xl:pb-[7.8vw]">
      {/* Statistics grid */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 3xl:gap-[5vw] px-6 md:px-0">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <h3 className="heading text-[#114046] mb-2 3xl:mb-4">
              <CountUp target={stat.target} />
              {stat.suffix}
            </h3>
            <p className="text-small text-[#7D7D7D]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;