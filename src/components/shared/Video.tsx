// src/components/shared/Video.tsx
//
// Client video testimonial beside supporting copy, with a trust bar below.
// Server component — the Sanity fetch stays on the server, and an iframe needs
// no client JS.
//
// Every spacing, type and icon value carries a 3xl variant at roughly double
// its desktop value, so 4K shows the same proportions at twice the size.

import React from "react";
import Link from "next/link";
import { fetchFeedbackVideo } from "@/lib/sanity";
import { RefreshCw, Clock, Lock, CreditCard } from "lucide-react";

const assurances = [
  {
    Icon: RefreshCw,
    title: "Revisions included",
    body: "Rounds of changes built into every quote.",
  },
  {
    Icon: Clock,
    title: "On-time delivery",
    body: "A fixed timeline agreed before we start.",
  },
  {
    Icon: Lock,
    title: "Your files stay private",
    body: "NDA on request. White-label delivery available.",
  },
  {
    Icon: CreditCard,
    title: "Pay in milestones",
    body: "Pay as each stage is approved.",
  },
];

export const FeedbackVideo = async () => {
  const videoLink = await fetchFeedbackVideo();
  const src = videoLink?.[0]?.videoUrl;

  return (
    <section className="px-6 md:px-16 lg:px-20 3xl:px-40 py-16 md:py-24 3xl:py-48">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 3xl:gap-32">
        {/* Video */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-video rounded-xl 3xl:rounded-3xl overflow-hidden bg-[#bac3c833]">
            {src && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={src}
                title="Client video testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          <div className="mt-4 3xl:mt-8">
            <p className="text-x-small-bold">Client video testimonial</p>
            <p className="text-x-small text-[#7D7D7D] mt-1 3xl:mt-2">
              Name, role, company
            </p>
          </div>
        </div>

        {/* Copy */}
        <div className="w-full lg:w-1/2">
          <h2 className="sub-heading tracking-wide [word-spacing:0.25em] flex flex-col gap-2 md:gap-4">
            <span>Clients trust us with</span>
            <span className="sub-heading-bold text-[#4a5f66]">
              launches, approvals and homes
            </span>
          </h2>

          <p className="text-small text-[#7D7D7D] mt-6 3xl:mt-12 max-w-md 3xl:max-w-2xl">
            Written reviews above stay visible for visitors who don&apos;t press
            play.
          </p>

          <div className="flex flex-wrap gap-4 3xl:gap-8 mt-8 md:mt-12 3xl:mt-24">
            <Link href="/studio/#scheduleCall">
              <button className="bg-[#114046] text-white btn-pill btn-theme hover:bg-[#0e3035]">
                Get a free quote
              </button>
            </Link>
            <Link href="/client-reviews">
              <button className="btn-pill border border-[#114046] text-[#114046] hover:bg-[#114046] hover:text-white transition-colors">
                Read all reviews
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* One outer border with dividers between, so the row reads as a single
          block rather than four separate boxes. */}
      <div className="mt-12 md:mt-16 3xl:mt-32 border border-black/10 rounded-xl 3xl:rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-black/10">
        {assurances.map(({ Icon, title, body }) => (
          <div key={title} className="p-6 3xl:p-12">
            <Icon className="w-6 h-6 3xl:w-12 3xl:h-12 text-[#114046]" />
            <h3 className="text-small-bold mt-4 3xl:mt-8">{title}</h3>
            <p className="text-x-small text-[#7D7D7D] mt-2 3xl:mt-4">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};