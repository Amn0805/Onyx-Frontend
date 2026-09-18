"use client";

// src/components/home/TestimonialVideo.tsx

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface TestimonialVideoProps {
  /** YouTube/Vimeo embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID */
  embedUrl?: string;
  /** Alternative to embedUrl: a video file in public/, e.g. "/home/testimonial.mp4" */
  videoSrc?: string;
  /** Optional cover image in public/, e.g. "/home/testimonial-poster.webp" */
  poster?: string;
  captionTitle?: string;
  captionSub?: string;
}

const BG = "#FFFFFF";
const ACCENT = "#114046"; // teal green
const INK = "#0E1416";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-[#0F766E]"
    >
      {children}
    </svg>
  );
}

const features: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Revisions included",
    text: "Rounds of changes built into every quote.",
    icon: (
      <Icon>
        <path d="M21 12a9 9 0 0 0-15.5-6.2L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 15.5 6.2L21 16" />
        <path d="M21 21v-5h-5" />
      </Icon>
    ),
  },
  {
    title: "On-time delivery",
    text: "A fixed timeline agreed before we start.",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </Icon>
    ),
  },
  {
    title: "Your files stay private",
    text: "NDA on request. White-label delivery available.",
    icon: (
      <Icon>
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </Icon>
    ),
  },
  {
    title: "Pay in milestones",
    text: "Pay as each stage is approved.",
    icon: (
      <Icon>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </Icon>
    ),
  },
];

export default function TestimonialVideo({
  embedUrl = "",
  videoSrc = "",
  poster = "",
  captionTitle = "Client video testimonial",
  captionSub = "Name, role, company",
}: TestimonialVideoProps) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(videoSrc || embedUrl);

  return (
    <section
      className="px-6 md:px-16 lg:px-20 3xl:px-32 py-16 md:py-24 3xl:py-40 text-[#0E1416]"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 3xl:gap-32">
        {/* Video card */}
        <div className="relative w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-xl 3xl:rounded-3xl bg-[#101617]">
          {playing && hasVideo ? (
            embedUrl ? (
              <iframe
                src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
                title={captionTitle}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <video
                src={videoSrc}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 h-full w-full object-contain bg-black"
              />
            )
          ) : (
            <>
              {poster && (
                <>
                  <Image
                    src={poster}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </>
              )}

              <button
                type="button"
                onClick={() => hasVideo && setPlaying(true)}
                aria-label="Play video testimonial"
                aria-disabled={!hasVideo}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 md:h-[72px] md:w-[72px] 3xl:h-24 3xl:w-24 items-center justify-center rounded-full bg-white outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101617] ${
                  hasVideo
                    ? "motion-safe:transition-transform hover:scale-105 cursor-pointer"
                    : "cursor-default"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="ml-1 3xl:h-8 3xl:w-8"
                >
                  <path d="M6 4l14 8-14 8V4z" fill="#0F766E" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <p className="text-small-bold text-white">{captionTitle}</p>
                <p className="text-small text-white/70 mt-1">{captionSub}</p>
              </div>
            </>
          )}
        </div>

        {/* Copy + buttons */}
        <div className="lg:w-1/2">
          <h2 className="sub-heading !text-[#0E1416]">
            Clients trust us with launches, approvals and homes
          </h2>
          <p className="text-small text-black/60 mt-4 md:mt-6 3xl:mt-10 max-w-xl 3xl:max-w-3xl">
            Watch a short video from a client. The written reviews above are
            there if you would rather read.
          </p>

          <div className="flex flex-wrap gap-4 3xl:gap-8 mt-8 3xl:mt-14">
            <Link
              href="/studio/#scheduleCall"
              className="btn-pill inline-flex items-center justify-center text-white transition-colors hover:brightness-110"
              style={{ backgroundColor: ACCENT }}
            >
              Get a free quote
            </Link>
            <Link
              href="#reviews"
              className="btn-pill inline-flex items-center justify-center border text-[#114046] transition-colors hover:bg-[#114046] hover:text-white"
              style={{ borderColor: ACCENT }}
            >
              Read all reviews
            </Link>
          </div>
        </div>
      </div>

      {/* Trust tiles. gap-px on a tinted container draws the hairline
          dividers, so they stay correct at 1, 2 and 4 columns. */}
      <ul className="mt-10 md:mt-14 3xl:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-xl 3xl:rounded-3xl border border-black/10 bg-black/10">
        {features.map((f) => (
          <li
            key={f.title}
            className="p-6 md:p-8 3xl:p-12"
            style={{ backgroundColor: BG }}
          >
            {f.icon}
            <h3 className="text-small-bold text-[#0E1416] mt-6 3xl:mt-10">
              {f.title}
            </h3>
            <p className="text-small text-black/60 mt-2">{f.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}