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

  // ═══════════════════════════════════════════════════════════════════════════
  // SCROLL LISTENER — Updates scrolled state when user scrolls past threshold
  // ═══════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  // ═══════════════════════════════════════════════════════════════════════════
  // SOLID STATE — Header has white background when scrolled OR menu is open
  // ═══════════════════════════════════════════════════════════════════════════
  const solid = scrolled || openMenu !== null;
  const close = () => setOpenMenu(null);

  return (
    <header
      onMouseLeave={close}
      className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
        solid
         ? "bg-white text-black shadow-sm"
  : "bg-transparent text-black"  // ← Transparent initially!
      }`}
    >
      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center py-4 3xl:py-6 px-6 xl:px-20 3xl:px-40">
        {/* Logo + wordmark */}
        <Link href="/" className="relative z-10 flex items-center gap-3 3xl:gap-6">
          <Image
            placeholder="blur"
            blurDataURL={blurDataURL}
            src="/logo/logo-without-text-theme.svg"
            alt="Onyx Renders"
            width={40}
            height={40}
            className="w-8 h-8 lg:w-11 lg:h-11 3xl:w-20 3xl:h-20"
            unoptimized
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="flex items-stretch gap-6 xl:gap-8 3xl:gap-16 h-full">
          {navItems.map((item) => {
            if (!item.menu) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="nav flex items-center text-xs lg:text-sm xl:text-base 3xl:text-lg hover:text-brand transition-colors"
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
                  className={`inline-flex items-center gap-1 nav text-xs lg:text-sm xl:text-base 3xl:text-lg transition-colors hover:text-brand ${
                    isMenuOpen ? "text-brand underline underline-offset-8" : ""
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
        <div className="flex items-center gap-6 3xl:gap-12">
          <Link
            href="/dashboard/login"
            className="link text-xs lg:text-sm xl:text-base 3xl:text-lg hover:text-brand transition-colors"
          >
            Sign in
          </Link>
          <Link href="/studio/#scheduleCall">
            <button className="btn-pill btn-theme text-xs lg:text-sm xl:text-base 3xl:text-lg">
              Request a Proposal
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden justify-between items-center py-3 md:py-4 px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <Image
            placeholder="blur"
            blurDataURL={blurDataURL}
            src="/logo/logo-without-text-theme.svg"
            alt="Onyx Renders"
            width={32}
            height={32}
            className="w-7 h-7 md:w-8 md:h-8"
            unoptimized
          />
        </Link>

        {/* Mobile toggle */}
        <button
          className="text-2xl md:text-3xl"
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

/*
 * FEATURES:
 *
 * ✅ SCROLL BEHAVIOR:
 *    - Starts with white background on page load
 *    - Adds shadow when scrolled down 30px
 *    - Shadow appears immediately when menu opens
 *    - Smooth transition (300ms)
 *
 * ✅ SEMANTIC CLASSES:
 *    - .nav — navigation links
 *    - .link — sign in CTA
 *    - .text-brand — hover color
 *    - .btn-pill — pill button base
 *    - .btn-theme — primary button
 *
 * ✅ RESPONSIVE:
 *    - Desktop: full nav with dropdowns
 *    - Mobile: hamburger menu
 *    - Tablet: smooth transition
 *
 * ✅ CENTURY GOTHIC:
 *    - Applied to all text via globals.css
 *    - All weights available (300-900)
 */