/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,html}",
    "./src/*.{js,html}",

  ],
  theme: {
    extend: {
      color: {
        black: "#000000",
        white: "#FFFFFF",
      },
      backgroundImage: {
        "radial-gradient-red": "radial-gradient(circle 230px at  top left, rgba(248, 113, 113, .6), rgba(248, 113, 113, 0)), radial-gradient(circle 230px at  bottom right, rgba(248, 113, 113, .6), rgba(248, 113, 113, 0))",
        "radial-gradient-green": "radial-gradient(circle 180px at  top left, rgba(179, 223, 152, .6), rgba(179, 223, 152, 0)),radial-gradient(circle 180px at  bottom right, rgba(179, 223, 152, .6), rgba(179, 223, 152, 0))",
        "radial-gradient-orange": "radial-gradient(circle 180px at  top left, rgba(253, 186, 116, .6),rgba(179, 223, 152, 0)),radial-gradient(circle 180px at  bottom right, rgba(253, 186, 116, .6), rgba(179, 223, 152, 0))",
        "radial-gradient-blue": "radial-gradient(circle 180px at  top left, rgba(191, 219, 254, .6),rgba(179, 223, 152, 0)),radial-gradient(circle 180px at  bottom right, rgba(191, 219, 254, .6), rgba(179, 223, 152, 0))",
        "radial-gradient-pink": "radial-gradient(circle 180px at  top left, rgba(249, 168, 212, .6),rgba(179, 223, 152, 0)),radial-gradient(circle 180px at  bottom right, rgba(249, 168, 212, .6), rgba(179, 223, 152, 0))",
      },
      fontFamily: {
        golos: "Golos Text, sans-serif",

      },
    },
  },
  plugins: [],
};
