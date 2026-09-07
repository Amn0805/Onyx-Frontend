"use client";
import { useState } from "react";
import { list } from "./StaticData";
import Image from "next/image";
import { blurDataURL } from "@/constants";

export default function OurWorkFlow() {
  const [image, setImage] = useState<string>("/home/work-flow/1.webp");

  const handleMouseEnter = (newImage: string) => {
    setImage(newImage);
  };

  const handleMouseLeave = () => {
    setImage("/home/work-flow/1.webp");
  };

  return (
    <div className="flex flex-col gap-10 3xl:gap-20 p-2 lg:p-10">
      <h2 className="text-center md:text-start heading 3xl:px-40 3xl:pt-20">Our Work Flow</h2>
      <div className="flex justify-between gap-10 3xl:px-40 3xl:py-20">
        <div className="flex lg:w-[75%] relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 3xl:left-9 bg-[#114046] sm:h-[80%] lg:h-[85%] 3xl:h-[95%] lg:w-2" />
          <div className="flex flex-col justify-between gap-8 lg:gap-20 3xl:gap-64">
            {list.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(item.img)}
                onMouseLeave={handleMouseLeave}
                className="flex cursor-pointer gap-4 3xl:gap-8 group"
              >
                <p
                  className={`para self-center bg-[#114046] z-10 aspect-square h-8 w-8 lg:h-10 lg:w-10 3xl:h-20 3xl:w-20 text-white lg:text-[#114046] group-hover:text-white group-hover:scale-125 transition  duration-300 ease-in-out flex items-center justify-center rounded-full`}
                >
                  {item.number}
                </p>
                <p className="group-hover:text-lg lg:text-lg xl:text-lg xl:group-hover:text-xl 3xl:text-3xl poppins 3xl:group-hover:text-4xl transition-all duration-300 ease-in-out poppins font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex justify-end w-1/4 h-[80vh] 2xl:h-[75vh] relative">
          <Image
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="w-full object-cover"
            src={image}
            alt="workflow image"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
}
