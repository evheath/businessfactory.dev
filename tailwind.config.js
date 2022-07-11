/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-cw": "spin 4s linear infinite",
        "spin-ccw": "spin-ccw 4s linear infinite",
      },
      keyframes: {
        "spin-ccw": {
          to: { transform: "rotate(-360deg)" },
          from: { transform: "rotate(0deg)" }
        },
        "spin": {
          to: { transform: "rotate(360deg)" },
          from: { transform: "rotate(0deg)" }
        },
        bounce: {
          "50%": {
            "transform": "translateY(-15%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "0%, 100%": {
            "transform": "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          }
        }
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif', ...defaultTheme.fontFamily.sans],
        serif: ['Bitter', 'serif', ...defaultTheme.fontFamily.serif],
        mono: ['Roboto Mono', 'monospace', ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
};
