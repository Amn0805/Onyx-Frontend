// Card grid — six steps, three per row on desktop. Server component: no state,
// no client JS. The previous hover-to-swap-image version needed both.

import Image from "next/image";
import { list } from "./StaticData";
import { blurDataURL } from "@/constants";

export default function OurWorkFlow() {
  return (
    <section className="p-5 md:p-10 3xl:p-24">
      <div className="text-center max-w-3xl 3xl:max-w-6xl mx-auto">
        <h2 className="heading">Process from Vision to Reality</h2>
        <p className="text-small text-[#7D7D7D] mt-6 3xl:mt-12">
          From first brief to final delivery, every stage is reviewed with you
          before it moves forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 3xl:gap-10 mt-12 md:mt-20 3xl:mt-32">
        {list.map((item) => (
          <article
            key={item.number}
            className="bg-[#bac3c833] p-6 3xl:p-12 flex flex-col"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="sub-heading text-[#114046]">{item.number}</span>

              {/* 4:3 slot, fixed at every breakpoint. A placeholder holds the
                  space until an image path is added to StaticData. */}
                            <div className="relative w-1/2 aspect-[7/8] bg-[#114046]/10 shrink-0">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.alt ?? ""}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                )}
              </div>
            </div>

            <h3 className="sub-heading mt-8 3xl:mt-16">{item.title}</h3>
            <p className="text-small text-[#7D7D7D] mt-4 3xl:mt-8">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}