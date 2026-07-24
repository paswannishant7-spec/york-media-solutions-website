/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#15161A",
          light: "#22242B",
          soft: "#3A3D46",
        },
        ink: "#0B0B0D",
        cream: "#FAFAF8",
        mist: "#F1F0EC",
        brand: {
          red: "#E31C3D",
          rose: "#FF5C7A",
          deep: "#A10F28",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "chevron-fade": "linear-gradient(90deg, #FF9FB2 0%, #E31C3D 60%, #A10F28 100%)",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.25)",
        card: "0 10px 40px -12px rgba(0,0,0,0.15)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%,100%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.08)", opacity: 0.85 },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
