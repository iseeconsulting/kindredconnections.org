/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        kc: {
          navy: "#0f1c2e", // deep ink for primary text/backgrounds
          teal: "#d68a2e", // golden amber accent for CTAs
          peach: "#f3e8db", // warm shell backdrop for cards
          charcoal: "#2b2730", // grounded neutral for copy
          gray: "#f6f1ea", // soft canvas for sections
          mist: "#e9e2d6", // subtle divider fill
        },
      },
    },
  },
  plugins: [],
};
