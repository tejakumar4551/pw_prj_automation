const environments = require('./environment');

// Use ENV from process.env, or default to 'uat'
const ENV = process.env.ENV || 'uat';

if (!environments[ENV]) {
  throw new Error(`Environment '${ENV}' is not defined in environment.js`);
}

module.exports = {
  envName: ENV,
  ...environments[ENV]
};
