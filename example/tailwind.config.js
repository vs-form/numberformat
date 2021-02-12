module.exports = {
    purge: {
      enabled: true,
      content: [
      'node_modules/\@vs-form/tailwind/dist/**/*.js',
      'src/**/*.js',
      'src/**/*.tsx',
      'public/**/*.html',
    ]},
    variants: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
      opacity: ['disabled'],
      tableLayout: ['responsive', 'hover', 'focus', 'active'],
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }