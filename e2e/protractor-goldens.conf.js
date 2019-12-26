let config = require('./protractor.conf.js').config;
// if UPDATE_GOLDENS == "1" or "true", it will refresh the Golden image
process.env['UPDATE_GOLDENS'] = "true";
// generate only in those e2e-spec.ts
config.specs = ['./src/blue-harvest.e2e-spec.ts', './src/blue-harvest-add-mask.e2e-spec.ts'];
exports.config = config;
