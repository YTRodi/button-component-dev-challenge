const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    // Override tailwind colors
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      slate: {
        DEFAULT: '#E0E0E0',
        dark: '#AEAEAE',
        darkest: '#3F3F3F',
      },
      blue: {
        DEFAULT: '#2962FF',
        dark: '#0039CB',
      },
      gray: {
        DEFAULT: '#455A64',
        dark: '#1C313A',
      },
      red: {
        DEFAULT: '#D32F2F',
        dark: '#9A0007',
      },
    },
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      'ubuntu-mono': ['"Ubuntu Mono"', ...defaultTheme.fontFamily.sans],
      'noto-sans-jp': ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
    },
  },

  plugins: [],
};
