const controller = require('./Controllers/controllers.js');
const router = require('express').Router();

router.get('/questions', controller.questions.get);

module.exports = router;