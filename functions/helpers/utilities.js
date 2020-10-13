const _ = require('lodash');

module.exports.validateEmail = (email) => {
  const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

module.exports.validatePhoneNumber = (phone) => {
  const regex = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
  return regex.test(phone);
};

module.exports.isNumber = (number) => {
  const re = /^[0-9]+([,.][0-9]+)?$/g;
  return re.test(number);
};

module.exports.isInteger = (number) => Number.isInteger(Number(number));

module.exports.promiseWrapper = (promise) => (
  promise
    .then((data) => ({ data, error: null }))
    .catch((error) => ({ data: null, error }))
);

module.exports.controllerWrapper = (fn) => async (req, res, next) => {
  try {
    return await fn(req, res, next);
  } catch (err) {
    return next(err);
  }
};

module.exports.validateDate = (date) => {
    const re = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/; // eslint-disable-line
  return re.test(date);
};

module.exports.validateLength = (word, minLength = 6) => (word.length >= minLength);

module.exports.validateSex = (sex) => {
  const sexArray = ['MALE', 'FEMALE'];
  if (sexArray.indexOf(sex) > -1) {
    return true;
  }
  return false;
};

module.exports.validateStatus = (status) => {
  const stattusArray = ['ACTIVE', 'INACTIVE', 'DELETED'];
  if (stattusArray.indexOf(status) > -1) {
    return true;
  }
  return false;
};

module.exports.validateMerchantType = (status) => {
  const stattusArray = [null, '', 'GROUP', 'OUTLET', 'MERCHANT'];
  if (stattusArray.indexOf(status) > -1) {
    return true;
  }
  return false;
};

module.exports.validateYesNo = (status) => {
  const yesnoArray = ['YES', 'NO'];
  if (yesnoArray.indexOf(status) > -1) {
    return true;
  }
  return false;
};

module.exports.validateAppType = (type) => {
  const typeArr = ['FRONT', 'BACK-OFFICE'];
  if (typeArr.indexOf(type) > -1) {
    return true;
  }
  return false;
};

module.exports.lowerCaseKeyObject = (object) => _.mapKeys(object, (v, k) => k.toLowerCase());
