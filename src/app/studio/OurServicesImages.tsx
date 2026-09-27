import { blurDataURL } from "@/constants";
import Image from "next/image";
import React from "react";

const OurServicesImages = () => {
  return (
    <section className="flex flex-col gap-1 md:gap-3 3xl:gap-5 w-full h-fit py-10 md:py-16 lg:py-20 3xl:py-28 lg:flex-row-reverse bg-white">
      <div className="relative w-full lg:w-1/2 aspect-[1/1]">
        <Image
          placeholder="blur"
          blurDataURL={blurDataURL}
          src="/portfolio/gallery/E3.webp"
          alt="image"
          className="object-cover"
          fill
        />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-6 md:gap-8 3xl:gap-10">
        <div className="relative h-1/2 flex flex-col justify-center pl-6 xl:pl-20 3xl:pl-40 pr-6 md:pr-12 lg:pr-16 3xl:pr-32 pb-6 md:pb-8 3xl:pb-10">
          <div className="flex flex-col gap-1 md:gap-2 3xl:gap-3">
            <h2 className="text-xs md:text-sm lg:text-base 3xl:text-lg text-[#999999] uppercase tracking-widest mb-1 md:mb-2 3xl:mb-3 text-start">
              <span>Mission</span>
            </h2>
            <p className="text-xs md:text-sm lg:text-base 3xl:text-lg  text-justify lg:text-justify leading-normal">
              To carry a project from concept through visualization, coordination and documentation — with visuals convincing enough to sell it, models coordinated enough to build it, and a schedule clients can plan around.
            </p>
          </div>

          <div className="flex flex-col gap-1 md:gap-2 3xl:gap-3 mt-5 md:mt-6 3xl:mt-10">
            <h2 className="text-xs md:text-sm lg:text-base 3xl:text-lg text-[#999999] uppercase tracking-widest mb-1 md:mb-2 3xl:mb-3 text-start">
              <span>Vision</span>
            </h2>
            <p className="text-xs md:text-sm lg:text-base 3xl:text-lg  text-justify lg:text-justify leading-normal">
              To be the studio international practices trust for the whole path, not a single stage of it: design, CGI, BIM, immersive delivery and construction documentation under one roof, at a standard that matches any name in the field.
            </p>
          </div>
        </div>
        <div className="relative h-1/2">
          <Image
            placeholder="blur"
            blurDataURL={blurDataURL}
            src="/portfolio/gallery/E5.webp"
            alt="image"
            className="object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default OurServicesImages;