const db = require('../../../../helpers/database');
const errors = require('../../../../helpers/errors');
const responses = require('../../../../helpers/response');
const validators = require('../../../../helpers/validator');
const collections = require('../../../../constants/collections');

function create(req, res) {
  const errs = [];
  const body = {};
  const fields = [
    {
      key: 'code',
      isRequired: true,
    },
    {
      key: 'name',
      isRequired: true,
    },
  ];

  fields.forEach(({ key, isRequired }) => {
    if (isRequired) {
      const validatorObj = validators.required(req.body, key, null);
      if (validatorObj.error) {
        errs.push(validatorObj.error);
      }
    }

    body[key] = req.body[key];
  });

  if (errs.length > 0) throw errors.httpError.badRequest(errs);

  const newBook = db.ref(collections.books).push(body);
  return responses.httpResponse.ok(res, 'OK', {
    data: {
      id: newBook.key,
      ...body,
    },
  });
}

module.exports = {
  create,
};
