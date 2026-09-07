"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navItems, services } from "./navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Keeps the existing sidebar behaviour — overlay, right slide-in, tap to close.
 * Services expand in place rather than opening a shrunken mega menu.
 */
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = () => {
    setServicesOpen(false);
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={close}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-72 md:w-96 max-w-[85vw] bg-[#F1F3F4] text-black shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <span className="font-medium">Menu</span>
          <button onClick={close} className="transform rotate-45 text-xl leading-none">
            +
          </button>
        </div>

        <nav className="flex flex-col gap-5 p-5">
          {navItems.map((item) =>
            item.megaMenu ? (
              <div key={item.label} className="flex flex-col gap-4">
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex items-center justify-between gap-2 text-left"
                >
                  <span>{item.label}</span>
                  <span className="text-xl leading-none">
                    {servicesOpen ? "−" : "+"}
                  </span>
                </button>

                {servicesOpen && (
                  <div className="flex flex-col gap-3 pl-4 text-sm">
                    {services.map((service) => (
                      <Link key={service.href} href={service.href} onClick={close}>
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href ?? "/"} onClick={close}>
                {item.label}
              </Link>
            )
          )}
        </nav>
      </aside>
    </>
  );
}