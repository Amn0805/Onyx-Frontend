import Image from "next/image";
import { blurDataURL } from "@/constants";
import { urlFor, getReviews } from "@/lib/sanity";
import TestimonialAccordion, {
  type TestimonialCard,
} from "./TestimonialAccordion";

interface Testimony {
  name: string;
  designation: string;
  img: any;
  logo: any;
  review: string;
}

export default async function ClientReviews() {
  const testimonials: Testimony[] = await getReviews();

  // URLs resolved here so the interactive child stays a thin client component.
  // Portrait crop respects each image's hotspot, so faces survive the narrow
  // collapsed state.
  const cards: TestimonialCard[] = testimonials.map((t) => ({
    name: t.name,
    designation: t.designation,
    review: t.review,
   imgUrl: urlFor(t.img).width(1400).height(1400).fit("crop").auto("format").url(),
    logoUrl: urlFor(t.logo).width(400).auto("format").url(),
  }));

  return (
    <section className="p-5 md:p-10 3xl:p-24 flex flex-col gap-6 3xl:gap-20 overflow-x-hidden">
      <h2 className="heading text-center">
        See What Our Clients Have to Say For Us
      </h2>

      <div className="flex items-center gap-2 rounded-[0.78vw] poppins cursor-pointer border border-black hover:border-[#114046] hover:text-white hover:bg-[#114046] w-fit px-4 py-2 3xl:px-6 3xl:py-4 mx-auto transition-colors">
        <div className="-space-x-2 flex">
          {cards.slice(0, 5).map((card) => (
            <div key={card.name} className="aspect-square w-[30px] relative">
              <Image
                src={card.imgUrl}
                alt=""
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="rounded-full border border-inherit object-cover"
                fill
              />
            </div>
          ))}
        </div>
        <span className="text-small">Our Community</span>
      </div>

      <TestimonialAccordion items={cards} />
    </section>
  );
}