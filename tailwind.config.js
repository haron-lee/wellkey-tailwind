// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        silver: "#e5e5e5",
        midnight: "#14213d",
        "point-yellow": "#fca311",
      },
      width: {
        1280: "1280px",
      },
      boxShadow: {
        "5xl": "0 0 10px gold",
      },
    },
  },
  plugins: [],
};
