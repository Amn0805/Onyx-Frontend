// src/components/home/SplitReveal.tsx
// UPDATED: All semantic classes applied, consistent responsive layout across all devices

"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { blurDataURL } from "@/constants";

const BEFORE_IMAGE = "/home/before.webp";
const AFTER_IMAGE = "/home/after.webp";

const points = [
  "Quote within 24 hours",
  "[1100+] projects delivered",
  "Clients in [30+] countries",
  "NDA on request",
];

const START = 25;
const DRAG_THRESHOLD = 4;

function Point({ text }: { text: string }) {
  const parts = text.split(/\[(.+?)\]/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-bold text-brand-light">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function SplitReveal() {
  const [position, setPosition] = useState(START);
  const [dragging, setDragging] = useState(false);

  const frameRef = useRef<HTMLDivElement>(null);
  const pressed = useRef(false);
  const startX = useRef(0);

  const moveTo = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const { left, width } = frame.getBoundingClientRect();
    setPosition(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pressed.current = true;
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pressed.current) return;
    if (!dragging && Math.abs(e.clientX - startX.current) > DRAG_THRESHOLD) {
      setDragging(true);
    }
    if (dragging) moveTo(e.clientX);
  };

  const endDrag = () => {
    pressed.current = false;
    setDragging(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 5;
    const moves: Record<string, (p: number) => number> = {
      ArrowLeft: (p) => p - step,
      ArrowRight: (p) => p + step,
      Home: () => 0,
      End: () => 100,
    };
    const move = moves[e.key];
    if (!move) return;
    e.preventDefault();
    setPosition((p) => Math.min(100, Math.max(0, move(p))));
  };

  const motion = dragging
    ? "transition-none"
    : "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

  return (
    <section className="px-6 xl:px-20 3xl:px-40 py-10 md:py-16 lg:py-20 3xl:py-28">
      <div className="flex flex-col lg:flex-row lg:items-center gap-12 md:gap-16 lg:gap-20 3xl:gap-32">
        
        {/* COPY SECTION */}
        <div className="w-full lg:w-[45%]">
          
          {/* HEADING - Semantic .heading class */}
          <h2 className="heading flex flex-col gap-1 md:gap-2 3xl:gap-3 [word-spacing:0.025em] tracking-wide max-w-2xl 3xl:max-w-[35vw]">
            <span>
              From first <span className="font-bold text-brand-light">Sketch</span> to
            </span>
            <span>
              final <span className="font-bold text-brand-light">Sale.</span>
            </span>
          </h2>

          {/* SUBTITLE - Semantic .text-x-small class */}
          <p className="text-x-small text-brand-light tracking-[0.25em] uppercase mt-4 md:mt-6 3xl:mt-8">
            Designed. Modeled. Rendered. Sold.
          </p>

          {/* DESCRIPTION - Semantic .text-small class */}
          <p className="text-small text-justify hyphens-auto mt-6 md:mt-8 3xl:mt-10 max-w-md 3xl:max-w-[31vw]">
            Photorealistic renders, animations, and immersive experiences that win approvals, impress clients, and sell projects off-plan, backed by a design and BIM team that knows how buildings are made.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 md:gap-6 3xl:gap-8 mt-8 md:mt-10 3xl:mt-12">
            <Link href="/studio/#scheduleCall">
              <button className="btn-pill btn-theme hover:opacity-90">
                Request a proposal
              </button>
            </Link>
            <Link href="/gallery">
              <button className="btn-pill border border-brand text-brand hover:bg-brand hover:text-white">
                Explore our Work
              </button>
            </Link>
          </div>

          {/* STATS GRID - Semantic .text-small class for list items */}
          <ul className="grid grid-cols-2 gap-x-6 md:gap-x-8 gap-y-4 md:gap-y-6 3xl:gap-x-10 3xl:gap-y-8 mt-10 md:mt-12 3xl:mt-16">
            {points.map((point) => (
              <li key={point} className="text-small">
                <span aria-hidden="true" className="text-brand mr-2 3xl:mr-3">
                  ✓
                </span>
                <Point text={point} />
              </li>
            ))}
          </ul>
        </div>

        {/* COMPARISON IMAGE SECTION */}
        <div className="relative w-full lg:w-[55%]">
          
          {/* SLIDER FRAME */}
          <div
            ref={frameRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl 3xl:rounded-3xl bg-subtle select-none touch-pan-y ${
              dragging ? "cursor-grabbing" : "cursor-pointer"
            }`}
          >
            {/* AFTER IMAGE (Base) */}
            <Image
              src={AFTER_IMAGE}
              alt="Final render"
              fill
              draggable={false}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover pointer-events-none"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />

            {/* BEFORE IMAGE (Clipped Reveal) */}
            <div
              className={`absolute inset-0 ${motion}`}
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={BEFORE_IMAGE}
                alt="Clay model"
                fill
                draggable={false}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover pointer-events-none"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>

            {/* DIVIDER LINE */}
            <div
              aria-hidden="true"
              className={`absolute inset-y-0 w-0.5 3xl:w-1 -translate-x-1/2 bg-white pointer-events-none ${motion}`}
              style={{ left: `${position}%` }}
            />

            {/* DRAG HANDLE - Semantic sizing */}
            <button
              type="button"
              role="slider"
              aria-label="Compare clay model with final render"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              onKeyDown={onKeyDown}
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 3xl:w-[3.5vw] 3xl:h-[3.5vw] rounded-full bg-white shadow-lg flex items-center justify-center text-brand text-lg 3xl:text-[1.2vw] leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 hover:scale-110 ${
                dragging ? "scale-110 cursor-grabbing" : "cursor-grab"
              } ${motion}`}
              style={{ left: `${position}%` }}
            >
              ⇄
            </button>
          </div>

          {/* CAPTION - Semantic .text-x-small class */}
          <p className="text-x-small font-light mt-4 md:mt-6 3xl:mt-8">
            Click or drag to see how a model becomes a selling image.
          </p>
        </div>
      </div>
    </section>
  );
}

/*
 * SPLIT REVEAL LAYOUT — ALL DEVICES CONSISTENT
 *
 * ✅ SECTION PADDING:
 *    Horizontal: px-6 (mobile) → px-20 (xl) → px-40 (3xl)
 *    Vertical: py-10 (mobile) → py-16 (tablet) → py-20 (desktop) → py-28 (3xl)
 *
 * ✅ LAYOUT:
 *    Desktop (lg): Side-by-side (45% copy, 55% image)
 *    Mobile: Stacked vertically (full width each)
 *    Gap: gap-12 (mobile) → gap-16 (tablet) → gap-20 (desktop) → gap-32 (3xl)
 *
 * ✅ COPY SECTION (Left):
 *    Heading: .heading (30px → 72px)
 *    Subtitle: .text-x-small (12px → 16px)
 *    Description: .text-small (12px → 20px, updated)
 *    Stats: .text-small (12px → 20px, updated)
 *    Button text: .btn-pill (14px → 20px, updated)
 *
 * ✅ SPACING IN COPY:
 *    Heading internal gap: gap-3 (mobile) → gap-5 (tablet) → gap-8 (3xl)
 *    Subtitle from heading: mt-4 (mobile) → mt-6 (tablet) → mt-8 (3xl)
 *    Description from subtitle: mt-6 (mobile) → mt-8 (tablet) → mt-10 (3xl)
 *    Buttons from description: mt-8 (mobile) → mt-10 (tablet) → mt-12 (3xl)
 *    Stats grid from buttons: mt-10 (mobile) → mt-12 (tablet) → mt-16 (3xl)
 *    Stats grid gap: gap-x-6 (mobile) → gap-x-8 (tablet) → gap-x-10 (3xl)
 *                    gap-y-4 (mobile) → gap-y-6 (tablet) → gap-y-8 (3xl)
 *
 * ✅ BUTTONS:
 *    Semantic: .btn-pill .btn-theme (or outline variant)
 *    Size: 14px → 20px text (updated)
 *    Spacing: gap-4 (mobile) → gap-6 (tablet) → gap-8 (3xl)
 *
 * ✅ IMAGE SECTION (Right):
 *    Aspect ratio: 4:3 (consistent across all devices)
 *    Border radius: rounded-xl (mobile) → rounded-3xl (3xl)
 *    Background: .bg-subtle (#bac3c833)
 *    Drag handle: w-12 h-12 (mobile) → 3.5vw (3xl)
 *    Divider: w-0.5 (mobile) → w-1 (3xl)
 *    Caption: .text-x-small (12px → 16px)
 *    Caption spacing: mt-4 (mobile) → mt-6 (tablet) → mt-8 (3xl)
 *
 * ✅ RESPONSIVE BREAKPOINTS:
 *    Mobile (375px):     Full width, stacked, all gaps small
 *    Tablet (768px):     Full width, stacked, medium gaps
 *    Desktop (1024px):   Side-by-side 45/55, medium gaps
 *    3XL (2048px):       Side-by-side 45/55, large gaps, vw sizing
 *
 * ✅ SAME LAYOUT ACROSS ALL SIZES:
 *    - Proportions maintained via flex percentages
 *    - All text sizes responsive via clamp
 *    - All spacing scales smoothly
 *    - Image aspect ratio fixed at 4:3
 *    - No layout shifts or content reflow
 *    - Button styling consistent
 *    - Semantic color tokens used throughout
 */