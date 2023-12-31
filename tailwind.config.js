/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "slide-pattern1": "url('/public/assets/ia1.png')",
      },
      dropShadow: {
        "3xl": "0 25px 25px rgba(214, 214, 214, 0.1)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        button: " 4px 4px 6px rgba(45,45,45,0.27)",
        buttonDark: " 4px 4px 6px rgba(234,234,234,0.4)",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "bg-color-ligth": "#f2f2f2",
        "font-black": "#1d1d1d",
        "font-gray": "#868686",
        "font-card": "#f4f4f4",
        "button-bg": "#eaeaea",
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
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(60deg)" },
          "70%": { transform: "rotate(-60deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        fly: "fly 50s linear infinite",
        rotate: "rotate 3s linear infinite",
      },
    },
  },
  plugins: [],
};
