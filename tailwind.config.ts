import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E8784",
        secondary: "#FDD6BA",
        "t-orange": "#E94F37",
        "t-gray": "#83888F",
        "t-cream": "#FEFCF7",
        "t-dark": "#262626",
      },
    },
  },
  plugins: [],
};
export default config;
