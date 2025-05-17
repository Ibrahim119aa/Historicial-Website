export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 14px rgba(0, 0, 0, 0.25)",
        cardShadow:"0 1px 4px #0000000a"
      },
      top: {
        '63': '63%',
      },
      screens: {
        'mobile-extra-small': { 'max': '399px' },  // Max width of 399px
        'mobile-small': { 'min': '400px', 'max': '638px' }, // 400px to 638px
        'mobile': { 'min': '639px', 'max': '767px' }, // 639px to 767px
        'tablet': { 'min': '768px', 'max': '1023px' }, // 768px to 1023px
        'large': { 'min': '1024px' },

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

    },
  },
  plugins: [],
};
