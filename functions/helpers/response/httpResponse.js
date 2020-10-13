const apiResponse = require('./apiResponse');
const HTTP_CODE = require('./httpCode');
const INTERNAL_CODE = require('./internalCode');

/**
 * Good Response http handler
 */
const ok = (res, message, data) => {
  res.status(HTTP_CODE.SUCCESS.OK.code)
    .send(
      apiResponse.successResponse(
        INTERNAL_CODE.SUCCESS.OK.code, INTERNAL_CODE.SUCCESS.OK.status, message, data,
      ),
    );
};

const created = (res, message, data) => {
  res.status(HTTP_CODE.SUCCESS.CREATED.code)
    .send(
      apiResponse.successResponse(
        INTERNAL_CODE.SUCCESS.CREATED.code, INTERNAL_CODE.SUCCESS.CREATED.status, message, data,
      ),
    );
};

/**
 * Bad Response http handler
 */
const notFound = (res, errors) => {
  res.status(HTTP_CODE.CLIENT_ERROR.NOT_FOUND.code)
    .send(apiResponse.errorResponse(errors));
};
const badRequest = (res, errors) => {
  res.status(HTTP_CODE.CLIENT_ERROR.BAD_REQUEST.code)
    .send(apiResponse.errorResponse(errors));
};
const unauthorized = (res, errors) => {
  res.status(HTTP_CODE.CLIENT_ERROR.UNAUTHORIZED.code)
    .send(apiResponse.errorResponse(errors));
};
const internalServerError = (res, errors) => {
  res.status(HTTP_CODE.SERVER_ERROR.INTERNAL_SERVER_ERROR.code)
    .send(apiResponse.errorResponse(errors));
};

/**
 * Handler general error
 */
const errorHandler = (res, responseCode, errors) => {
  switch (responseCode) {
    case HTTP_CODE.CLIENT_ERROR.NOT_FOUND.code: {
      notFound(res, errors);
      break;
    }
    case HTTP_CODE.CLIENT_ERROR.BAD_REQUEST.code: {
      badRequest(res, errors);
      break;
    }
    case HTTP_CODE.CLIENT_ERROR.UNAUTHORIZED.code: {
      unauthorized(res, errors);
      break;
    }
    case HTTP_CODE.SERVER_ERROR.INTERNAL_SERVER_ERROR.code: {
      internalServerError(res, errors);
      break;
    }
    default: {
      internalServerError(res, errors);
      break;
    }
  }
};

module.exports = {
  ok,
  created,
  notFound,
  badRequest,
  unauthorized,
  internalServerError,
  errorHandler,
};
