"use client";

import Image from "next/image";
import { useState } from "react";
import { Star } from "@/icons";
import { blurDataURL } from "@/constants";

export interface TestimonialCard {
  name: string;
  designation: string;
  review: string;
  imgUrl: string;
  logoUrl: string;
}

const VISIBLE = 5;

/** Splits reviews into pages of five; the last page may be shorter. */
function paginate<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

export default function TestimonialAccordion({
  items,
}: {
  items: TestimonialCard[];
}) {
  const [page, setPage] = useState(0);
  // Kept per page so returning to a page restores what was open there, and so
  // nothing collapses mid-slide.
  const [activeByPage, setActiveByPage] = useState<Record<number, number>>({});

  if (!items.length) return null;

  const pages = paginate(items, VISIBLE);
  const canPage = pages.length > 1;

  return (
    <div className="relative">
      {/* Viewport clips the track; the track holds every page side by side and
          slides horizontally. */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((pageItems, pageIdx) => {
            const active = activeByPage[pageIdx] ?? 0;

            return (
              <div
                key={pageIdx}
                aria-hidden={pageIdx !== page}
                className="w-full shrink-0 flex flex-col lg:flex-row gap-2 3xl:gap-4 h-[600px] lg:h-[70vh] 3xl:h-[900px]"
              >
                {pageItems.map((item, i) => {
                  const isActive = i === active;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      tabIndex={pageIdx === page ? 0 : -1}
                      onClick={() =>
                        setActiveByPage((prev) => ({ ...prev, [pageIdx]: i }))
                      }
                      aria-label={`Read ${item.name}'s review`}
                      aria-expanded={isActive}
                      className={`relative overflow-hidden text-left transition-all duration-700 ease-in-out ${
                        isActive ? "grow-[5]" : "grow hover:grow-[1.4]"
                      }`}
                      style={{ flexBasis: 0 }}
                    >
                      <Image
                        src={item.imgUrl}
                        alt={item.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        className={`object-cover object-center transition-all duration-700 ${
                          isActive ? "grayscale-0" : "grayscale"
                        }`}
                      />

                      {/* Darkens the lower half so the quote stays readable. */}
                      <div
                        aria-hidden="true"
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          isActive
                            ? "bg-gradient-to-t from-black/85 via-black/40 to-black/50"
                            : "bg-black/40"
                        }`}
                      />

                      {/* Pinned to the panel corner, outside the padded column
                          below. w-full + h-auto lets the logo fill the box width
                          and derive its own height — object-contain would fit it
                          inside instead, which caps the size and lets it drift
                          vertically. Adjust the w-* values to resize. */}
                                                                                  <div
                        className={`absolute top-4 right-4 3xl:top-10 3xl:right-10 w-40 md:w-56 3xl:w-[32rem] aspect-[3/1] transition-opacity duration-500 ${
                          isActive ? "opacity-100 delay-200" : "opacity-0"
                        }`}
                      >
                        <Image
                          src={item.logoUrl}
                          alt=""
                          fill
                          sizes="512px"
                          className="object-contain object-right-top brightness-0 invert"
                        />
                      </div>

                      <div
                        className={`absolute inset-0 flex flex-col justify-between p-5 3xl:p-12 text-white transition-opacity duration-500 ${
                          isActive ? "opacity-100 delay-200" : "opacity-0"
                        }`}
                      >
                        {/* Right padding keeps the name clear of the logo. */}
                        <div className="pr-44 md:pr-60 3xl:pr-[34rem]">
                          <h3 className="text-x-small uppercase tracking-wider">
                            {item.name}
                          </h3>
                          <p className="text-x-small text-white/60 mt-1 3xl:mt-3">
                            {item.designation}
                          </p>
                        </div>

                        <div>
                          <div className="flex gap-1 mb-3 3xl:mb-6">
                            {Array.from({ length: 5 }, (_, k) => (
                              <Star key={k} size={16} />
                            ))}
                          </div>

                          <div className="border-t border-white/30 pt-4 3xl:pt-8">
                            {/* Reviews run to 500 chars, so this scrolls rather
                                than overflowing the panel. */}
                            <p className="text-x-small max-h-32 3xl:max-h-64 overflow-y-auto pr-2 leading-relaxed">
                              &ldquo;{item.review}&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {canPage && (
        <div className="flex items-center justify-center gap-4 mt-6 3xl:mt-12">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous reviews"
            className="w-10 h-10 3xl:w-20 3xl:h-20 rounded-full border border-[#114046] text-[#114046] hover:bg-[#114046] hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#114046]"
          >
            &lsaquo;
          </button>

          <div className="flex gap-2 3xl:gap-4">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                aria-current={i === page}
                className={`h-[2px] 3xl:h-1 transition-all duration-300 ${
                  i === page
                    ? "w-10 3xl:w-20 bg-[#114046]"
                    : "w-4 3xl:w-8 bg-[#7D7D7D]/40 hover:bg-[#7D7D7D]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
            disabled={page === pages.length - 1}
            aria-label="More reviews"
            className="w-10 h-10 3xl:w-20 3xl:h-20 rounded-full border border-[#114046] text-[#114046] hover:bg-[#114046] hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#114046]"
          >
            &rsaquo;
          </button>
        </div>
      )}
    </div>
  );
}