/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  screens: {
    'sm': { 'min': '0px', 'max': '424px' },
    'md': { 'min': '425px', 'max': '767px' },
    'lg': { 'min': '768px', 'max': '1023px' },
    'xl': { 'min': '1024px', 'max': '1440px' },
    '2xl': { 'max': '1440px' },
  },
  extend: {
    colors: {
      'dark-green': '#007057'
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
};
export const plugins = [];
