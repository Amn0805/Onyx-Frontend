"use client";
import React, { useState } from "react";

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full border border-black/15 hover:border-[#114046]/40 transition-colors cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between gap-6 p-6 md:p-8 3xl:p-16">
        <h5
          className={`para transition-colors duration-300 ${
            isOpen ? "text-[#114046]" : "text-black"
          }`}
        >
          {question}
        </h5>

        {/* Circular +, rotating to × when open. */}
        <span
          aria-hidden="true"
          className={`shrink-0 flex items-center justify-center rounded-full bg-black/5 w-8 h-8 3xl:w-16 3xl:h-16 text-lg 3xl:text-3xl leading-none transition-transform duration-300 ${
            isOpen ? "rotate-45 text-[#114046]" : "rotate-0"
          }`}
        >
          +
        </span>
      </div>

      {/* grid-rows animates from 0 to the content's true height. The previous
          max-h-40 silently clipped any answer taller than 160px — several of
          these run well past that. */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-small text-[#00000080] px-6 md:px-8 3xl:px-16 pb-6 md:pb-8 3xl:pb-16 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;