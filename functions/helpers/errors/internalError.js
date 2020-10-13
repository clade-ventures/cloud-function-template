/* eslint-disable max-classes-per-file */
const format = require('./format');
const messages = require('./message');
const {
  CLIENT_ERROR,
  SERVER_ERROR,
} = require('../response').INTERNAL_CODE;

class DomainError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ResourceNotFoundError extends DomainError {
  constructor(key, data) {
    super(messages.notFoundResource(key));
    this.data = format(CLIENT_ERROR.NOT_FOUND, messages.notFoundResource(key), data);
  }
}

class InvalidBodyError extends DomainError {
  constructor(key, data) {
    super(messages.invalidBody(key));
    this.data = format(CLIENT_ERROR.BAD_REQUEST, messages.invalidBody(key), data);
  }
}

class InCompleteKeyError extends DomainError {
  constructor(key, data) {
    super(messages.incompleteKey(key));
    this.data = format(CLIENT_ERROR.BAD_REQUEST_KEY, messages.incompleteKey(key), data);
  }
}

class InCompleteValueError extends DomainError {
  constructor(key, data) {
    super(messages.incompleteValue(key));
    this.data = format(CLIENT_ERROR.BAD_REQUEST_VALUE, messages.incompleteValue(key), data);
  }
}

class InvalidEmailOrPasswordError extends DomainError {
  constructor(data) {
    super(messages.invalidEmailOrPassword());
    this.data = format(CLIENT_ERROR.INVALID_AUTH, messages.invalidEmailOrPassword(), data);
  }
}

class InvalidTypeError extends DomainError {
  constructor(key, data) {
    super(messages.invalidType(key));
    this.data = format(CLIENT_ERROR.BAD_REQUEST_TYPE, messages.invalidType(key), data);
  }
}

class FindResourceError extends DomainError {
  constructor(key, data) {
    super(messages.errorFindResource(key));
    this.data = format(SERVER_ERROR.FAILED_FIND_RESOURCE, messages.errorFindResource(key), data);
  }
}

class CreateResourceError extends DomainError {
  constructor(key, data) {
    super(messages.errorCreateResource(key));
    this.data = format(
      SERVER_ERROR.FAILED_CREATE_RESOURCE, messages.errorCreateResource(key), data,
    );
  }
}

class UpdateResourceError extends DomainError {
  constructor(key, data) {
    super(messages.errorUpdateResource(key));
    this.data = format(
      SERVER_ERROR.FAILED_UPDATE_RESOURCE, messages.errorUpdateResource(key), data,
    );
  }
}

class DeleteResourceError extends DomainError {
  constructor(key, data) {
    super(messages.errorDeleteResource(key));
    this.data = format(
      SERVER_ERROR.FAILED_DELETE_RESOURCE, messages.errorDeleteResource(key), data,
    );
  }
}

class InvalidFormatError extends DomainError {
  constructor(key, data) {
    super(messages.invalidFormat(key));
    this.data = format(CLIENT_ERROR.BAD_REQUEST_FORMAT, messages.invalidFormat(key), data);
  }
}

class AlreadyUsedError extends DomainError {
  constructor(key, data) {
    super(messages.alreadyUsed(key));
    this.data = format(CLIENT_ERROR.DUPLICATE_VALUE, messages.alreadyUsed(key), data);
  }
}

class InvalidOptionError extends DomainError {
  constructor(key, data) {
    super(messages.invalidOption(key));
    this.data = format(CLIENT_ERROR.OUTSIDE_OPTION, messages.invalidOption(key), data);
  }
}

class LoginError extends DomainError {
  constructor(data) {
    super(messages.loginError());
    this.data = format(CLIENT_ERROR.INVALID_AUTH, messages.loginError(), data);
  }
}

class UnauthorizedError extends DomainError {
  constructor(data) {
    super(messages.unauthorized());
    this.data = format(CLIENT_ERROR.UNAUTHORIZED, messages.unauthorized(), data);
  }
}

class ExpiredError extends DomainError {
  constructor(key, data) {
    super(messages.expired(key));
    this.data = format(CLIENT_ERROR.EXPIRED_AUTH, messages.expired(key), data);
  }
}

class InvalidMaxLengthError extends DomainError {
  constructor(key, value, data) {
    super(messages.invalidMaxLength(key, value));
    this.data = format(CLIENT_ERROR.BAD_REQUEST, messages.invalidMaxLength(key, value), data);
  }
}

class InvalidMinLengthError extends DomainError {
  constructor(key, value, data) {
    super(messages.invalidMinLength(key, value));
    this.data = format(CLIENT_ERROR.BAD_REQUEST, messages.invalidMinLength(key, value), data);
  }
}

class InvalidMaxValueError extends DomainError {
  constructor(key, value, data) {
    super(messages.invalidMaxValue(key, value));
    this.data = format(CLIENT_ERROR.BAD_REQUEST, messages.invalidMaxValue(key, value), data);
  }
}

class InvalidMinValueError extends DomainError {
  constructor(key, value, data) {
    super(messages.invalidMinValue(key, value));
    this.data = format(CLIENT_ERROR.BAD_REQUEST, messages.invalidMinValue(key, value), data);
  }
}

module.exports = {
  ResourceNotFoundError,
  InvalidBodyError,
  InCompleteKeyError,
  InCompleteValueError,
  InvalidEmailOrPasswordError,
  InvalidTypeError,
  FindResourceError,
  CreateResourceError,
  UpdateResourceError,
  DeleteResourceError,
  InvalidFormatError,
  AlreadyUsedError,
  InvalidOptionError,
  LoginError,
  UnauthorizedError,
  ExpiredError,
  InvalidMaxLengthError,
  InvalidMinLengthError,
  InvalidMaxValueError,
  InvalidMinValueError,
};
