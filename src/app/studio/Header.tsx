import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="pb-[5%] overflow-x-hidden">
      <h1 className="text-[#B9B9B933] text-[22.8vw] leading-none">
        <span className="relative left-[-3.2vw]">ABOUT</span>
        <span className="relative right-[-3.5vw]">US</span>
      </h1>
      <p className="heading pl-[4.5%] relative bottom-[3.2vw] w-4/5">
        Trusted Worldwide - A Leading Name in High-End 3D Architectural Visualization & Large-Scale Modeling.
      </p>
      <Link href="/gallery">
        <button
          className="mb-[4%] ml-[4.5%] btn-pill btn-theme hover:bg-[#ff565605] hover:text-black"
        >
          See Work
        </button>
      </Link>
    </div>
  );
};

export default Header;
