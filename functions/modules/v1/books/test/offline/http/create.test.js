/* eslint-disable no-undef */
const _ = require('lodash');
const { assert } = require('chai');
// eslint-disable-next-line no-unused-vars
const test = require('firebase-functions-test')();

const http = require('../../../controller/create');
const HTTP_CODE = require('../../../../../../helpers/response/httpCode');
const { controllerWrapper, errorHandler } = require('../../../../../../helpers/utilities');

describe('Books v1 module :: Create', () => {
  describe('Create new book', () => {
    it('Should return error when the code or name is empty', () => {
      const req = { body: { code: '123123', name: '' } };
      const res = {
        status(code) {
          assert(HTTP_CODE.CLIENT_ERROR.BAD_REQUEST.code === code, 'The return code not 400');
          return this;
        },
        send: () => {},
      };
      const next = (err) => errorHandler(err, res);

      controllerWrapper(http.create)(req, res, next);
    });

    it('Should return success when the code and name is filled', () => {
      const req = { body: { code: '123123', name: 'Book A' } };
      const res = {
        status(code) {
          assert(HTTP_CODE.SUCCESS.OK.code === code, 'The return code not 200');
          return this;
        },
        send: (payload) => {
          const isHaveID = _.get(payload, ['data', 'data', 'id'], null);
          assert(isHaveID !== null, 'The return data doesn\'t have an ID');
        },
      };
      const next = (err) => errorHandler(err, res);
      controllerWrapper(http.create)(req, res, next);
    });
  });
});
