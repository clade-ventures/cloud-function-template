const router = require('express').Router();
const controller = require('./controller');
const { controllerWrapper } = require('../../../helpers/utilities');

router.get('/', controllerWrapper(controller.getAll));

module.exports = router;
