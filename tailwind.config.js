/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: {
      '3/5': '60%',
    },
    extend: {},
    fontFamily: {
      Kalam: ['Kalam', 'cursive'],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro", "dark"],
  },
}

