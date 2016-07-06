module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'browserify'],
    files: [
      'test/**/*.js'
    ],
    preprocessors: {
      'test/**/*.js': ['browserify']
    },
    browsers: ['PhantomJS'],
    browserify: {
      debug: true
    },
    singleRun: true
  })
}
