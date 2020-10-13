const errorResponse = (errors) => ({
  errors,
});

const successResponse = (code, status, msg, data) => ({
  meta: {
    code,
    status,
    message: msg,
  },
  data,
});

module.exports = {
  errorResponse,
  successResponse,
};
