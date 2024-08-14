// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import * as colors from './tailwind/colors.js';
import * as fonts from './tailwind/fonts.js';
import flowbite from 'flowbite/plugin';
import typography from '@tailwindcss/typography';

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/flowbite-react/**/*.js", 
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
      'article': '588px',
    },
    maxWidth: {
      'content-full': '1200px',
    },
    minWidth: {
      'content-half': '640px',
    },
    spacing: {
      'nav': '59px',
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
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      fadeIn: 'fadeIn .6s ease-out',
      spin: 'spin 1s linear infinite',
    },
  },
  darkMode: 'class', // 다크모드 활성화
};

export const plugins = [
  typography, flowbite
];
