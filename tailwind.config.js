const defaultTheme = require("tailwindcss/defaultTheme");

const CELL_WIDTH = 94;
const CELL_GAP = 16;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        cell: `${CELL_WIDTH}px`,
        "cell-g": `${CELL_GAP}px`,
        ...[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].reduce(
          (spacings, num) => ({
            ...spacings,
            [`cell-${num}`]: `${num * CELL_WIDTH + (num - 1) * CELL_GAP}px`,
          }),
          {}
        ),
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          kipo: "#009cff",
          denim: "#002b50",
          3: "#054a91",
          5: "#054a91",
        },
        green: {
          1: "#15c8d1",
          2: "#17d7d8",
          3: "#18e9da",
          4: "#17f1d8",
          5: "#3cf7dc",
          6: "#4dffe1",
          7: "#83ffe7",
          8: "#a4ffee",
        },
        grey: {
          3: "#5d6b84",
          5: "#bac9de",
          7: "#f0f5fc",
          9: "#f9fbff",
        },
        pink: {
          1: "#ff7690",
          2: "#ff8aa6",
          3: "#ff99b1",
          4: "#ffa4ba",
          5: "#ffa9be",
          6: "#ffaec5",
          7: "#ffc2d6",
          8: "#ffc9dd",
        },
        purple: {
          1: "#c977e8",
          2: "#d490f2",
          3: "#da9ef3",
          4: "#dca7f2",
          5: "#e0aef5",
          6: "#e1b5f7",
          7: "#eac0fc",
          8: "#ebccff",
        },
        yellow: {
          1: "#ff9e00",
          2: "#ffaf00",
          3: "#ffc500",
          4: "#ffd100",
          5: "#ffdc00",
          6: "#ffe200",
          7: "#fbe756",
          8: "#ffed85",
        },
      },
      boxShadow: {
        angle: "1px 1px 1px 0px #5d6b8426,1px 1px 1px 0px #5d6b8417,2px 2px 1px 0px #5d6b8408",
        close:
          "0px 0px 1px 0px #5d6b842e,0px 2px 2px 0px #5d6b8426,0px 4px 3px 0px #5d6b8417,0px 8px 3px 0px #5d6b8408",
        mid: "0px 1px 3px 0px #5d6b842e,0px 6px 6px 0px #5d6b8426,0px 13px 8px 0px #5d6b8417,0px 23px 9px 0px #5d6b8408",
        hover:
          "0px 2px 4px 0px #5d6b842e,0px 8px 8px 0px #5d6b8426,0px 17px 10px 0px #5d6b8417,0px 31px 12px 0px #5d6b8408",
        far: "0px 4px 8px 0px #5d6b842e,0px 15px 15px 0px #5d6b8426,0px 34px 20px 0px #5d6b8417,0px 60px 24px 0px #5d6b8408",
      },
      maxWidth: {
        page: "1860px",
      },
      screens: {
        c9: "991px",
        c11: "1211px",
        c12: "1321px",
        c14: "1541px",
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr)) !important",
      },
    },
  },
  plugins: [],
};
