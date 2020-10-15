// main dependecy
const functions = require('firebase-functions');
const express = require('express');
const compression = require('compression')();
const cors = require('cors')({ origin: true });

const errors = require('./helpers/errors');
const { errorHandler } = require('./helpers/utilities');

const api = express();
api.use(cors);
api.use(compression);
// register version module
api.use(require('./modules/v1'));

// global route
api.get('/', (req, res) => {
  res.json('welcome to cloud function');
});

// Catch 404 and forward to error handler
api.use((req, res, next) => {
  next(errors.httpError.notFound(new errors.internalError.ResourceNotFoundError('URL', null)));
});

// eslint-disable-next-line no-unused-vars
api.use((err, req, res, next) => errorHandler(err, res));

exports.api = functions.https.onRequest(api);
