export default {
  content: [
    "./index.html",        // required for Vite
    "./src/**/*.{js,ts,jsx,tsx}"  // scan all React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // blue for buttons and links
        secondary: "#F3F4F6", // light gray background
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
      },
    },
  },
  plugins: [],
};
