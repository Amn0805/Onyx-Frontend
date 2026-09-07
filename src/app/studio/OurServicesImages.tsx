import { blurDataURL } from "@/constants";
import Image from "next/image";
import React from "react";

const OurServicesImages = () => {
  return (
    <section
      className={`flex flex-col gap-1 3xl:gap-2 w-full h-fit py-[8%]  lg:flex-row-reverse
        `}
    >
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
      <div className="lg:w-1/2 flex flex-col gap-1 3xl:gap-2">
        <div className="relative h-1/2 aspect-[893/502] flex justify-center items-center">
          <p className="heading text-center lg:text-start lg:pl-6">
            More Than Just <span className="text-[#114046]">Renders</span> - We Create Impactful Visuals That Inspire, Persuade, and Elevate Architectural Design.
          </p>
        </div>
        <div className="relative h-1/2 aspect-[893/502]">
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
