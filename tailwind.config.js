/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: {
          DEFAULT: 'rgb(25, 45, 67)',
          hover: 'rgba(255, 255, 255, 0.1)',
          active: 'rgba(255, 255, 255, 0.15)'
        },
        primary: {
          DEFAULT: 'rgb(9, 103, 210)',
          hover: 'rgb(7, 85, 175)',
          light: 'rgb(235, 239, 245)'
        },
        text: {
          DEFAULT: 'rgb(20, 35, 52)',
          secondary: 'rgb(77, 90, 104)',
          muted: 'rgb(129, 145, 162)'
        },
        border: {
          DEFAULT: 'rgb(218, 225, 233)'
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
