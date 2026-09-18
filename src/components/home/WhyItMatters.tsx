// src/components/home/WhyItMatters.tsx
//
// Statement plus three problem columns. Server component — no state, no images.

interface Problem {
  title: string;
  body: string;
}

const problems: Problem[] = [
  {
    title: "Buyers delay",
    body: "Off-plan units sit unsold when investors can't picture the finished project.",
  },
  {
    title: "Pitches fall flat",
    body: "Strong designs lose approvals and competitions to ones that are presented better.",
  },
  {
    title: "Changes get expensive",
    body: "Clients spot what they dislike after it's built, when fixing it is costly.",
  },
];

export default function WhyItMatters() {
  return (
       <section className="px-6 md:px-16 lg:px-20 3xl:px-32 pt-4 md:pt-8 pb-16 md:pb-24 3xl:pb-40">
      {/* Heading left, supporting line right and lower, as in the reference. */}
       <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12 xl:gap-16 3xl:gap-24">
    <h2 className="heading lg:w-[55%] flex flex-col gap-2 md:gap-4 3xl:gap-8 [word-spacing:0.15em] whitespace-nowrap">
          <span>Drawings don&apos;t sell. Images</span>
          <span>do.</span>
        </h2>
        
               <p className="text-small text-[#7D7D7D] lg:w-[48%]">
          Most people can&apos;t read a floor plan. When they can&apos;t picture the 
          <br />
         result, they hesitate, and hesitation costs you.
        </p>
      </div>

      <hr className="border-[#114046] mt-12 md:mt-16 3xl:mt-28" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 3xl:gap-24 mt-12 md:mt-16 3xl:mt-28">
        {problems.map((problem) => (
          <div key={problem.title}>
            <h3 className="text-small-bold">{problem.title}</h3>
            <p className="text-small text-[#7D7D7D] mt-4 3xl:mt-8">
              {problem.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}