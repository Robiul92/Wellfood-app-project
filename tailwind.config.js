// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js}',
    
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),
    require("autoprefixer"),
  ], 
};
