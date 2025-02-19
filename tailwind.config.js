/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#64748B",
        clifford: "#da373d", // Custom color example
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Set Montserrat as the default sans-serif font
      },
    },
  },
  plugins: [],
};
