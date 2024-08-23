// Basic test using Sinon Library: stubs

const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
};

module.exports = sendPaymentRequestToApi;
