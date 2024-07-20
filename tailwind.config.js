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
      bgdark: colors.bgDark,
      primaryLight: colors.primaryLight,
      primaryDark: colors.primaryDark,
      secondaryLight: colors.secondaryLight,
      secondaryDark: colors.secondaryDark,
      subLight: colors.subLight,
      subDark: colors.subDark,
    },
    width: {
      'card-pc': '288px',
    },
    height: {
      'hero': '91vh',
    },
    maxWidth: {
      'default-width': '1200px',
    },
    lineHeight: {
      'h1': '72px',
    },
  },
  darkMode: 'class', // 다크모드 활성화
};
export const plugins = [];
