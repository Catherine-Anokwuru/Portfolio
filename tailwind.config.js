/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        r: "0 0 60px -35px rgba(0, 0, 0, 0.9)",
      },
      colors: {
        "light-green": "#66FCF1",
        green: "#00DE61",
        "dark-green": "#01152e",
        green2: "#00AF66",
        orange: "#f58220",
        nude: "#cc8b65",
        grey: "#1F2833",
        black: "#252525",
        teal: "#17bebb",
        "off-white": "#fcf8f8",
      },
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        xtrabold: "800",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "600px" },
        // => @media (max-width: 639px) { ... }

        phone: { max: "1024px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        tab: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        // desktop: { min: "1024px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
      },
      fontSize: {
        small: "0.8rem",
        base: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
      },
      lineHeight: {
        base: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
      },
    },
  },
  plugins: [],
};
