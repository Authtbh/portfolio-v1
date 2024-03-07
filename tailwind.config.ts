import { Space_Grotesk, Space_Mono } from "next/font/google";
import { space } from "postcss/lib/list";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-brown": "#dba895",
        "secondary-brown": "#1e1818",
        idktbh: "#252222",
        idkfr: "#2a2727",
        idkfrl: "#eed8d1",
        idklol: "#211e1e",
      },
      fontSize: {
        clamp: "clamp(1rem, 6rem, 5rem)",
      },
      spacing: {
        "81": "5rem",
        "82": "12rem",
        "130": "16rem",
      },
    },
  },
  plugins: [],
};
export default config;
