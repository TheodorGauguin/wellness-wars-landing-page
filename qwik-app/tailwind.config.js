/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        greenDarkTheme: {
          "primary": "#006400",
          "secondary": "#00aa00",
          "accent": "#86198f",
          "neutral": "#1c2220",
          "base-100": "#000000",
          "base-200": "#222222",
          "base-300": "#bbbbbb",
          "info": "#338DE1",
          "success": "#78E8A8",
          "warning": "#A66707",
          "error": "#FA5347",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
