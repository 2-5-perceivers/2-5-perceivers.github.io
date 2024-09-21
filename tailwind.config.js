/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Major Mono Display', 'monospace'],
      },
    },
  },
  plugins: [],
}

