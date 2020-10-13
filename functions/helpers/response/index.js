const apiResponse = require('./apiResponse');
const httpResponse = require('./httpResponse');
const httpCode = require('./httpCode');
const internalCode = require('./internalCode');

module.exports = {
  apiResponse,
  httpResponse,
  HTTP_CODE: httpCode,
  INTERNAL_CODE: internalCode,
};
