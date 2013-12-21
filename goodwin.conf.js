module.exports = function(hydro) {
  hydro.set({
    globals: {
      Buffers: require('./index')
    },
    tests: [
      'test/*.js'
    ]
  });
};
