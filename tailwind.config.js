/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        tilt: ['"Tilt Neon"', "sans-serif"],
        mohave: ["Mohave", "sans-serif"],
      },
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
