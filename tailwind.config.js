/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: "Montserrat",
      },
      colors: {
        "btn-following": "#5CD3A8",
        "secondary-color": "#EBD8FF",
      },
      boxShadow: {
        custom: "-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
        customSecond:
          "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF",
      },
    },
    plugins: [],
  },
};
