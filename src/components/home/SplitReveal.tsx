"use client";
// src/components/home/SplitReveal.tsx
//
// Drag-to-compare two renders of the same view. No library — pointer events
// and a clip-path, so it works with mouse, touch and keyboard.

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { blurDataURL } from "@/constants";

const BEFORE_IMAGE = "/home/interior-visualization.svg";
const AFTER_IMAGE = "/home/exterior-visualization.svg";

const points = ["Quote within 24 hours", "Revisions included", "NDA on request"];

export default function SplitReveal() {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);

  const moveTo = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const { left, width } = frame.getBoundingClientRect();
    const next = ((clientX - left) / width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  // Pointer events cover mouse, touch and pen with one handler. Capture keeps
  // the drag alive when the cursor leaves the frame.
  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) moveTo(e.clientX);
  };

  return (
            <section className="px-6 md:px-16 lg:px-20 3xl:px-32 py-16 md:py-24 lg:py-28 3xl:py-48">
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
              <li key={point} className="text-x-small text-[#7D7D7D] whitespace-nowrap">
                <span aria-hidden="true" className="text-[#114046] mr-2">✓</span>
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
            className="relative w-full aspect-[4/3] overflow-hidden bg-[#bac3c833] cursor-ew-resize select-none touch-none"
          >
            <Image
              src={AFTER_IMAGE}
              alt="Final render"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />

            {/* Clipped to the handle, so the two images stay perfectly aligned
                rather than one being resized. */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={BEFORE_IMAGE}
                alt="Clay model"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>

            <span className="absolute bottom-4 left-4 3xl:bottom-10 3xl:left-10 bg-black/70 text-white text-x-small px-3 py-1 3xl:px-6 3xl:py-3 rounded-full">
              Clay model
            </span>
            <span className="absolute bottom-4 right-4 3xl:bottom-10 3xl:right-10 bg-black/70 text-white text-x-small px-3 py-1 3xl:px-6 3xl:py-3 rounded-full">
              Final render
            </span>

            {/* Divider + handle */}
            <div
              className="absolute inset-y-0 w-px bg-white pointer-events-none"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 3xl:w-24 3xl:h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-[#114046] text-lg 3xl:text-3xl">
                ⇄
              </div>
            </div>

            {/* Keyboard access — the drag alone would leave this unusable
                without a pointer. */}
            <input
              type="range"
              min={0}
              max={100}
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              aria-label="Reveal the final render"
              className="sr-only"
            />
          </div>

          <p className="text-x-small text-[#7D7D7D] mt-4 3xl:mt-8">
            Drag to see how a model becomes a selling image.
          </p>
        </div>
      </div>
    </section>
  );
}