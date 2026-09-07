// src/app/services/_components/HowWeWork.tsx
import type { ImageItem } from "@/lib/sanity";
import type { ServiceContent } from "../_types";
import ServiceVideo from "./ServiceVideo";
import HowWeWorkGallery from "./HowWeWorkGallery";

export default function HowWeWork({
  content,
  video,
  images,
  placeholderVideoPoster,
  placeholderImages,
}: {
  content: ServiceContent["howWeWork"];
  video: string | null;
  images: ImageItem[];
  placeholderVideoPoster: string;
  placeholderImages: ImageItem[];
}) {
  return (
    <section className="p-5 md:p-12 3xl:p-24">
      <div className="max-w-5xl 3xl:max-w-[90rem]">
        <h2 className="sub-heading">{content.heading}</h2>
        <p className="text-small text-[#7D7D7D] mt-6 3xl:mt-[2vw] max-w-3xl 3xl:max-w-6xl">
          {content.body}
        </p>
      </div>

      <div className="mt-10 md:mt-16 3xl:mt-24">
        <ServiceVideo src={video} poster={placeholderVideoPoster} />
      </div>

      {/* Deliberately wider than the gap above the video, so the row reads as
          a separate block rather than a caption to it. */}
      <div className="mt-16 md:mt-24 lg:mt-32 3xl:mt-48">
        <HowWeWorkGallery
          steps={content.steps}
          images={images}
          placeholders={placeholderImages}
        />
      </div>
    </section>
  );
}