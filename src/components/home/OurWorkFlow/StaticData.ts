import type { ProcessStep } from "@/components/shared/ProcessSteps";

export const list: ProcessStep[] = [
  {
    title: "01 — Brief & Drawings",
    body: "We review your CAD, elevations and references, flag anything ambiguous, and confirm scope before a single view is priced.",
    image: "/home/work-flow/1.webp",
    alt: "Architectural drawings and references under review",
  },
  {
    title: "02 — Modelling & Camera",
    body: "The architectural model is built from your drawings. You approve grayscale camera previews before any material work begins.",
    image: "/home/work-flow/2.webp",
    alt: "A 3D architectural model being built and lit",
  },
  {
    title: "03 — Materials & Light",
    body: "Two colour preview stages cover materials, landscaping, entourage and lighting, with refinements included at each.",
    image: "/home/work-flow/3.webp",
    alt: "Materials and lighting being refined on a draft render",
  },
  {
    title: "04 — Final Delivery",
    body: "High-resolution frames delivered in print and web formats, with full commercial usage on handover.",
    image: "/home/work-flow/4.webp",
    alt: "Final high-resolution renders delivered to the client",
  },
];