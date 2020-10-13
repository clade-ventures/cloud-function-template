const errorFormat = (internalCode, message, data) => ({
  code: internalCode.code,
  status: internalCode.status,
  message,
  data,
});

module.exports = errorFormat;
