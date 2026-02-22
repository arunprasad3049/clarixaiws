/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#060712",
        card: "rgba(255,255,255,0.03)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,92,255,0.30), 0 30px 90px rgba(124,92,255,0.18)"
      }
    }
  },
  plugins: []
};
