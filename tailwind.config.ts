import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: "#6366F1", // Indigo
        accent: "#F59E0B", // Amber
        lightBg: "#F3F4F6", // Light Gray
        darkText: "#111827",
        subText: "#6B7280",
        success: "#10B981",
      },
    },
  },
  plugins: [],
};
export default config;
