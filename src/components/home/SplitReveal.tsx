"use client";
// src/components/home/SplitReveal.tsx
//
// Before/after comparison. Click anywhere to glide the divider there; hold and
// drag to move it directly; or focus the handle and use the arrow keys.

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { blurDataURL } from "@/constants";

const BEFORE_IMAGE = "/home/before.webp";
const AFTER_IMAGE = "/home/after.webp";

const points = ["Quote within 24 hours", "Revisions included", "NDA on request"];

/** Where the divider starts, as a percentage from the left. */
const START = 25;

/** Pixels a held pointer must travel before it counts as a drag, not a click. */
const DRAG_THRESHOLD = 4;

export default function SplitReveal() {
  const [position, setPosition] = useState(START);
  // Only true once a held pointer has actually moved. While false, changes
  // animate; while true, the divider tracks the pointer with no lag.
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
    // Capture keeps the drag alive if the pointer leaves the frame.
    e.currentTarget.setPointerCapture(e.pointerId);
    // dragging is still false here, so this glides rather than jumps.
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

  // Applied to both moving parts so the image edge and the handle stay locked
  // together. Removed entirely while dragging.
  const motion = dragging
    ? "transition-none"
    : "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

  return (
    <section className="px-6 md:px-16 lg:px-20 3xl:px-32 py-12 md:py-20 lg:py-24 3xl:py-40">
      {/* items-start so the heading's top edge aligns with the image's, rather
          than the shorter column floating mid-height. */}
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 xl:gap-32 3xl:gap-48">
        {/* Copy */}
        <div className="w-full lg:w-[45%]">
          <h2 className="heading flex flex-col gap-3 md:gap-5 3xl:gap-10 [word-spacing:0.25em] tracking-wide">
            <span>See it Before it&apos;s</span>
            <span>Built.</span>
          </h2>

          <p className="text-small text-[#7D7D7D] mt-10 md:mt-14 3xl:mt-24 max-w-md 3xl:max-w-2xl">
            Photorealistic renders and walkthroughs that win approvals, impress
            clients and sell projects off-plan. Send your drawings today and get
            a quote within 24 hours.
          </p>

          <div className="flex flex-wrap gap-4 3xl:gap-8 mt-10 md:mt-14 3xl:mt-24">
            <Link href="/studio/#scheduleCall">
              <button className="bg-[#114046] text-white btn-pill btn-theme hover:bg-[#0e3035]">
                Get a free quote
              </button>
            </Link>
            <Link href="/gallery">
              <button className="btn-pill border border-[#114046] text-[#114046] hover:bg-[#114046] hover:text-white">
                See our work
              </button>
            </Link>
          </div>

          <ul className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-3 lg:gap-x-8 3xl:gap-x-16 mt-10 md:mt-14 3xl:mt-24">
            {points.map((point) => (
              <li
                key={point}
                className="text-x-small text-[#7D7D7D] whitespace-nowrap"
              >
                <span aria-hidden="true" className="text-[#114046] mr-2">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Comparison */}
        <div className="w-full lg:w-[55%]">
          <div
            ref={frameRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl 3xl:rounded-3xl bg-[#bac3c833] select-none touch-pan-y ${
              dragging ? "cursor-grabbing" : "cursor-pointer"
            }`}
          >
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

            {/* Clipped rather than resized, so both images stay aligned. */}
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

            <span className="absolute bottom-4 left-4 3xl:bottom-8 3xl:left-8 bg-black/70 text-white text-x-small px-3 py-1 3xl:px-6 3xl:py-3 rounded-full pointer-events-none">
              Clay model
            </span>
            <span className="absolute bottom-4 right-4 3xl:bottom-8 3xl:right-8 bg-black/70 text-white text-x-small px-3 py-1 3xl:px-6 3xl:py-3 rounded-full pointer-events-none">
              Final render
            </span>

            {/* Divider line */}
            <div
              aria-hidden="true"
              className={`absolute inset-y-0 w-0.5 3xl:w-1 -translate-x-1/2 bg-white pointer-events-none ${motion}`}
              style={{ left: `${position}%` }}
            />

            {/* Handle — a real control, so it can be focused and moved with
                the arrow keys as well as dragged. */}
            <button
              type="button"
              role="slider"
              aria-label="Compare clay model with final render"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              onKeyDown={onKeyDown}
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 3xl:w-24 3xl:h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-[#114046] text-lg 3xl:text-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#114046] focus-visible:ring-offset-2 hover:scale-110 ${
                dragging ? "scale-110 cursor-grabbing" : "cursor-grab"
              } ${motion}`}
              style={{ left: `${position}%` }}
            >
              ⇄
            </button>
          </div>

          <p className="text-x-small text-[#7D7D7D] mt-4 3xl:mt-8">
            Click or drag to see how a model becomes a selling image.
          </p>
        </div>
      </div>
    </section>
  );
}