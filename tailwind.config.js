/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,html}",
    "./src/*.{js,html}",

  ],
  theme: {
    screens:{
      'xxxs': '350px',
      'xxs':'450px',
      'xs': "575px",
      "sm": '640px',
      "md": "768px",
      "lg":"1024px",
      "lg-xl": "1180px",
      "xl": "1280px",
      "2xl": "1536px",
      '3xl': '1920px',
    },
    extend: {
      color: {
        black: "#000000",
        white: "#FFFFFF",
        secondary: "#9CA3AF",
        "hsl-purple": "hsla(248, 77%, 75%, 0.2)"

      },
      dropShadow: {
        'bottom': '0px -6.670000076293945px 26.666667938232422px 0px #0000001A'
      },
      backgroundImage: {
        "radial-gradient-red": "radial-gradient(circle 330px at  top left, rgba(248, 113, 113, .6), rgba(248, 113, 113, 0)), radial-gradient(circle 280px at  bottom right, rgba(248, 113, 113, .6), rgba(248, 113, 113, 0))",
        "radial-gradient-green": "radial-gradient(circle 280px at  top left, rgba(179, 223, 152, .6), rgba(179, 223, 152, 0)),radial-gradient(circle 230px at  bottom right, rgba(179, 223, 152, .6), rgba(179, 223, 152, 0))",
        "radial-gradient-orange": "radial-gradient(circle 280px at  top left, rgba(253, 186, 116, .6),rgba(179, 223, 152, 0)),radial-gradient(circle 230px at  bottom right, rgba(253, 186, 116, .6), rgba(179, 223, 152, 0))",
        "radial-gradient-blue": "radial-gradient(circle 280px at  top left, rgba(191, 219, 254, .6),rgba(179, 223, 152, 0)),radial-gradient(circle 230px at  bottom right, rgba(191, 219, 254, .6), rgba(179, 223, 152, 0))",
        "radial-gradient-pink": "radial-gradient(circle 330px at  top left, rgba(249, 168, 212, .6),rgba(179, 223, 152, 0)),radial-gradient(circle 280px at  bottom right, rgba(249, 168, 212, .6), rgba(179, 223, 152, 0))",

        "linear-red-yellow": "linear-gradient(#F87171,#FDBA74)",
        "linear-yellow-blue": "linear-gradient(#FDBA74,#BFDBFE)",
        "linear-blue-pink": "linear-gradient(#BFDBFE,#F83A95)",
        "linear-pink-red": "linear-gradient(#F83A95,#F81717)",
        "linear-lightred-lightyellow": "linear-gradient(#F81717,#FFB800)",
        "linear-yellow-green": "linear-gradient(#FFB800,#77C845)",
        "linear-green-blue": "linear-gradient(#77C845,#008FA0)",
        "linear-blue-purple": "linear-gradient(#008FA0,#A78BFA)",


      },
      backgroundColor:{
        "hsl-purple": "hsla(248, 77%, 75%, 0.2)"

      },
      fontFamily: {
        golos: "Golos, sans-serif",
        helvetica: "Helvetica, sans-serif",
        inter: "Inter, sans-serif",
        orbitron: "Orbitron, sans-serif",


      },
    },
  },
  plugins: [],
};
