import React from "react";
import FAQ from "./FAQ";

function FAQs() {
  return (
    <section className="p-5 md:p-10 lg:p-28 3xl:p-40">
      {/* Heading left, questions right. items-stretch lets both columns share
          a height so the heading can centre itself against the list. */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 3xl:gap-40 items-stretch">
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <h2 className="heading max-lg:text-center">Have Any Doubt?</h2>
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
    question: "What is 3D architectural rendering?",
    answer:
      "3D architectural rendering is the process of creating lifelike digital visuals of architectural designs before they are built. At Onyx Renders, we specialize in photorealistic renderings that bring your projects to life, helping architects, designers, and developers visualize their concepts with stunning detail.",
  },
  {
    question: "How long does the 3D rendering process take?",
    answer:
      "Project timelines vary based on complexity, but a standard rendering typically takes between 3 to 7 days. If you have urgent deadlines, we also offer expedited options to meet your needs.",
  },
  {
    question: "How much does 3D rendering cost?",
    answer:
      "Pricing depends on the project's complexity, level of detail, and the number of views required. Contact us with your project details, and we'll provide a customized quote tailored to your vision and budget.",
  },
  {
    question: "What information do you need to start a project?",
    answer:
      "To begin, we require architectural drawings (CAD files or sketches), material and texture references, lighting preferences, and any specific design details you'd like included. The more details you provide, the more accurate and realistic the final render will be.",
  },
  {
    question: "Can I request changes or revisions to the renderings?",
    answer:
      "Yes! We want to ensure the final visualization meets your expectations. We offer a set number of revisions based on the project scope. Additional changes beyond the included revisions may incur extra charges, but we always strive to deliver exactly what you need.",
  },
];

export default FAQs;