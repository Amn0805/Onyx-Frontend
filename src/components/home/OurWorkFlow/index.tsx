"use client";
// Accordion list — one row open at a time, expanding to fit its image and copy.
// Replaces the hover-to-swap-image version; the interaction is now click, so
// it works on touch devices too.

import { useState } from "react";
import Image from "next/image";
import { list } from "./StaticData";
import { blurDataURL } from "@/constants";

export default function OurWorkFlow() {
  const [active, setActive] = useState(0);

  return (
    <section className="p-5 md:p-10 3xl:p-24">
      <h2 className="heading text-center md:text-start mb-10 md:mb-16 3xl:mb-32">
        Our Work Flow
      </h2>

      <div className="border-t border-black/10">
        {list.map((item, index) => {
          const isOpen = index === active;

          return (
            <div key={item.number} className="border-b border-black/10">
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-6 md:gap-12 3xl:gap-24 py-6 md:py-8 3xl:py-16 text-left group"
              >
                <span className="text-x-small text-[#7D7D7D] shrink-0">
                  {item.number} /
                </span>

                <span
                  className={`sub-heading flex-1 transition-colors duration-300 ${
                    isOpen ? "text-[#114046]" : "group-hover:text-[#114046]"
                  }`}
                >
                  {item.title}
                </span>

                <span
                  aria-hidden="true"
                  className={`text-2xl 3xl:text-5xl text-[#114046] shrink-0 transition-transform duration-500 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* grid-rows trick: animates from 0 to auto, which max-height
                  cannot do without guessing a fixed value. */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 3xl:gap-32 pb-10 md:pb-16 3xl:pb-24 lg:pl-24 3xl:pl-48">
                    <div className="lg:w-2/5 flex flex-col justify-between gap-8">
                      <p className="text-small text-[#7D7D7D]">{item.text}</p>

                      <div className="flex flex-wrap gap-2 3xl:gap-4">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-x-small bg-[#bac3c833] text-[#114046] px-3 py-1 3xl:px-6 3xl:py-3"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                                        <div className="lg:w-3/5 flex justify-end">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        width={1600}
                        height={1200}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="w-auto h-auto max-h-[300px] md:max-h-[380px] 3xl:max-h-[700px] object-contain"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}