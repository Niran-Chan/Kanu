module.exports = {
  content:['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
