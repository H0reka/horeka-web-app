/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "cus-black": "var(--black)",
        "cus-brand": "var(--brand)",
        "cus-dark-blue":"var(--dark-blue)",
        "cus-slate-grey":"var(--slate-grey)",
        "cus-grey-orange":"var(--grey-orange)",
        "cus-coral":"var(--coral)",
        "cus-alice-blue":"var(--alice-blue)",
        "cus-nav-button":"rgba(126, 130, 143, .1)",
        "cus-white": "var(--white)"
      }
    },
  },
  plugins: [],
}

