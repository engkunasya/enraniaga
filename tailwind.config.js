/** @type {import('tailwindcss').Config} */
export default {
    content: [  "./index.html","./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {  colors: {
        primary: "rgba(255, 255, 255, 0.30)",
        fontBlack: "#081323",
        fontGray: "#828282",
        overlay: "rgba(0, 0, 0, 0.30)",
        card1: "#FE9CA4",
        card2: "#FEE5EC",
        card3: "#AE6B82",
        card4: "#BFA5A6",
        panelgui: "#111827"
  
      },
      screens: {
        xs: "550px",
        md: "850px",
        xl: "1180px",
        "2xl": "1280px",
      },
      fontSize: {
        '7.5xl': '5rem',
    },},
    },
    plugins: [],
  }
  
  