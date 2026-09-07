"use client";
import { blurDataURL } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { serviceColumns, services, type ServiceLink } from "./navigation";

interface ServicesMegaMenuProps {
  onNavigate: () => void;
}

/**
 * Two link columns, a 3:4 preview and a description bar. One `active` state
 * drives both the image and the text, so no JSX is repeated per service.
 */
export default function ServicesMegaMenu({ onNavigate }: ServicesMegaMenuProps) {
  const [active, setActive] = useState<ServiceLink>(services[0]);

  return (
    <div className="absolute left-0 top-full w-full bg-[#F1F3F4] text-black shadow-lg border-t border-[#114046]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] max-h-[75vh] overflow-y-auto">
        {/* Links */}
        <div className="grid grid-cols-2 gap-x-6 xl:gap-x-12 3xl:gap-x-20 gap-y-1 p-6 xl:p-10 3xl:p-20 4xl:p-32">
          {serviceColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col">
              {column.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={onNavigate}
                  onMouseEnter={() => setActive(service)}
                  onFocus={() => setActive(service)}
                  className={`para 4xl:text-4xl uppercase px-3 py-2 3xl:px-6 3xl:py-4 4xl:px-10 4xl:py-6 transition-colors duration-200 ${active.href === service.href
                    ? "bg-[#114046] text-white"
                    : "text-black hover:text-[#114046]"
                    }`}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Preview */}
        <div className="hidden lg:block border-l border-[#114046] p-8 xl:p-14 3xl:p-28 4xl:p-40">
          <div className="relative w-[220px] xl:w-[260px] 3xl:w-[520px] 4xl:w-[760px] aspect-[4/5] overflow-hidden rounded-md bg-gray-200">
            <AnimatePresence initial={false}>
              <motion.div
                key={active.image}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <Image
                  src={active.image}
                  alt={active.label}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="border-t border-[#114046] px-6 py-5 xl:px-10 3xl:px-20 3xl:py-10 4xl:px-32 4xl:py-16">
        <motion.p
          key={active.href}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-small 4xl:text-3xl italic text-center text-[#7D7D7D] max-w-5xl 3xl:max-w-[100rem] 4xl:max-w-[140rem] mx-auto"
        >
          &ldquo; {active.description} &rdquo;
        </motion.p>
      </div>
    </div>
  );
}