const router = require('express').Router();
const controller = require('./controller');
const { controllerWrapper } = require('../../../helpers/utilities');

router.get('/', controllerWrapper(controller.getAll));
router.post('/', controllerWrapper(controller.create));

module.exports = router;
