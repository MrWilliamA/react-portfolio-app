module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        menu: "900px",
        smallPhone: "400px",
      },
      colors: {
        white: "#fff",
        blue: "#1197BA",
        darkblue: "#0676AC",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
