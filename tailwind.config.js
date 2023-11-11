/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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

