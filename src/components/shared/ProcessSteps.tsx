// src/components/shared/ProcessSteps.tsx
//
// Four staggered process steps. Columns 1 and 3 put their text below the
// image, columns 2 and 4 above it, so the images sit at alternating heights.
// The stagger applies from lg up, where all four share a row — below that
// every card reads image-then-text.
//
// Shared across Home and the service pages. Images come from the data, so a
// page supplies its own steps without duplicating any layout.

import Image from "next/image";
import { blurDataURL } from "@/constants";

export interface ProcessStep {
  title: string;
  body: string;
  image: string;
  alt: string;
}

export default function ProcessSteps({
  steps,
  heading,
  intro,
  /** Per-page override — the service pages and Home use different ratios. */
  aspect = "aspect-[4/5]",
}: {
  steps: readonly ProcessStep[];
  heading?: string;
  intro?: string;
  aspect?: string;
}) {
  return (
        <section className="px-6 md:px-16 lg:px-20 3xl:px-32 pt-4 md:pt-8 pb-16 md:pb-24 3xl:pb-40">
        {(heading || intro) && (
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-24 xl:gap-32 3xl:gap-48 mb-12 md:mb-20 3xl:mb-32">
          {heading &&             <h2
              className="sub-heading lg:w-1/2 tracking-wide"
              style={{ lineHeight: 1.5 }}
            >
              {heading}
            </h2>}
          {intro && (
            <p className="text-small text-[#7D7D7D] lg:w-1/2 max-w-2xl 3xl:max-w-4xl pt-4 3xl:pt-8">
              {intro}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 3xl:gap-x-12 gap-y-10 3xl:gap-y-20 items-start">
        {steps.map((step, i) => {
          const textFirst = i % 2 === 0;

          return (
            <figure key={step.title} className="flex flex-col">
              <div
                className={`relative w-full ${aspect} overflow-hidden bg-[#bac3c833] ${
                  textFirst ? "order-1 lg:order-2" : "order-1"
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>

              <figcaption
                className={
                  textFirst
                    ? "order-2 lg:order-1 mt-4 lg:mt-0 lg:mb-6 3xl:lg:mb-10"
                    : "order-2 mt-4 3xl:mt-8"
                }
              >
                <h3 className="text-small text-[#114046] font-normal">
                  {step.title}
                </h3>
                <p className="text-x-small text-[#7D7D7D] mt-2 3xl:mt-4">
                  {step.body}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}