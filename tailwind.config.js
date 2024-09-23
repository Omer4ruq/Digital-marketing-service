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

        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      fontFamily: {
        share: ["Share", "sans-serif"], // Add the custom font
      },

      animation: {
        scroll: "scroll 15s linear infinite",
        pause: "scroll 15s linear paused", // Stops the animation when hovered
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [daisyui, tailwindScrollbarHide],
};
