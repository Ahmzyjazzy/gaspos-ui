import type { Config } from "tailwindcss";



export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        panel: "var(--panel)",
        active: "var(--active-bg)",
        pos: {
          yellow: "var(--yellow)",
          orange: "var(--orange)",
          green: "var(--green)",
          blue: "var(--blue)",
          purple: "var(--purple)",
          red: "var(--red)",
          input: {
            light: "var(--input)",
            dark: "Var(--input-dark)",
          }
        }
      },
    },
  },
  safelist: [
    {
      pattern: /bg-pos-(yellow|orange|green|blue|purple|red)/,
    },
    {
      pattern: /border-(yellow|orange|green|blue|purple|red)-900/,
    },
    {
      pattern: /bg-pos-input-(light|dark)/,
    },
    {
      pattern: /bg-(yellow|orange|green|blue|purple|red)/,
    },
    {
      pattern: /^bg-\[#([a-fA-F0-9]{3,6})\]$/,
    }
  ],
  plugins: [],
} satisfies Config;
