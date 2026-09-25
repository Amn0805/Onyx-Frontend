import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        /* ─── 4K Scaling with Arbitrary Values ─────────────────────────────
           
           From 3xl (2048px) up, sizes use arbitrary vw values (e.g., 3xl:text-[3.4vw])
           instead of custom tokens. This ensures Tailwind properly generates responsive
           variants and works with all breakpoint modifiers.
           
           The vw values scale proportionally with screen width on 4K displays,
           keeping them readable at desktop proportions rather than 2048-pixel
           sizes stranded on a wider canvas.
           
           Sizes used in globals.css:
           - Headings: 3xl:text-[3.4vw]  (70px on 2048px, 130px on 3840px)
           - Body: 3xl:text-[1.1vw]      (22px on 2048px, 42px on 3840px)
           - Labels: 3xl:text-[0.85vw]   (17px on 2048px, 33px on 3840px)
        */
      },
      fontFamily: {
        "century-gothic": ["var(--font-century-gothic)", "sans-serif"],
      },
      colors: {
        /* Brand colors — use these in tailwind utilities */
        "theme-primary": "#114046",      /* Main teal */
        "theme-accent": "#4a5f66",       /* Accent teal */
        "text-primary": "#7D7D7D",       /* Body text gray */
        "text-light": "#BCBCBC",         /* Light gray */
      },
      boxShadow: {
        /* Custom shadows used throughout */
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        /* Responsive spacing scale — use with 3xl: breakpoint for 4K */
        /* Example: px-6 md:px-16 lg:px-20 3xl:px-[5.5vw] */
      },
      animation: {
        /* Animations for sliders and marquees */
      },
    },
  },
  plugins: [],
};
export default config;