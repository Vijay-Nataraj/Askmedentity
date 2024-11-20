/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url('./public/brunette-woman-hugging-laptop.png')",
      },
      fontFamily: {
        saira: ["Saira", "sans-serif"],
        righteous: ["Righteous", "cursive"],
        rowdies: ["Rowdies", "sans-serif"], // Add Righteous font here
      },
    },
  },
  plugins: [],
};
