"use client";
import Link from "next/link";
import React from "react";
import type { MenuCard } from "./navigation";

/**
 * Bordered card grid used by Who we help, Work and Company. Same shape for all
 * three — only the cards differ.
 */
export default function CardsMenu({
  cards,
  onNavigate,
}: {
  cards: MenuCard[];
  onNavigate: () => void;
}) {
  return (
    <div className="absolute left-0 top-full w-full bg-white text-black shadow-lg border-t border-[#114046]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 3xl:gap-10 p-6 md:p-8 3xl:p-12">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            onClick={onNavigate}
            className="border border-[#114046] hover:border-[#114046] p-6 md:p-8 3xl:p-12 transition-colors group"
          >
            <h3 className="text-sm md:text-base lg:text-lg 3xl:text-xl font-bold group-hover:text-[#114046] transition-colors">
              {card.label}
            </h3>
            <p className="text-xs md:text-sm lg:text-base 3xl:text-lg text-[#7D7D7D] mt-3 md:mt-4 3xl:mt-6 font-light">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}