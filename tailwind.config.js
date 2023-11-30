/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "3px 30px 30px -15px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        ss: "550px",
        st: "480px",
        ll: "840px",
      },
      colors: {
        black: '#333333',
        blue: '#334982',
        grey: '#f3f3f3',
        orange: '#fdb913',
        pink: '#e40087',
        purple: '#782b8f',
        red: '#dd372f',
        teal: '#00857d',
        white: '#fff',
      }

    },
  },
  plugins: [],
};
