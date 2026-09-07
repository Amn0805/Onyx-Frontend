import { blurDataURL } from "@/constants";
import Image from "next/image";
import React from "react";

export default function WorkTypes() {
  return (
    <>
      <section className="flex flex-col text-white">
        <div className="relative w-full min-h-screen bg-white">
          <Image
            src={workItems[0].imageSrc}
            alt="image"
            placeholder="blur"
            blurDataURL={blurDataURL}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center lg:gap-6 text-white flex-col text-center">
            <h3
              className="text-lg md:text-3xl 3xl:text-[2vw] absolute bottom-2 text-center 3xl:bottom-[1vw] cursor-pointer"
            >
              {workItems[0].title}
            </h3>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="relative aspect-video w-full lg:w-1/2 group">
            <Image
              src={workItems[1].imageSrc}
              alt={workItems[1].alt}
              placeholder="blur"
              blurDataURL={blurDataURL}
              fill
              className="object-cover"
            />
            <div className="bg-black h-full w-full absolute top-0 bg-opacity-20 flex items-center justify-center  lg:gap-6 text-white flex-col text-center transition-all duration-500 ease-in-out">
              <h3
                className={`text-lg md:text-3xl 3xl:text-[2vw] absolute bottom-2 left-3 3xl:bottom-[1vw] 3xl:left-8 hover:texst-[#41c2db] cursor-pointer`}
              >
                {workItems[1].title}
              </h3>
            </div>
          </div>
          <div className="relative aspect-video w-full lg:w-1/2 group">
            <Image
              src={workItems[2].imageSrc}
              alt={workItems[2].alt}
              placeholder="blur"
              blurDataURL={blurDataURL}
              fill
              className="object-cover"
            />
            <div className="bg-black h-full w-full absolute top-0 bg-opacity-20 flex items-center justify-center  lg:gap-6 text-white flex-col text-center transition-all duration-500 ease-in-out">
              <h3
                className={`text-nowrap text-lg md:text-3xl 3xl:text-[2vw] absolute bottom-2 left-3 3xl:bottom-[1vw] 3xl:left-8  cursor-pointer`}
              >
                {workItems[2].title}
              </h3>
            </div>
          </div>
        </div>
        <div className="relative w-full group">
          <video
            muted
            loop
            className="h-[100vh] w-full object-cover aspect-video"
            autoPlay
            src={workItems[3].imageSrc}
          />
          <div className="bg-gray-200 h-full w-full absolute top-0 bg-opacity-20 flex items-center justify-center  lg:gap-6 text-white flex-col text-center transition-all duration-500 ease-in-out">
            <h3
              className={`text-lg md:text-3xl 3xl:text-[2vw] absolute bottom-2 lg:bottom-6 translate-x-[50%-20px] 3xl:bottom-[1.3vw] 3xl:translate-x-[50%-20px] cursor-pointer`}
            >
              {workItems[3].title}
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

const workItems = [
  {
    title: "3D MODELING",
    description:
      "Pirate ipsum arrgh bounty warp jack. Scurvy o'nine measured dock belay hearties. Warp chains.",
    imageSrc: "/home/M2.svg",
    alt: "work1",
    buttonText: "See Work",
  },
  {
    title: "INTERIOR VISUALIZATION",
    description:
      "Pirate ipsum arrgh bounty warp jack. Scurvy o'nine measured dock belay hearties. Warp chains.",
    imageSrc: "/home/interior-visualization.svg",
    alt: "interior visualization",
    buttonText: "See Work",
  },
  {
    title: "EXTERIOR VISUALIZATION",
    description:
      "Pirate ipsum arrgh bounty warp jack. Scurvy o'nine measured dock belay hearties. Warp chains.",
    imageSrc: "/home/exterior-visualization.svg",
    alt: "exterior visualization",
    buttonText: "See Work",
  },
  {
    title: "Architectural Walkthrough",
    description:
      "Pirate ipsum arrgh bounty warp jack. Scurvy o'nine measured dock belay hearties. Warp chains.",
    imageSrc: "/home/ArchitecturalAnimation1.mp4",
    alt: "architectural walkthrough",
    buttonText: "See Work",
  },
];
