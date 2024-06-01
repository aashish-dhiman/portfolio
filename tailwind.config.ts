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
        bgDark: "#121212",
        // bgDark: "#0b192f",
        textPara: "#57556C",
        heading: "#3182CE",
        textWhite: "#FAF7F2",
        textLight: "#9ca3af",
        darkHover: "#18191E",
      },
    },
  },
  plugins: [],
};
export default config;
