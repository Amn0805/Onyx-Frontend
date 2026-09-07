"use client";
import { blurDataURL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import MobileMenu from "./nav/MobileMenu";
import ServicesMegaMenu from "./nav/ServicesMegaMenu";
import { navItems } from "./nav/navigation";

/** Same threshold ScrollToTop already uses. */
const SCROLL_THRESHOLD = 30;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mega menu when a navigation completes.
  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  // Solid while scrolled or while the menu is open, so links stay readable
  // against the white panel.
  const solid = scrolled || servicesOpen;

  return (
    <header
      onMouseLeave={() => setServicesOpen(false)}
      className={`fixed top-0 left-0 w-full z-40 text-small 3xl:text-4xl 4xl:text-5xl transition-colors duration-300 ${solid
        ? "bg-[#F1F3F4] text-black shadow-sm"
        : `bg-transparent ${isHomePage ? "text-white" : "text-black"}`
        }`}
    >
      <div className="flex justify-between items-center h-12 lg:h-16 3xl:h-28 4xl:h-40 px-4 md:px-8 3xl:px-16 4xl:px-24">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Image
            placeholder="blur"
            blurDataURL={blurDataURL}
            src="/logo/logo-without-text-theme.svg"
            alt="logo"
            width={40}
            height={40}
            className="w-8 h-8 lg:w-11 lg:h-11 3xl:w-20 3xl:h-20 4xl:w-32 4xl:h-32"
            unoptimized
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-stretch gap-6 lg:gap-10 3xl:gap-20 4xl:gap-28 h-full">
          {navItems.map((item) =>
            item.megaMenu ? (
              <div
                key={item.label}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center h-full"
              >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1 hover:text-[#114046]"
                >
                  {item.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`transition-transform duration-200 3xl:w-6 3xl:h-6 4xl:w-9 4xl:h-9 ${servicesOpen ? "rotate-180" : ""
                      }`}
                  >
                    <path d="M2.5 4.5L6 8L9.5 4.5" />
                  </svg>
                </button>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "/"}
                className="flex items-center hover:text-[#114046]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-3xl lg:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          =
        </button>
      </div>

      {/* Desktop mega menu — kept inside the header so hover is continuous */}
      {servicesOpen && (
        <div className="hidden lg:block">
          <ServicesMegaMenu onNavigate={() => setServicesOpen(false)} />
        </div>
      )}

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}