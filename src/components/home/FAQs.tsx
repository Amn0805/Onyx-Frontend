import React from "react";
import FAQ from "./FAQ";

function FAQs() {
  return (
    <section className="p-5 md:p-10 lg:p-28 3xl:p-40">
      {/* Heading left, questions right. items-stretch lets both columns share
          a height so the heading can centre itself against the list. */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 3xl:gap-40 items-stretch">
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <h2 className="heading max-lg:text-center">
            <span>
              Everything you need{" "}
            </span>
            to
            <span className="ml-4 heading-bold text-[#4a5f66]">
              know.
            </span>
          </h2>
        </div>
  


        <div className="w-full lg:w-3/5 flex flex-col gap-5 3xl:gap-10">
          {FAQData.map((item, index) => (
            <FAQ key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQData = [
  {
    question: "What exactly can ONYX help me move forward with?",
    answer:
      "A layout you haven’t resolved. A design your client can’t picture. A development you need to present before it exists. We help turn these into clear designs, drawings and visuals—so you can make a decision, get your ideas understood or prepare your project for marketing..",
  },
  {
    question: "Do I need finished plans to work with you?",
    answer:
      "No. Bring your ideas, sketches or existing plans. We can develop the design from an early brief or work from approved drawings when you need modeling, drafting or visualization.",
  },
  {
    question: "I already have a design team. Why would I need ONYX?",
    answer:
      "You may have the design expertise but need more capacity to produce the drawings, models or presentation visuals. We can take on a defined part of that work, following your team’s design direction. You keep control of the design while getting support with its delivery.",
  },
  {
    question: "How do I know what I actually need?",
    answer:
      "Tell us what you need to decide, explain or present. Comparing layouts may call for space planning; preparing a property launch may require renders and marketing floor plans. We’ll recommend a scope around that goal. You can start with one service.",
  },
  {
    question: "How do I know you’re the right team for my project?",
    answer:
      "We’ll review your brief and share relevant work so you can assess our approach and level of detail. Before you commit, we’ll clarify what we can deliver, what we need from you and whether your timeline is realistic.",
  },
   {
    question: "What if the first draft doesn’t match my vision?",
    answer:
      "Draft reviews give you the opportunity to check the direction before final delivery. We refine the work against your brief within the agreed revision rounds. If you introduce a new direction or additional scope, we’ll confirm any cost or timing changes first.",
  },
   {
    question: "How much will it cost, and can you meet my deadline?",
    answer:
      "Share your available files, required outputs and target date. We’ll assess the work involved and provide a proposal defining the fee, deliverables, revisions and schedule. If your budget or deadline requires a smaller scope, we’ll discuss priorities with you.",
  },
   {
    question: "What happens on the first call?",
    answer:
      "We’ll discuss where your project stands, what you need next and what is holding you back. You don’t need a polished brief. Bring what you have, and we’ll identify where we can help and what’s needed for a clear proposal.",
  },
];

export default FAQs;