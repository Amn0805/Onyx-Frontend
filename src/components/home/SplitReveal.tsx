"use client";
// src/components/home/SplitReveal.tsx
//
// Before/after comparison. Click anywhere to glide the divider there; hold and
// drag to move it directly; or focus the handle and use the arrow keys.
//
// SIZING: below 3xl (2048px) every value is fixed and unchanged. From 3xl up
// every value is in vw, set to the same fraction of screen width it occupies on
// a 1440px desktop — so large screens reproduce the desktop layout, scaled,
// rather than 2048-sized content stranded on a wider canvas.
//
// Type classes (.heading, .text-small, .btn-pill) are written out because they
// sit outside @layer in globals.css and override any 3xl utility beside them.

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

/** Where the divider starts, as a percentage from the left. */
const START = 25;

/** Pixels a held pointer must travel before it counts as a drag, not a click. */
const DRAG_THRESHOLD = 4;

/** Identical to .btn-pill below 3xl; desktop proportions in vw above. */
const PILL =
  "rounded-full shadow-2xl transition-colors px-8 py-2 lg:px-10 lg:py-4 lg:text-sm min-w-[210px] 3xl:px-[2.8vw] 3xl:py-[1.1vw] 3xl:text-[0.97vw] 3xl:min-w-[14.5vw]";

/** Emphasises any text wrapped in [square brackets]. */
function Point({ text }: { text: string }) {
  const parts = text.split(/\[(.+?)\]/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-bold text-[#114046]">
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

  const motion = dragging
    ? "transition-none"
    : "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

  return (
    <section className="px-6 md:px-16 lg:px-20 3xl:px-[5.5vw] py-12 md:py-20 lg:py-24 3xl:py-[4.5vw]">
      <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24 xl:gap-32 3xl:gap-[6vw]">
        {/* Copy */}
        <div className="w-full lg:w-[45%]">
          <h2 className="text-3xl md:text-5xl 3xl:text-[3.4vw] flex flex-col gap-3 md:gap-5 3xl:gap-[1vw] [word-spacing:0.025em] tracking-wide">
            <span>
              From first{" "}
              <span className="font-bold text-[#4a5f66]">Sketch</span> to
            </span>
            <span>
              final <span className="font-bold text-[#4a5f66]">Sale.</span>
            </span>
          </h2>

          {/* Tight to the heading, so it reads as part of the same statement. */}
                   <p className="text-x-small text-[#4a5f66] tracking-[0.25em] uppercase mt-4 md:mt-5 3xl:mt-[1.4vw]">
            Designed. Modeled. Rendered. Sold.
          </p>

           <p className="text-xs lg:text-base xl:text-lg 3xl:text-[1.1vw] 3xl:leading-[1.75] font-light text-[#4A4A4A] text-justify hyphens-auto mt-6 md:mt-8 3xl:mt-[2.2vw] max-w-md 3xl:max-w-[31vw]">
            Photorealistic renders, animations, and immersive experiences that
            win approvals, impress clients, and sell projects off-plan, backed
            by a design and BIM team that knows how buildings are made.
          </p>

          <div className="flex flex-wrap gap-4 3xl:gap-[1.1vw] mt-8 md:mt-12 3xl:mt-[3.3vw]">
            <Link href="/studio/#scheduleCall">
              <button className={`${PILL} bg-[#114046] text-white border border-[#114046] hover:bg-[#0e3035]`}>
                Request a proposal
              </button>
            </Link>
            <Link href="/gallery">
              <button className={`${PILL} border border-[#114046] text-[#114046] hover:bg-[#114046] hover:text-white`}>
                Explore our Work
              </button>
            </Link>
          </div>

          {/* 1.1vw sits just under the paragraph's 1.25vw, restoring the
              hierarchy that the fixed 3xl sizes had inverted. */}
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 lg:gap-x-8 3xl:gap-x-[2.2vw] 3xl:gap-y-[0.8vw] mt-10 md:mt-14 3xl:mt-[3.3vw]">
            {points.map((point) => (
              <li
                key={point}
                className="text-xs lg:text-base xl:text-lg 3xl:text-[1.1vw] font-light text-[#4A4A4A]"
              >
                <span aria-hidden="true" className="text-[#114046] mr-2 3xl:mr-[0.55vw]">
                  ✓
                </span>
                <Point text={point} />
              </li>
            ))}
          </ul>
        </div>

        {/* Comparison. relative so the caption can leave the flow at 3xl,
            letting the copy centre on the image rather than image+caption. */}
        <div className="relative w-full lg:w-[55%]">
          <div
            ref={frameRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl 3xl:rounded-[0.85vw] bg-[#bac3c833] select-none touch-pan-y ${
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

             <span className="absolute bottom-4 left-4 3xl:bottom-[1.1vw] 3xl:left-[1.1vw] bg-[#114046]/85 text-white text-xs xl:text-sm 3xl:text-[0.8vw] font-light px-3 py-1 3xl:px-[0.7vw] 3xl:py-[0.25vw] rounded-full pointer-events-none">
              Clay model
            </span>
            <span className="absolute bottom-4 right-4 3xl:bottom-[1.1vw] 3xl:right-[1.1vw] bg-[#114046]/85 text-white text-xs xl:text-sm 3xl:text-[0.8vw] font-light px-3 py-1 3xl:px-[0.7vw] 3xl:py-[0.25vw] rounded-full pointer-events-none">
              Final render
            </span>

            {/* Divider line */}
            <div
              aria-hidden="true"
              className={`absolute inset-y-0 w-0.5 3xl:w-[0.14vw] -translate-x-1/2 bg-white pointer-events-none ${motion}`}
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
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 3xl:w-[3.33vw] 3xl:h-[3.33vw] rounded-full bg-white shadow-lg flex items-center justify-center text-[#114046] text-lg 3xl:text-[1.25vw] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#114046] focus-visible:ring-offset-2 hover:scale-110 ${
                dragging ? "scale-110 cursor-grabbing" : "cursor-grab"
              } ${motion}`}
              style={{ left: `${position}%` }}
            >
              ⇄
            </button>
          </div>

          <p className="3xl:absolute 3xl:top-full 3xl:left-0 text-xs xl:text-sm 3xl:text-[0.97vw] font-light text-[#7D7D7D] mt-4 3xl:mt-[1.1vw]">
            Click or drag to see how a model becomes a selling image.
          </p>
        </div>
      </div>
    </section>
  );
}