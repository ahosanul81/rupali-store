/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        border: 'var(--border-color)',
        badge: 'var(--badge-color)',
        contentBg: 'var(--contentBg-color)',
        dashboardBg: 'var(--dashboardBg-color)',
        dashboardLeftText: 'var( --dashboardLeftText-color)',
        dashboardRightBg: 'var(  --dashboardRightBg-color)',
        inputBg: 'var(  --inputBg-color)',

        productCardBg: 'var(  --productCardBg-color)'
      },
    },
  },
  plugins: [],
}

