/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 25px 25px rgba(214, 214, 214, 0.1)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "bg-color-ligth": "#f2f2f2",
        "font-black": "#1d1d1d",
      },
      screens: {
        xl: "1550px",
      },
      keyframes: {
        fly: {
          "0%": { transform: "translate(-10%,-10%)" },
          "20%": { transform: "translate(50%,40%)" },
          "35%": { transform: "translate(120%,-10%)" },
          "50%": { transform: "translate(0%,50%)" },
          "75%": { transform: "translate(40%,0%)" },
          "90%": { transform: "translate(80%,10%)" },
          "100%": { transform: "translate(-10%,-10%)" },
        },
      },
      animation: {
        fly: "fly 50s linear infinite",
      },
    },
  },
  plugins: [],
};
