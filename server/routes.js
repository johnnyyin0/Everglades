const controller = require('./Controllers/controllers.js');
const router = require('express').Router();

//questions
router.get('/questions', controller.questions.getQuestions);
router.get('/questions/answers', controller.questions.getAnswers);
router.put('/questions/answer/helpful', controller.questions.updateHelpfulness);

//reviews
router.get('/reviews', controller.reviews.get);

//products
router.get('/products', controller.products.get);
router.get('/product/:id/styles', controller.products.getStyle);
router.get('/product/:id/related', controller.products.getRelated);
router.get('/product/:id', controller.products.getOne);

module.exports = router;