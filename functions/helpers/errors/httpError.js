/**
 * Created by WebStorm.
 * User: darmawanefendi
 * Date: 2019-06-18
 * Time: 17:42
 */
const httpCode = require('../response').HTTP_CODE;

class HTTPError extends Error {
  constructor(message, errors) {
    super(message);
    this.name = this.constructor.name;
    this.errors = errors;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports.notFound = (errors) => {
  const error = new HTTPError('Error occurred', errors);
  error.status = httpCode.CLIENT_ERROR.NOT_FOUND.code;
  return error;
};

module.exports.badRequest = (errors) => {
  const error = new HTTPError('Error occurred', errors);
  error.status = httpCode.CLIENT_ERROR.BAD_REQUEST.code;
  return error;
};

module.exports.unAuthorize = (errors) => {
  const error = new HTTPError('Error occurred', errors);
  error.status = httpCode.CLIENT_ERROR.UNAUTHORIZED.code;
  return error;
};

module.exports.forbidden = (errors) => {
  const error = new HTTPError('Error occurred', errors);
  error.status = httpCode.CLIENT_ERROR.FORBIDDEN.code;
  return error;
};

module.exports.internalServerError = (errors) => {
  const error = new HTTPError('Error occurred', errors);
  error.status = httpCode.SERVER_ERROR.INTERNAL_SERVER_ERROR.code;
  return error;
};
