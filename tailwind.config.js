/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss';
import { extend } from './tailwind/theme';

// tailwind custom 가져오기
// import theme from "./tailwind/theme";
// import plugins from "./tailwind/plugins";

export const content = [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
];

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugin: [],
}