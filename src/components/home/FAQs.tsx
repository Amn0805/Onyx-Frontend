// src/components/home/FAQs.tsx
//
// Heading centred on top with two question columns below; from 3xl, heading
// on the left and questions on the right.
//
// Each column is its own stack rather than a grid row, so opening a question
// only pushes down the questions below it in the same column — the item
// beside it never stretches into an empty bordered box.

import React from "react";
import FAQ from "./FAQ";

const FAQData = [
  {
    question: "What exactly can ONYX help me move forward with?",
    answer:
      "A layout you haven't resolved. A design your client can't picture. A development you need to present before it exists. We help turn these into clear designs, drawings and visuals—so you can make a decision, get your ideas understood or prepare your project for marketing.",
  },
  {
    question: "Do I need finished plans to work with you?",
    answer:
      "No. Bring your ideas, sketches or existing plans. We can develop the design from an early brief or work from approved drawings when you need modeling, drafting or visualization.",
  },
  {
    question: "I already have a design team. Why would I need ONYX?",
    answer:
      "You may have the design expertise but need more capacity to produce the drawings, models or presentation visuals. We can take on a defined part of that work, following your team's design direction. You keep control of the design while getting support with its delivery.",
  },
  {
    question: "How do I know what I actually need?",
    answer:
      "Tell us what you need to decide, explain or present. Comparing layouts may call for space planning; preparing a property launch may require renders and marketing floor plans. We'll recommend a scope around that goal. You can start with one service.",
  },
  {
    question: "How do I know you're the right team for my project?",
    answer:
      "We'll review your brief and share relevant work so you can assess our approach and level of detail. Before you commit, we'll clarify what we can deliver, what we need from you and whether your timeline is realistic.",
  },
  {
    question: "What if the first draft doesn't match my vision?",
    answer:
      "Draft reviews give you the opportunity to check the direction before final delivery. We refine the work against your brief within the agreed revision rounds. If you introduce a new direction or additional scope, we'll confirm any cost or timing changes first.",
  },
  {
    question: "How much will it cost, and can you meet my deadline?",
    answer:
      "Share your available files, required outputs and target date. We'll assess the work involved and provide a proposal defining the fee, deliverables, revisions and schedule. If your budget or deadline requires a smaller scope, we'll discuss priorities with you.",
  },
  {
    question: "What happens on the first call?",
    answer:
      "We'll discuss where your project stands, what you need next and what is holding you back. You don't need a polished brief. Bring what you have, and we'll identify where we can help and what's needed for a clear proposal.",
  },
];

/** First half in the left column, second half in the right. On phones the
    columns stack, so the questions still read 1 to 8 in order. */
const half = Math.ceil(FAQData.length / 2);
const columns = [FAQData.slice(0, half), FAQData.slice(half)];

function FAQs() {
  return (
    <section className="px-5 md:px-10 lg:px-20 3xl:px-32 pt-6 md:pt-10 3xl:pt-16 pb-16 md:pb-24 3xl:pb-40">
      <div className="flex flex-col items-center 3xl:flex-row 3xl:items-center gap-10 md:gap-14 3xl:gap-[5vw] 3xl:justify-center">
  <div className="text-center 3xl:w-auto">
    <h2 className="heading leading-[1.15] whitespace-nowrap">
            Everything you need to{" "}
            <span className="font-bold text-[#4a5f66]">know.</span>
          </h2>
          <p className="text-x-small text-[#4a5f66] tracking-[0.25em] uppercase mt-4 md:mt-5 3xl:mt-[1.4vw]">
            Tell us what you're working on.
          </p>
        </div>

        {/* items-start keeps the two columns independent heights. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4 lg:gap-6 3xl:gap-8 3xl:flex-1">
          {columns.map((column, c) => (
            <div key={c} className="flex flex-col gap-4 3xl:gap-6">
              {column.map((item) => (
                <FAQ key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;