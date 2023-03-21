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
          "neutral": "#292524",
          "base-100": "#1c1917",
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
