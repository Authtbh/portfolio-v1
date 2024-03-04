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
        'primary-brown': '#eed1c7',
        'secondary-brown': '#1e1818',
        'idktbh': '#252222',
      },
      fontSize: {
        clamp: 'clamp(1rem, 6rem, 5rem)',
      },
      spacing: {
        '128': '18rem',
      }

      
    },
  },
  plugins: [],
};
export default config;
