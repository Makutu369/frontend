import daisyui from "daisyui";
import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      colors: {
        formbackground: "#5B5966",
        input: "#FCFCFD",
        person: "#BC8FF4",
        mainbackground: "#121212",
        graySecondary: "#1F1F1F",
        primary: "#FFDEF2",
        secondary: "#FF5C5E",
      },
      fontFamily: {
        boldm: ["Dm sans"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [daisyui, nextui()],
  darkMode: "class",

  daisyui: {
    themes: ["business"],
  },
};
