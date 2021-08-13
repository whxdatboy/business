//babel.config.js
module.exports = {
  presets: [
  '@babel/preset-env',

  ["env", {
    "targets": {
      "browsers": ["last 2 versions"]
    }
  }]
],
}
