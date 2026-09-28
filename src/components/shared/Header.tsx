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

const SCROLL_THRESHOLD = 30;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const isHomePage = pathname === "/";

  return (
    <header
      onMouseLeave={close}
      className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
        isHomePage
          ? solid
            ? "bg-white text-black shadow-sm"
            : "bg-transparent text-black"
          : "bg-white text-black shadow-sm"
      }`}
    >
      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center py-4 3xl:py-6 px-6 xl:px-20 3xl:px-40">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-3 3xl:gap-6">
          <Image
            placeholder="blur"
            blurDataURL={blurDataURL}
            src="/logo/logo-without-text-theme.svg"
            alt="Onyx Renders"
            width={40}
            height={40}
            style={{
              width: 'clamp(24px, calc(24px + 1.76vw), 60px)',
              height: 'clamp(24px, calc(24px + 1.76vw), 60px)',
            }}
            unoptimized
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-stretch gap-6 xl:gap-8 3xl:gap-16 h-full">
          {navItems.map((item) => {
            if (!item.menu) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="nav flex items-center hover:text-brand transition-colors"
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
                  className={`inline-flex items-center gap-1 nav transition-colors hover:text-brand ${
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

        {/* Sign in + Button — COMPACT GAP */}
        <div className="flex items-center gap-3 md:gap-4 3xl:gap-6">
          <Link
            href="/dashboard/login"
            className="nav text-secondary hover:text-brand transition-colors"
          >
            Sign in
          </Link>
          <Link href="/studio/#scheduleCall">
            <button className="btn-pill btn-theme">
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

      {/* Dropdowns */}
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
 * ULTRA-COMPACT HEADER (Updated):
 *
 * ✅ LOGO:
 *    Uses clamp sizing (32px → 80px)
 *    Responsive across all screens
 *
 * ✅ NAVIGATION:
 *    Uses .nav class
 *    Font-size: 12px → 18px
 *    Consistent across all breakpoints
 *
 * ✅ SIGN IN:
 *    Uses .nav class (SAME AS NAVIGATION)
 *    Font-size: 12px → 18px
 *    MATCHES BUTTON TEXT SIZE ✓
 *
 * ✅ BUTTON:
 *    Uses .btn-pill .btn-theme
 *    Text: 12px → 18px (SAME AS SIGN IN)
 *    Padding: 12px → 40px (h), 3px → 12px (v)
 *    Ultra-compact sizing
 *
 * ✅ GAP BETWEEN SIGN IN & BUTTON:
 *    gap-3 md:gap-4 3xl:gap-6 (COMPACT)
 *    Tight spacing throughout
 *
 * ✅ TEXT SIZE MATCHING:
 *    Sign in text = Navigation text = Button text
 *    All use .nav token (12px → 18px)
 *    Identical size at all breakpoints ✓
 */