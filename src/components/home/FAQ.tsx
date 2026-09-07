"use client";
import React, { useState } from "react";
import { UpArrow } from "@/icons";

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex items-start justify-between w-full gap-4 pb-2 lg:p-4 cursor-pointer ${
        isOpen ? "border-b" : ""
      } border-gray-300`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col gap-5">
        <h5
          className={`transition-all duration-300 para ${
            isOpen
              ? "text-[#114046] lg:text-xl xl:text-2xl 3xl:text-4xl"
              : "text-black"
          }`}
        >
          {question}
        </h5>
        <div
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-40" : "max-h-0"
          }`}
        >
          <p className="para text-[#00000080] leading-tight lg:p-2">
            {answer}
          </p>
        </div>
      </div>
      <span
        className={`transform transition-transform duration-300 mt-5 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <UpArrow />
      </span>
    </div>
  );
}
export default FAQ;
