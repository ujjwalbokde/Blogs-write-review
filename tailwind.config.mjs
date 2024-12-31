/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF", // White background
        foreground: "#171717", // Dark text color for contrast
        primary: "#079391", // Tomato Red accent color (updated)
        secondary: "#FFCC99", // Light Peach accent
        "card-bg": "#FFF3E0", // Light Beige for cards
        "border-light": "#F2E2D2", // Light Peach for borders
        shadow: "rgba(0, 0, 0, 0.1)", // Soft shadow
        heading: "#8B0000", // Dark Red for headings
      },
    },
  },
  darkMode: 'media', // Enable dark mode based on system preferences
  plugins: [],
};
