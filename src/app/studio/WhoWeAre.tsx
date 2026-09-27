import React from "react";

const WhoWeAre = () => {
  return (
    <section className="w-full bg-white px-6 xl:px-20 3xl:px-40 py-10 md:py-16 lg:py-20 3xl:py-28">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs md:text-sm lg:text-base 3xl:text-lg text-[#999999] uppercase tracking-widest mb-6 md:mb-8 3xl:mb-10 text-center">
          Who We Are
        </p>
        <h2 className="heading text-center mb-10 md:mb-14 3xl:mb-20 flex flex-col gap-2 md:gap-4 3xl:gap-8">
          <span>Most studios render what you send.</span>
          <span>We understand what you're building.</span>
        </h2>
        <div className="space-y-6 md:space-y-8 3xl:space-y-10 text-justify">
          <p className="text-xs md:text-sm lg:text-base 3xl:text-lg ">
            ONYX RENDERS is an architecture, visualization and design coordination studio. Our team is made up of registered architects, 3D artists and BIM specialists, which means a drawing set is read the way a builder reads it, not traced the way an image-maker traces it.
          </p>
          <p className="text-xs md:text-sm lg:text-base 3xl:text-lg ">
            That changes what you get back. Details resolve correctly. Clashes surface before site. Materials are specified, not guessed. And when a project moves from marketing images to permit drawings, you don't change partners halfway.
          </p>
          <p className="text-xs md:text-sm lg:text-base 3xl:text-lg ">
            It is the slower way to build a studio, and it is the only reason the work holds up. We take a fixed number of projects at a time for the same reason.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;