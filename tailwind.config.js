// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import * as colors from './tailwind/colors.js';
import * as fonts from './tailwind/fonts.js';

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
    fontFamily: {
      body: fonts.body,
      code: fonts.code,
    },
    width: {
      'card-pc': '288px',
    },
    maxWidth: {
      'content-full': '1200px',
      'content-half': '592px',
    },
    lineHeight: {
      'h1': '72px',
    },
    borderWidth: {
      '1': '1px',
    },
    rotate: {
      '90': '90deg',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0, transform: 'translateY(24px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      }
    },
    animation: {
      fadeIn: 'fadeIn .6s ease-out',
    },
  },
  darkMode: 'class', // 다크모드 활성화
};

export const plugins = [];