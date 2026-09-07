export interface ListItem {
  number: string;
  title: string;
  text: string;
  /** Short labels shown under the description when the row is open. */
  tags: string[];
  img: string;
  alt: string;
}

export const list: ListItem[] = [
  {
    number: "01",
    title: "Brief & Drawings",
    text: "You provide architectural drawings, material references and lighting preferences. We confirm scope and flag anything ambiguous before work begins.",
    tags: ["CAD Files", "References", "Scope"],
    img: "/home/work-flow/1.webp",
    alt: "Architectural drawings and material references under review",
  },
  {
    number: "02",
    title: "Modelling & Scene Setup",
    text: "Your concept becomes a detailed 3D model, with accurate lighting, textures and camera angles set up to build a realistic composition.",
    tags: ["3D Model", "Lighting", "Cameras"],
    img: "/home/work-flow/2.webp",
    alt: "A 3D architectural model being built and lit",
  },
  {
    number: "03",
    title: "Draft & Revisions",
    text: "We share an initial render for your feedback. Texture adjustments, lighting tweaks and design refinements are made until the frame is right.",
    tags: ["Draft Render", "Feedback", "Refinement"],
    img: "/home/work-flow/3.webp",
    alt: "A draft render being reviewed and refined",
  },
  {
    number: "04",
    title: "Final Delivery",
    text: "High-resolution images delivered in your preferred format, ready for presentations, marketing or client proposals.",
    tags: ["High Resolution", "Any Format", "Full Rights"],
    img: "/home/work-flow/4.webp",
    alt: "Final high-resolution renders delivered to the client",
  },
];