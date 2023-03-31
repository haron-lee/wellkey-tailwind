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
      maxWidth: {
        1280: "1280px",
      },
      minWidth: {
        350: "350px",
      },
      width: {
        30: "30rem",
      },
      boxShadow: {
        "5xl": "0 0 10px gold",
      },
    },
  },
  plugins: [],
};
