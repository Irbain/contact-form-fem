import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "green-200": "hsl(148, 38%, 91%)",
        "green-600": "hsl(169, 82%, 27%)",
        "gray-500": "hsl(186, 15%, 59%)",
        "gray-900": "hsl(187, 24%, 22%)",
        red: "hsl(0, 66%, 54%)",
      },
    },
  },
  plugins: [],
};
export default config;
