"use client";
import { blurDataURL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import MobileMenu from "./nav/MobileMenu";
import ServicesMegaMenu from "./nav/ServicesMegaMenu";
import CardsMenu from "./nav/CardsMenu";
import { navItems } from "./nav/navigation";

/** Same threshold ScrollToTop already uses. */
const SCROLL_THRESHOLD = 30;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // Label of the open menu, or null. One value, so opening one closes another.
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  const solid = scrolled || openMenu !== null;
  const close = () => setOpenMenu(null);

  return (
    <header
      onMouseLeave={close}
      className={`fixed top-0 left-0 w-full z-40 text-small transition-colors duration-300 ${
        solid
          ? "bg-[#F1F3F4] text-black shadow-sm"
          : `bg-transparent ${isHomePage ? "text-white" : "text-black"}`
      }`}
    >
          <div className="flex justify-between items-center h-12 lg:h-16 3xl:h-28 4xl:h-40 px-4 md:px-8 3xl:px-16 4xl:px-24">
        {/* Logo + wordmark */}
        <Link href="/" className="relative z-10 flex items-center gap-3 3xl:gap-6">
          <Image
            placeholder="blur"
            blurDataURL={blurDataURL}
            src={solid || !isHomePage ? "/logo/logo-without-text-theme.svg" : "/logo/logo-without-text-white.svg"}
            alt="Onyx Renders"
            width={40}
            height={40}
            className="w-8 h-8 lg:w-11 lg:h-11 3xl:w-20 3xl:h-20"
            unoptimized
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-stretch gap-6 xl:gap-8 3xl:gap-16 h-full">
          {navItems.map((item) => {
            if (!item.menu) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center hover:text-[#114046] transition-colors"
                >
                  {item.label}
                </Link>
              );
            }

            const isMenuOpen = openMenu === item.label;

            return (
              <div
                key={item.label}
                onMouseEnter={() => setOpenMenu(item.label)}
                className="flex items-center h-full"
              >
                <button
                  type="button"
                  aria-expanded={isMenuOpen}
                  onClick={() => setOpenMenu(isMenuOpen ? null : item.label)}
                  className={`inline-flex items-center gap-1 transition-colors hover:text-[#114046] ${
                    isMenuOpen ? "text-[#114046] underline underline-offset-8" : ""
                  }`}
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
                    className={`transition-transform duration-200 3xl:w-5 3xl:h-5 ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M2.5 4.5L6 8L9.5 4.5" />
                  </svg>
                </button>
              </div>
            );
          })}
        </nav>

        {/* Sign in + CTA */}
        <div className="hidden lg:flex items-center gap-6 3xl:gap-12">
          <Link
            href="/dashboard/login"
            className="hover:text-[#114046] transition-colors"
          >
            Sign in
          </Link>
          <Link href="/studio/#scheduleCall">
        <button className="bg-[#114046] text-white rounded-full hover:bg-[#0e3035] transition-colors px-5 py-3 text-sm 3xl:px-8 3xl:py-4 3xl:text-lg">
              Get a free quote
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-3xl lg:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Dropdowns — inside the header so hover stays continuous */}
      {openMenu && (
        <div className="hidden lg:block">
          {navItems.map((item) => {
            if (openMenu !== item.label || !item.menu) return null;
            return item.menu === "services" ? (
              <ServicesMegaMenu key={item.label} onNavigate={close} />
            ) : (
              <CardsMenu key={item.label} cards={item.cards} onNavigate={close} />
            );
          })}
        </div>
      )}

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}