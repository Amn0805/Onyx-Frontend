import Image from "next/image";
import { urlFor, getReviews } from "@/lib/sanity";
import TestimonialAccordion, {
  type TestimonialCard,
} from "./TestimonialAccordion";
import { HEADING, BODY } from "@/components/shared/typography";

interface Testimony {
  name: string;
  designation: string;
  img: any;
  logo: any;
  review: string;
}

/** How many faces appear in the "Our Community" badge. */
const AVATAR_COUNT = 5;

export default async function ClientReviews() {
  const testimonials: Testimony[] = await getReviews();

  // URLs resolved here so the interactive child stays a thin client component.
  // Square crop respects each image's hotspot, so faces survive both the
  // narrow collapsed state and the wide expanded one.
  const cards: TestimonialCard[] = testimonials.map((t) => ({
    name: t.name,
    designation: t.designation,
    review: t.review,
    imgUrl: urlFor(t.img).width(2000).height(2000).fit("crop").auto("format").url(),
    logoUrl: urlFor(t.logo).width(800).auto("format").url(),
  }));

  // Separate, tiny crops for the badge — the portraits above are 2000px, far
  // too large to download for a 30px circle.
  const avatars = testimonials.slice(0, AVATAR_COUNT).map((t) => ({
    name: t.name,
    url: urlFor(t.img).width(120).height(120).fit("crop").auto("format").url(),
  }));

  return (
    <section className="p-5 md:p-10 3xl:p-24 flex flex-col gap-6 3xl:gap-20 overflow-x-hidden">
      <h2 className={`${HEADING} text-center`}>
       <span className="font-bold text-[#4a5f66]">Words</span>  from Our Esteemed  <span className="font-bold text-[#4a5f66]">Partners</span> 
      </h2>

      <div className="flex items-center gap-2 3xl:gap-4 rounded-[0.78vw] border border-black w-fit px-4 py-2 3xl:px-6 3xl:py-4 mx-auto">
        <div className="-space-x-2 3xl:-space-x-4 flex">
          {avatars.map((avatar) => (
            <div
              key={avatar.name}
              className="relative aspect-square w-[30px] 3xl:w-[2vw]"
            >
              <Image
                src={avatar.url}
                alt=""
                fill
                sizes="(max-width: 2048px) 30px, 2vw"
                className="rounded-full border border-black object-cover"
              />
            </div>
          ))}
        </div>
        <span className={BODY}>Our Community</span>
      </div>

      <TestimonialAccordion items={cards} />
    </section>
  );
}