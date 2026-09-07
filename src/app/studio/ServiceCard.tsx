import { blurDataURL } from "@/constants";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  desc: string;
  imgUrl: string;
}

const ServiceCard: React.FC<CardProps> = ({ title, desc, imgUrl }) => {
  return (
    <div className="w-[90%] sm:w-[28%] bg-[#fafafa] group transition-colors duration-300 ease-in-out cursor-pointer hover:text-white py-[10%] sm:py-[4%] px-[4%] sm:px-[2%] my-[7%] sm:my-[2.5%] relative group">
      <div className="flex justify-center items-center bg-[#113f45] group-hover:border-[1px] border-[1px] group-hover:border-white  h-[10vw] w-[10vw] sm:w-[4vw] sm:h-[4vw] p-[3%] absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:h-full group-hover:w-full transition-all duration-700 z-0">
        <ServiceIcon url={imgUrl } />
      </div>
      <h1 className="lg:text-xl xl:text-2xl 3xl:text-4xl poppins font-semibold z-20 relative"
        style={{ fontVariantCaps: "small-caps" }}
      >{title}</h1>
      <p className="para text-[#636363] group-hover:text-white py-[3%] sm:py-[8%] leading-normal xl:leading-[1.7vw] z-10 relative">
        {desc}
      </p>
    </div>
    
  );
};

const ServiceIcon: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div className="w-full h-full flex justify-center items-center group-hover:opacity-0 transition-all duration-700">
      <Image
        placeholder="blur"
        blurDataURL={blurDataURL}
        src={url}
        alt="Service Image"
        layout="intrinsic"
        width={100}
        height={100}
      />
    </div>
  );
};

export default ServiceCard;
