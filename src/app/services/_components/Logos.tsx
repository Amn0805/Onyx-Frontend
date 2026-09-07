// src/app/services/_components/Logos.tsx
import Image from "next/image";
import React from "react";
// Same stylesheet the Home page marquee uses — one keyframe definition,
// not a copy.
import styles from "@/components/home/home.module.css";

export default function Logos({ logos }: { logos: { logo: string }[] }) {
  if (!logos?.length) return null;

  return (
    <div className="overflow-x-hidden">
      <div
        style={{ animationDuration: "30s" }}
        className={`my-10 xl:my-20 3xl:my-[5vw] flex w-fit items-center gap-10 3xl:gap-20 ${styles.slider}`}
      >
        {logos.map((item, idx) => (
          <div
            key={idx}
            className="h-[120px] 3xl:h-[250px] aspect-video relative flex items-center"
          >
            <Image
              src={item.logo}
              alt="logo"
              className="object-cover"
              priority
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}