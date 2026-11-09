import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        papier: "#F2F4EF",
        encre: "#14201A",
        vert: { DEFAULT: "#0F3D2E", clair: "#E3EBE5" },
        signal: "#F2C230",
      },
      fontFamily: {
        titre: ["var(--font-titre)", "system-ui", "sans-serif"],
        texte: ["var(--font-texte)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
