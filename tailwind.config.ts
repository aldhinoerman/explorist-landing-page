import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#177BA5",
      secondary: "#292D32",
      dark: "#292D32",
      danger: "#F178B6",
      success: "#2D8985",
      white: "#ffffff",
      whiteblue: "#f6f6f6",
      phone: "#03E78B",
      whatsapp: "#49E670",
      mesenger: "#1E88E5",
      gray: "#898989",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#177BA5",
          secondary: "#292D32",
          dark: "#292D32",
          danger: "#F178B6",
          success: "#2D8985",
          white: "#ffffff",
          whiteblue: "#f6f6f6",
          phone: "#03E78B",
          whatsapp: "#49E670",
          mesenger: "#1E88E5",
          gray: "#898989",
        },
      },
      "light",
    ],
  },
};
export default config;
