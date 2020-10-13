const express = require('express');
const router = require('express').Router();

const v1 = express();

// register module
router.use('/books', require('./books'));

// add router to express
v1.use('/v1', router);
v1.get('/v1', (_, res) => {
  res.json('welcome to cloud function v1');
});

module.exports = v1;
