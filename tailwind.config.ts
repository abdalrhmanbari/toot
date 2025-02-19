
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#159AD3",
        "secondary": "#4A4A4A",
        "white-secondary":"#F1F3F6",
          "white-color":"#FFF",
      },
      lineHeight:{
        "line":"1.3125rem",
        "line-secondary":"1.1875rem",
      },
      letterSpacing:{
        "letter":"0.02rem",
        "letter-secondary": "0.01563rem",
      },
        boxShadow:{
          "boxShadow":"0px 2px 2px 0px",
        },container: {
          center: true,
          padding: "1.5rem",
          screens: {
            "3xl": "1360px",
          },
        },
 
    },
  },
  plugins: [],
} satisfies Config;
