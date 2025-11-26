/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi", "black"], // lofi is super clean light mode
    darkTheme: "black",
  },
   plugins: [
    require('@tailwindcss/typography'),
  ],
}