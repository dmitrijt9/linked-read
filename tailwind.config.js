const defaultTheme = require('tailwindcss/defaultTheme')
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          default: defaultTheme.colors.orange[400],
          light: defaultTheme.colors.orange[300],
          dark: defaultTheme.colors.orange[600],
        },
        secondary: {
          default: defaultTheme.colors.gray[500],
          light: defaultTheme.colors.gray[300],
        },
        transparent: defaultTheme.colors.transparent,
        white: defaultTheme.colors.white,
        black: defaultTheme.colors.black,
      },
      minHeight: {
        16: '4rem',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
