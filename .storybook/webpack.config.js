const base = require("../webpack.config.js");

module.exports = async ({ config }) => ({
  ...config,
  module: { ...config.module, rules: base.module.rules },
  resolve: base.resolve
});
