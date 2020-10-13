const _ = require('lodash');
const errors = require('./errors');
const utilities = require('./utilities');

const validatorWrapper = (fn) => (body, key, value) => {
  try {
    fn(body, key, value);
    return { data: true, error: null };
  } catch (e) {
    return { data: null, error: e };
  }
};

module.exports.required = validatorWrapper((body, key) => {
  if (!_.has(body, key)) throw new errors.internalError.InCompleteKeyError(key, null);
  if (body[key] === '' || body[key] === null) throw new errors.internalError.InCompleteKeyError(key, null);
});

module.exports.number = validatorWrapper((body, key) => {
  if (!utilities.isNumber(Number(body[key]))) {
    throw new errors.internalError.InvalidTypeError(key, null);
  }
});
