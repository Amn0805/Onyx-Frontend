// src/components/shared/LowerFooter.tsx
//
// Rendered on every non-dashboard page via AppWrapper. Server component —
// the previous version was "use client" without needing to be.

import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/constants";
import { FacebookIcon, Instagram, LinkedinIcon, Mail, Phone, YoutubeIcon } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/place/5900+Balcones+Dr+Suit+100,+Austin,+TX+78731,+USA/@30.3415589,-97.7549546,17z";

const studioLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/exterior-3d-renderings" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/studio" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/studio/#scheduleCall" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/onyxrender", Icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCQFBS73Re0F3bVWtfGvnfhQ", Icon: YoutubeIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/106947372", Icon: LinkedinIcon },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61574497564060", Icon: FacebookIcon },
];

/**
 * Rendered letter by letter so alternating characters can carry different
 * weights — O bold, N light, Y bold, and so on. The space keeps its index,
 * so the alternation continues unbroken across both words.
 */
const WORDMARK = "ONYX RENDERS";
const WORDMARK_SIZE = `${(110 / WORDMARK.length).toFixed(1)}vw`;

export default function LowerFooter() {
  return (
    <footer className="bg-black text-white poppins overflow-hidden">
      <div className="px-[6vw] pt-16 3xl:pt-32 pb-8 3xl:pb-16 flex flex-col lg:flex-row gap-12 lg:gap-16 3xl:gap-32 justify-between">
        {/* Logo + address */}
        <div className="flex flex-col gap-5 3xl:gap-10 max-lg:items-center max-lg:text-center">
          <Link href="/" className="w-fit">
            <Image
              placeholder="blur"
              blurDataURL={blurDataURL}
              src="/logo/logo-without-text-white.svg"
              alt="Onyx Renders"
              width={120}
              height={50}
              className="w-20 3xl:w-40 h-auto"
            />
          </Link>

          <address className="not-italic text-sm 3xl:text-2xl text-[#BCBCBC] leading-relaxed">
            <Link href={MAPS_URL} target="_blank" className="hover:text-white transition-colors block">
              5900 Balcones Drive, Suite 100
              <br />
              Austin, TX 78731
            </Link>

            <Link
              href="mailto:info@onyxrenders.com"
              className="flex items-center gap-2 mt-4 3xl:mt-8 hover:text-white transition-colors max-lg:justify-center"
            >
              <Mail className="w-4 3xl:w-8 shrink-0" /> info@onyxrenders.com
            </Link>
            <span className="flex items-center gap-2 mt-2 3xl:mt-4 max-lg:justify-center">
              <Phone className="w-4 3xl:w-8 shrink-0" /> +1 512 325 5121
            </span>
          </address>
        </div>

        {/* Link columns */}
        <div className="flex flex-wrap gap-10 md:gap-16 3xl:gap-32 max-lg:justify-center max-lg:text-center">
          <nav className="flex flex-col gap-3 3xl:gap-6">
            <h2 className="text-sm 3xl:text-2xl font-medium">Studio</h2>
            {studioLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm 3xl:text-2xl text-[#BCBCBC] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3 3xl:gap-6">
            <h2 className="text-sm 3xl:text-2xl font-medium">Legal</h2>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm 3xl:text-2xl text-[#BCBCBC] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3 3xl:gap-6">
            <h2 className="text-sm 3xl:text-2xl font-medium">Social</h2>
            {socialLinks.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 3xl:gap-4 text-sm 3xl:text-2xl text-[#BCBCBC] hover:text-white transition-colors max-lg:justify-center"
              >
                <Icon className="w-4 3xl:w-8 shrink-0" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
         {/* Oversized wordmark, aligned to the bottom-right corner. The only
          text-only logo available is the theme (teal) version, so it is
          inverted to read against black. Drop `brightness-0 invert` if the
          teal is wanted. */}
      <div className="relative flex justify-end pr-[4vw]">
        <Image
          src="/logo/logo1-text-only-theme.svg"
          alt=""
          width={1200}
          height={300}
          sizes="60vw"
          className="w-[60vw] h-auto brightness-0 invert"
        />
      </div>

      <div className="px-[6vw] pb-6 3xl:pb-12">
        <p className="text-[0.7rem] 3xl:text-base text-[#BCBCBC]">
          © {new Date().getFullYear()} Onyx Renders LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}