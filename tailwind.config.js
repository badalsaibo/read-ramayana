/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: "var(--font-body)",
      sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
