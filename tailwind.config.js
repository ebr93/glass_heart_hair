export default {
  content: ["./index.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        charcoal: "#171717",
        smoke: "#e8e5df",
        mist: "#f8f6f2",
        tealBrand: "#2f9a9a",
        magentaBrand: "#e00072",
        yellowBrand: "#f3cf18",
        silverBrand: "#d8d8d8"
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        brand: ["'UnifrakturMaguntia'", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        glass: ["UnifrakturMaguntia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0,0,0,0.18)",
        glow: "0 0 0 1px rgba(255,255,255,0.12), 0 24px 70px rgba(224,0,114,0.22)"
      }
    }
  },
  plugins: []
};
