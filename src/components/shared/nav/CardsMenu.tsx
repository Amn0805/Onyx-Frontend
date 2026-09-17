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
    <div className="absolute left-0 top-full w-full bg-[#F1F3F4] text-black shadow-lg border-t border-[#114046]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 3xl:gap-10 p-8 xl:p-12 3xl:p-24">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            onClick={onNavigate}
            className="border border-[#114046] hover:border-[#114046] p-6 3xl:p-12 transition-colors group"
          >
            <h3 className="text-small font-medium group-hover:text-[#114046] transition-colors">
              {card.label}
            </h3>
            <p className="text-x-small text-[#7D7D7D] mt-3 3xl:mt-6">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}