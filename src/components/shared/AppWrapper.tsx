"use client";
import { usePathname } from "next/navigation";
import { Header, LowerFooter } from "@/components/shared";
import PageTransition from "@/components/shared/PageTransition";
import ScrollToTop from "@/components/shared/ScrollToTop";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith("/dashboard");
    const isHomePage = pathname === "/";

    return (
        <>
            {!isDashboard && <PageTransition />}
            {!isDashboard && <Header />}
            {!isDashboard && <ScrollToTop />}

            {/*
              The header is fixed, so it no longer occupies flow. Home keeps its
              full-bleed hero underneath it, as before; every other page is
              offset by exactly the header's height at each breakpoint.
            */}
            <main
                className={`flex-grow ${!isDashboard && !isHomePage ? "pt-12 lg:pt-16 3xl:pt-28 4xl:pt-40" : ""
                    }`}
            >
                {children}
            </main>

            {!isDashboard && <LowerFooter />}
        </>
    );
}