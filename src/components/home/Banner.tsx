"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/home/Banner.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-gray-200"
      />
      <div className="relative h-full flex flex-col items-start justify-end gap-5 bottom-5 3xl:bottom-10 3xl:mb-32 3xl:gap-6 left-2 3xl:ml-32">
        <h1 className="font-medium 3xl:font-semibold max-md:text-xl max-md:font-semibold text-4xl 3xl:text-8xl text-white w-[80%] leading-normal 3xl:leading-[125px] max-lg:leading-snug">
          Delivering Photorealistic 3D Renderings That Surpass Traditional Representations With Unmatched Detail and Precision.
        </h1>

        <Link href="/studio/#scheduleCall">
          <button className="btn-theme btn-pill mt-3 3xl:text-6xl 3xl:mt-12 max-md:mb-10 hover:bg-[#ff565605] hover:text-white">
            Discuss Your Project
          </button>
        </Link>
      </div>
      <Image src="/logo/logo1-text-only-theme.svg" alt="logo" width={200} height={200} className="absolute 3xl:w-[1100px] 2xl:w-[700px]    right-2 md:right-10 bottom-4 md:bottom-10" unoptimized />
    </div>
  );
}
