import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      crimsonPro: ["Crimson Pro", "serif"],
    },
    extend: {
      colors: {
        "se-teal": "#264653",
        "se-aqua": "#2A9D8F",
        "se-yellow": "#E9C46A",
        "se-orange": "#F4A261",
        "se-red": "#E76F51",
      },
    },
  },
  plugins: [],
} satisfies Config;
