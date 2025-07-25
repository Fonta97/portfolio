// postcss.config.cjs
module.exports = {
  plugins: {
    // custom-media queries (@custom-media)
    'postcss-custom-media': {},

    // nesting dei selettori (&, media annidate, ecc.)
    'postcss-nesting': {},

    // CSS future: cascade-layers, custom-media, nesting, ecc.
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-media-queries': true,
        'nesting-rules':      true,
        'cascade-layers':     true,
      }
    },

    // autoprefixer per compatibilità browser
    autoprefixer: {},
  },
};
