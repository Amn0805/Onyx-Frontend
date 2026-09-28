"use client";
import Link from "next/link";
import React from "react";
import type { MenuCard } from "./navigation";

/**
 * Bordered card grid used by Who we help, Work and Company. Same shape for all
 * three — only the cards differ. Updated with Phase 14 semantic classes.
 */
export default function CardsMenu({
  cards,
  onNavigate,
}: {
  cards: MenuCard[];
  onNavigate: () => void;
}) {
  return (
    <div className="absolute left-0 top-full w-full bg-white text-black shadow-lg border-t border-brand">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 3xl:gap-8 p-6 md:p-8 3xl:p-12">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            onClick={onNavigate}
            className="border-2 border-brand hover:bg-subtle transition-colors p-5 md:p-6 3xl:p-10 group"
          >
            <h3 className="tile-heading text-sm md:text-base 3xl:text-lg group-hover:text-brand transition-colors">
              {card.label}
            </h3>
            <p className="tile-text text-secondary text-xs md:text-sm 3xl:text-base mt-2 md:mt-3 3xl:mt-4">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

/*
 * PHASE 14 UPDATES:
 *
 * ✅ CHANGED: .body-small-bold → .tile-heading (font-weight: 600, letter-spacing: -0.5px)
 * ✅ CHANGED: .body-small + .text-secondary → .tile-text .text-secondary (font-weight: 400)
 * ✅ CHANGED: Grid gap reduced: gap-6 md:gap-8 3xl:gap-10 → gap-4 md:gap-6 3xl:gap-8 (compact)
 * ✅ CHANGED: Card padding reduced: p-6 md:p-8 3xl:p-12 → p-5 md:p-6 3xl:p-10 (compact)
 * ✅ CHANGED: Text spacing reduced: mt-3 md:mt-4 3xl:mt-6 → mt-2 md:mt-3 3xl:mt-4 (tight)
 * ✅ KEPT: Border styling, hover effects, layout grid
 * ✅ KEPT: Century Gothic via globals.css
 *
 * VISUAL IMPACT:
 * - Card titles are now bold (600 weight)
 * - Text is consistent with Phase 14 semantic system
 * - Spacing is more compact throughout
 * - Hover effects smooth and responsive
 *
 * SEMANTIC CLASSES:
 * - .tile-heading → Bold card titles (font-weight: 600)
 * - .tile-text → Card descriptions (font-weight: 400)
 * - .text-secondary → Secondary text color (#7D7D7D)
 * - .border-brand → Brand color borders (#114046)
 * - .hover:bg-subtle → Subtle background on hover (#bac3c833)
 */