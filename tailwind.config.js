/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        background: 'background 10s ease infinite',
        borderAnimation: 'rotate 10s linear infinite',
      },
      keyframes: {
        background: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },

          '25%, 75%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        rotate:{
         ' 100%' : {
            'transform': 'rotate(1turn)',
        }

        }
      },
    },
  },
  plugins: [require("daisyui")],
}

