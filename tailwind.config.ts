import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2048px",
        "4xl": "3840px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      /**
       * 4K type scale, used by the classes in globals.css. In vw so text grows
       * with the screen and keeps the same proportions as a desktop. Each token
       * sets size and line-height together.
       */
      fontSize: {
        "heading-4k": ["3.4vw", { lineHeight: "1" }],
        "body-4k": ["1.1vw", { lineHeight: "1.75" }],
        "label-4k": ["0.85vw", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
} satisfies Config;