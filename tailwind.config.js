/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        abcsocial: "'ABCSocial', sans-serif",

        g2ciao: "'G2Ciao', serif",
      },
      colors: {
        footer: "#EDECED",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
