// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // to use daisyui need to add this here
};
