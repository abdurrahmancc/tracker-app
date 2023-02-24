/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4807EA",
          secondary: "#F000B8",
          accent: "#56CCF2",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#22D03E",
          warning: "#FFC248",
          error: "#FD4438",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
