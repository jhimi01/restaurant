/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#880808",
        secondary: "#A52A2A",
        headerdarktect: "#231900",
        subtext: "#2D2D2D",
        blacktext: "#0000"
       
      },
      fontFamily: {
        sanchez: 'var(--font-sanchez)',
        miniver: 'var(--font-miniver)',
        poppins: 'var(--font-poppins)',
        nunito: 'var(--font-nunito)',
      },
    },
  },
  plugins: [],
};
