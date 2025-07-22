// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        terzYellow: {
          DEFAULT: '#FFE066',
          light: '#FFFBE6',
          soft: '#FFF3BF',
        },
        terzBlue: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
}
