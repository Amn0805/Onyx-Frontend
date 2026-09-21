"use client";
// src/components/home/SplitReveal.tsx
//
// Before/after comparison. Click anywhere to glide the divider there; hold and
// drag to move it directly; or focus the handle and use the arrow keys.
//
// Spacing carries 4xl variants alongside 3xl: the 3xl values were sized for
// 2048px, and without these the layout stays that size on a 3840px screen.

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
/**
 * Same as .btn-pill below 3xl, so desktop is unchanged. From 3xl up, matches
 * the header's "Get a free quote" button instead of .btn-pill's oversized
 * 4K values.
 */
const PILL =
  "rounded-full shadow-2xl transition-colors px-8 py-2 lg:px-10 lg:py-4 lg:text-sm min-w-[210px] 3xl:px-8 3xl:py-4 3xl:text-lg 3xl:min-w-0";

/** Pixels a held pointer must travel before it counts as a drag, not a click. */
const DRAG_THRESHOLD = 4;

/**
 * Renders a point, emphasising any text wrapped in [square brackets].
 * split() with a capture group puts the bracketed parts at odd indices.
 */
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
        <section className="px-6 md:px-16 lg:px-20 3xl:px-32 4xl:px-56 py-12 md:py-20 lg:py-24 3xl:py-24 4xl:py-40">
      {/* lg:items-center centres the copy against the image, so the text block
          sits level with it instead of hugging the top while the image runs
          far below. */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24 xl:gap-32 3xl:gap-48 4xl:gap-80">
        {/* Copy */}
        <div className="w-full lg:w-[45%]">
                   <h2 className="heading flex flex-col gap-3 md:gap-5 3xl:gap-10 4xl:gap-16 [word-spacing:0.25em] tracking-wide">
            <span>
              From first{" "}
              <span className="font-bold text-[#4a5f66]">Sketch</span> to
            </span>
            <span>
              final <span className="font-bold text-[#4a5f66]">Sale.</span>
            </span>
          </h2>

          {/* Tight to the heading, so it reads as part of the same statement. */}
           <p className="text-x-small md:text-small text-[#4a5f66] tracking-[0.25em] uppercase mt-4 md:mt-5 3xl:mt-8 4xl:mt-12">
            Designed. Modeled. Rendered. Sold.
          </p>

          {/* Larger gap, so the body copy reads as a separate block. */}
            <p className="text-xs lg:text-base xl:text-lg 3xl:text-2xl 4xl:text-[2.75rem] font-light text-[#4A4A4A] text-justify hyphens-auto mt-6 md:mt-8 3xl:mt-12 4xl:mt-20 max-w-md 3xl:max-w-2xl 4xl:max-w-5xl">
            Photorealistic renders, animations, and immersive experiences that
            win approvals, impress clients, and sell projects off-plan, backed
            by a design and BIM team that knows how buildings are made.
          </p>

          {/* More room above the buttons, so the paragraph and the actions read
              as separate blocks. */}
          <div className="flex flex-wrap gap-4 3xl:gap-6 4xl:gap-10 mt-8 md:mt-12 3xl:mt-16 4xl:mt-24">
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

          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 lg:gap-x-8 3xl:gap-x-[2vw] 3xl:gap-y-[0.8vw] mt-10 md:mt-14 3xl:mt-[3vw]">
            {points.map((point) => (
              <li
                key={point}
                className="text-small xl:text-sm 3xl:text-[0.85vw] font-light text-[#4A4A4A]"
              >
                <span aria-hidden="true" className="text-[#114046] mr-2 3xl:mr-[0.5vw]">
                  ✓
                </span>
                <Point text={point} />
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
            className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl 3xl:rounded-3xl 4xl:rounded-[2.5rem] bg-[#bac3c833] select-none touch-pan-y ${
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

            <span className="absolute bottom-4 left-4 3xl:bottom-8 3xl:left-8 4xl:bottom-14 4xl:left-14 bg-black/70 text-white text-x-small px-3 py-1 3xl:px-6 3xl:py-3 4xl:px-10 4xl:py-5 rounded-full pointer-events-none">
              Clay model
            </span>
            <span className="absolute bottom-4 right-4 3xl:bottom-8 3xl:right-8 4xl:bottom-14 4xl:right-14 bg-black/70 text-white text-x-small px-3 py-1 3xl:px-6 3xl:py-3 4xl:px-10 4xl:py-5 rounded-full pointer-events-none">
              Final render
            </span>

            {/* Divider line */}
            <div
              aria-hidden="true"
              className={`absolute inset-y-0 w-0.5 3xl:w-1 4xl:w-1.5 -translate-x-1/2 bg-white pointer-events-none ${motion}`}
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
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 3xl:w-24 3xl:h-24 4xl:w-40 4xl:h-40 rounded-full bg-white shadow-lg flex items-center justify-center text-[#114046] text-lg 3xl:text-3xl 4xl:text-6xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#114046] focus-visible:ring-offset-2 hover:scale-110 ${
                dragging ? "scale-110 cursor-grabbing" : "cursor-grab"
              } ${motion}`}
              style={{ left: `${position}%` }}
            >
              ⇄
            </button>
          </div>

            <p className="3xl:absolute 3xl:top-full 3xl:left-0 text-x-small text-[#7D7D7D] mt-4 3xl:mt-8 4xl:mt-14">
            Click or drag to see how a model becomes a selling image.
          </p>
        </div>
      </div>
    </section>
  );
}