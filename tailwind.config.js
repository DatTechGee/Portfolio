/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030412",
        midnight: "#06091f",
        navy: "#161a31",
        indigo: "#1f1e39",
        storm: "#282b4b",
        aqua: "#33c2cc",
        mint: "#57db96",
        royal: "#5c33cc",
        lavender: "#7a57db",
        fuchsia: "#ca2f8c",
        orange: "#cc6033",
        sand: "#d6995c",
        coral: "#ea4884",
      },
      boxShadow: {
        glow: "0 0 20px rgba(92, 51, 204, 0.3)",
        "glow-lg": "0 0 40px rgba(92, 51, 204, 0.6), 0 0 80px rgba(122, 87, 219, 0.2)",
        "glow-mint": "0 0 20px rgba(87, 219, 150, 0.3)",
        "glow-coral": "0 0 20px rgba(234, 72, 132, 0.3)",
      },
      animation: {
        "orbit": "orbit 50s linear infinite",
        "marquee": "marquee 50s linear infinite",
        "marquee-vertical": "marquee-vertical 50s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "white",
            fontFamily: '"Inter", "Funnel Display", sans-serif',
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
