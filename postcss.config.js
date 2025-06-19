/** @type {import('postcss-load-config').Config} */
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: true,
      stage: 3,
      features: {
        'nesting-rules': true, // Enable nesting in CSS
      },
    },
    cssnano: {
      preset: 'default',
    },
    tailwindcss: {},
  },
};
