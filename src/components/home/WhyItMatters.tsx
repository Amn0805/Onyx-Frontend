// src/components/home/WhyItMatters.tsx
//
// Statement plus three problem columns, each with one image.
// Server component — no state.

import Image from "next/image";
import { blurDataURL } from "@/constants";
import { HEADING, BODY, SMALL } from "@/components/shared/typography";

interface Problem {
  number: string;
  title: string;
  body: string;
  image: string;
  caption: string;
}

const problems: Problem[] = [
  {
    number: "01",
    title: "Buyers delay",
    body: "Off-plan units sit unsold when investors can't picture the finished project.",
    image: "/home/drawing/buyers.webp",
    caption: "Images create confidence",
  },
  {
    number: "02",
    title: "Pitches fall flat",
    body: "Strong designs lose approvals and competitions to ones that are presented better.",
    image: "/home/drawing/pitches.webp",
    caption: "The same design presented better",
  },
  {
    number: "03",
    title: "Changes get expensive",
    body: "Clients spot what they dislike after it's built, when fixing it is costly.",
    image: "/home/drawing/changes.webp",
    caption: "Changes cost more",
  },
];

/** Outer columns pad only on their inner side; the middle pads both. */
function columnPadding(i: number) {
  if (i === 0) return "md:pr-8 3xl:pr-16";
  if (i === problems.length - 1) return "md:pl-8 3xl:pl-16";
  return "md:px-8 3xl:px-16";
}

export default function WhyItMatters() {
  return (
    <section className="px-6 md:px-16 lg:px-20 3xl:px-32 pt-4 md:pt-8 pb-16 md:pb-24 3xl:pb-40">
      {/* A vertical rule separates the statement from the supporting line. */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 xl:gap-16 3xl:gap-24">
        <h2 className={`${HEADING} lg:w-[55%] flex flex-col gap-2 md:gap-4 3xl:gap-8 [word-spacing:0.15em]`}>
          <span>Drawings don&apos;t sell.</span>
          <span >Images do.</span>
        </h2>

         <div className="lg:w-[45%] lg:border-l lg:border-black/15 lg:pl-12 xl:pl-16 3xl:pl-[3vw]">
          <p className={`${BODY} text-[#4A4A4A] text-justify hyphens-auto max-w-md 3xl:max-w-[31vw]`}>
            Most people can&apos;t read a floor plan. When they can&apos;t
            picture the result, they hesitate, and hesitation costs you.
          </p>
        </div>
      </div>

      <hr className="border-black/15 mt-12 md:mt-16 3xl:mt-28" />

      {/* divide-x puts a rule between columns without a wrapper per column. */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-black/15 mt-12 md:mt-16 3xl:mt-28">
        {problems.map((problem, i) => (
          <div
            key={problem.title}
            className={`flex flex-col pb-10 md:pb-0 ${columnPadding(i)}`}
          >
            <div className="flex items-start gap-5 3xl:gap-10">
              <span aria-hidden="true" className={`${HEADING} text-black/20 shrink-0`}>
                {problem.number}
              </span>

              <div className="border-l border-black/15 pl-5 3xl:pl-10">
                <h3 className={`${BODY} font-bold`}>{problem.title}</h3>
                <p className={`${BODY} text-[#7D7D7D] mt-2 3xl:mt-4`}>
                  {problem.body}
                </p>
              </div>
            </div>

            <figure className="mt-auto pt-8 3xl:pt-16">
              <div className="relative w-full aspect-video overflow-hidden bg-[#bac3c833]">
                <Image
                  src={problem.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>
              <figcaption className={`${SMALL} uppercase tracking-[0.15em] text-[#7D7D7D] text-center mt-3 3xl:mt-6`}>
                {problem.caption}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}