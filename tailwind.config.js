/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Scrolls by the width of half the logos
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
        pause: "scroll 15s linear paused", // Stops the animation when hovered
      },
    },
  },
  plugins: [daisyui, tailwindScrollbarHide],
};
