/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5356FF",
        primarylite: "#378CE7",
        secondary: "#67C6E3",
        secondarylite: "#DFF5FF",
      },
    },
  },
  plugins: [],
};
