/** @type {import('tailwindcss').Config} */

import * as colors from './tailwind/colors.js';

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      bgDark: colors.bgDark,
      primaryLight: colors.primaryLight,
      primaryDark: colors.primaryDark,
      secondaryLight: colors.secondaryLight,
      secondaryDark: colors.secondaryDark,
      subLight: colors.subLight,
      subDark: colors.subDark,
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export const plugins = [];
