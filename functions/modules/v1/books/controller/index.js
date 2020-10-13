const readAPI = require('./read');
const createAPI = require('./create');
const updateAPI = require('./update');
const deleteAPI = require('./delete');

module.exports = {
  ...readAPI,
  ...createAPI,
  ...updateAPI,
  ...deleteAPI,
};
