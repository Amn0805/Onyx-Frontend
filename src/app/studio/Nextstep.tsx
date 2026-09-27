import React from "react";
import ScheduleCall from "@/components/shared/ScheduleCall";

const NextStep = () => {
  return (
    <section className="w-full px-6 xl:px-20 3xl:px-40 py-10 md:py-16 lg:py-20 3xl:py-28 bg-[#114046]">
      <div className="flex flex-col gap-6 md:gap-8 3xl:gap-10">
        {/* TEXT & CTA SECTION */}
        <div className="flex flex-col">
          <p className="text-xs md:text-sm lg:text-base 3xl:text-lg uppercase tracking-widest text-white/70 mb-6 md:mb-8 3xl:mb-10">
            NEXT STEP
          </p>

          {/* HEADING & BUTTON - SAME ROW */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 md:gap-8 3xl:gap-10 mb-6 md:mb-8 3xl:mb-12">
            <h2 className="heading text-white flex flex-col gap-2 md:gap-4 3xl:gap-8 lg:w-2/3">
              <span>Tell us what you're</span>
              <span>building.</span>
            </h2>
            <button className="btn-pill bg-white  border border-white hover:bg-[#f5f5f5] transition-colors text-xs lg:text-sm xl:text-base 3xl:text-lg min-w-[210px] font-semibold h-fit lg:mt-1">
              Request a Proposal
            </button>
          </div>

          {/* DESCRIPTION TEXT */}
          <p className="text-xs md:text-sm lg:text-base 3xl:text-lg text-white/70 mb-10 md:mb-14 3xl:mb-20">
            Send drawings, a sketch or just the brief. You'll have a scoped proposal within 24 hours. Prefer to talk it through first? Book a 30-minute session with the studio.
          </p>

          {/* CTA SUBTEXT */}
          <p className="text-xs md:text-sm lg:text-base 3xl:text-lg text-white/70 font-semibold">
            4 quick questions. Reply within 24 hours.
          </p>
        </div>

        {/* CALENDAR SECTION - BELOW TEXT & CTA */}
        <div className="w-full">
          <div className="h-[600px] md:h-[700px] lg:h-[800px] 3xl:h-[900px] overflow-hidden rounded-2xl">
            <ScheduleCall heading="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStep;