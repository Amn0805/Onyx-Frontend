import React from "react";
import ServiceCard from "./ServiceCard";
import OurServicesImages from "./OurServicesImages";

const services = [
  {
    title: "2D Architectural Drafting & Technical Drawings",
    desc: "Our precision-driven 2D drafting services ensure that your blueprints, floor plans, and technical drawings are clear, detailed, and aligned with industry standards. We support architects and designers with accurate documentation for construction and visualization.",
    imgUrl: "/studio/design.svg",
  },
  {
    title: "3D Modeling & Asset Creation",
    desc: "From detailed architectural structures to furniture and urban landscapes, we provide high-quality 3D models optimized for visualization, animation, and virtual experiences. Our models maintain accuracy, efficiency, and seamless integration into any workflow.",
    imgUrl: "/studio/modeling.svg",
  },
  {
    title: "Concept Design & Visualization Support",
    desc: "From early-stage concept sketches to fully developed visualizations, we help bring architectural visions to life. Whether you need conceptual renders, mood imagery, or experimental designs, our team is here to enhance your creative process.",
    imgUrl: "/studio/pano.svg",
  },
  {
    title: "Photorealistic 3D Rendering",
    desc: "We create high-end, photorealistic 3D visualizations that bring architectural designs to life with unmatched realism. Whether it's interior or exterior spaces, our renders capture lighting, materials, and atmosphere with absolute precision.",
    imgUrl: "/studio/artTherapist.svg",
  },
  {
    title: "3D Architectural Animation",
    desc: "Take your projects to the next level with cinematic 3D animations. Our team crafts immersive architectural walkthroughs and flyovers that showcase designs in motion, providing a compelling visual experience for presentations, marketing, and client approvals.",
    imgUrl: "/studio/animation.svg",
  },
  {
    title: "High-Quality 3D Product Visualization",
    desc: "Beyond architecture, we specialize in 3D product visualization for furniture, appliances, and industrial designs. Our detailed, lifelike renders help businesses showcase products with realistic textures, materials, and lighting for marketing and branding.",
    imgUrl: "/studio/commericial.svg",
  },
];

const OurServices = () => {
  return (
    <>
      <h1 className="text-center heading mb-[5%]">
        Our Services
      </h1>
      <div className="px-[2%] flex justify-evenly flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
        
      </div>
    </>
  );
};

export default OurServices;
