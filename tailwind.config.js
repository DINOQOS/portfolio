/* eslint-disable @typescript-eslint/no-var-requires */

// const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        GRAY_LIGHT: "#E0F7FA", // 밝은 하늘색
        GRAY: "#B2EBF2",       // 중간 하늘색
        GRAY_HEAVY: "#80DEEA",  // 더 진한 하늘색
        GRAY_EXTRAHEAVY: "#4DD0E1", // 더욱 진한 하늘색
        BLACK: "#212529", // 검정색 유지

        PRIMARY_LIGHT: "#B3E5FC", // 연한 하늘색
        PRIMARY: "#29B6F6",       // 기본 하늘색
        PRIMARY_HEAVY: "#039BE5",  // 진한 하늘색

        GRADIENT_FROM: "#4FC3F7", // 그라디언트 시작 색
        GRADIENT_TO: "#29B6F6",   // 그라디언트 종료 색
      },
    },
  },
  plugins: [],
};
