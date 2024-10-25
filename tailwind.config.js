/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    keyframes: {
      "fade-up": {
        "0%": {
          opacity: "0",
          transform: "translateY(10px)",
        },
        "80%": {
          opacity: "0.6",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0px)",
        },
      },
      "fade-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-10px)",
        },
        "80%": {
          opacity: "0.6",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0px)",
        },
      },
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "fade-up": "fade-up 0.5s",
      "fade-down": "fade-down 0.5s",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [],
};
