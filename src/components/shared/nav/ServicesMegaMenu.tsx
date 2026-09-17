"use client";
import { blurDataURL } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { featuredService, serviceColumns, services, type ServiceLink } from "./navigation";

interface ServicesMegaMenuProps {
  onNavigate: () => void;
}

/**
 * Four grouped columns plus a preview panel. One `active` state drives the
 * image, title and description, so no JSX repeats per service.
 */
export default function ServicesMegaMenu({ onNavigate }: ServicesMegaMenuProps) {
  const [active, setActive] = useState<ServiceLink>(featuredService);

  return (
    <div className="absolute left-0 top-full w-full bg-[#F1F3F4] text-black shadow-lg border-t border-[#114046]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] max-h-[80vh] overflow-y-auto">
        {/* Grouped link columns */}
              {/* Three columns; the third stacks two groups vertically. */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 3xl:gap-x-20 gap-y-12 p-8 xl:p-12 3xl:p-24">
          {serviceColumns.map((column, columnIdx) => (
            <div key={columnIdx} className="flex flex-col gap-10 3xl:gap-20">
              {column.map((group) => (
                <div key={group.title} className="flex flex-col gap-4 3xl:gap-8">
                  <h3 className="text-x-small uppercase tracking-wider text-[#7D7D7D]">
                    {group.title}
                  </h3>
                  <div className="flex flex-col gap-3 3xl:gap-6">
                    {group.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={onNavigate}
                        onMouseEnter={() => setActive(service)}
                        onFocus={() => setActive(service)}
                        className={`text-small transition-colors duration-200 ${
                          active.href === service.href
                            ? "text-[#114046]"
                            : "text-black hover:text-[#114046]"
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Preview */}
        <div className="hidden lg:block border-l border-[#114046] p-8 xl:p-12 3xl:p-24">
          <div className="w-[280px] xl:w-[320px] 3xl:w-[600px]">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#bac3c833]">
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
                    sizes="600px"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div key={active.href} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h4 className="sub-heading mt-6 3xl:mt-12">{active.label}</h4>
              <p className="text-small italic text-[#7D7D7D] mt-3 3xl:mt-6">
                {active.description}
              </p>
              <Link
                href={active.href}
                onClick={onNavigate}
                className="text-small underline underline-offset-4 inline-block mt-5 3xl:mt-10 hover:text-[#114046] transition-colors"
              >
                View service
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-[#114046] px-8 xl:px-12 3xl:px-24 py-5 3xl:py-10 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/services/exterior-3d-renderings"
          onClick={onNavigate}
          className="text-small underline underline-offset-4 hover:text-[#114046] transition-colors"
        >
          View all {services.length} services
        </Link>
        <p className="text-small text-[#7D7D7D]">
          Not sure what you need?{" "}
          <Link
            href="/studio/#scheduleCall"
            onClick={onNavigate}
            className="text-black underline underline-offset-4 hover:text-[#114046] transition-colors"
          >
            Get a free recommendation
          </Link>
        </p>
      </div>
    </div>
  );
}