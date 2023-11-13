/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: {
      '3/5': '60%',
      '4/5': '80%',
    },
    extend: {
      backgroundImage: {
        'pattern':'url(/assets/IconGrid.svg)',
     },
    },
    fontFamily: {
      Kalam: ['Kalam', 'cursive'],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro", "dark"],
  },
}

