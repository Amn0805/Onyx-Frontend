export interface ListItem {
  number: string;
  title: string;
  text: string;
  /** Empty for now — a 4:3 placeholder renders until a path is set. */
  img?: string;
  alt?: string;
}

export const list: ListItem[] = [
  {
    number: "01",
    title: "Concept Development",
    text: "We start with your vision. Drawings, references and requirements are reviewed together so the direction is agreed before any work begins.",
    img: "/placeholders/step-01.svg",
    alt: "",
  },
  {
    number: "02",
    title: "Case Study & Research",
    text: "We study the site, the materials and comparable projects, so the visualization is grounded in how the space will actually be built and used.",
    img: "/placeholders/step-02.svg",
    alt: "",
  },
  {
    number: "03",
    title: "Initial Draft",
    text: "The scene is modelled and lit, and a first draft is produced for review — composition, camera and mood established early.",
    img: "/placeholders/step-03.svg",
    alt: "",
  },
  {
    number: "04",
    title: "Comments & Feedback",
    text: "You review the draft and mark up anything that needs attention. Nothing moves forward until the direction is confirmed.",
    img: "/placeholders/step-04.svg",
    alt: "",
  },
  {
    number: "05",
    title: "Feedback Implementation",
    text: "Materials, lighting and detail are refined against your notes, with revisions carried out until the frame is right.",
    img: "/home/work-flow/1.webp",
    alt: "",
  },
  {
    number: "06",
    title: "Final Delivery",
    text: "High-resolution images delivered in your preferred format, ready for presentations, marketing or client proposals.",
    img: "/home/work-flow/2.webp",
    alt: "",
  },
];