const controller = require('./Controllers/controllers.js');
const router = require('express').Router();

//questions
router.get('/questions', controller.questions.getQuestions);
router.get('/questions/answers', controller.questions.getAnswers);
router.put('/questions/answer/helpful', controller.questions.updateHelpfulnessAnswer);
router.put('/questions/question/helpful',controller.questions.updateHelpfulnessQuestion)
router.post('/questions/questionId/answer', controller.questions.submitAnswer)

//reviews
router.get('/reviews', controller.reviews.get);
router.post('/reviews', controller.reviews.post);
router.get('/reviews/meta', controller.reviews.getMeta);
router.put('/reviews/helpful', controller.reviews.markHelpful);
router.put('/reviews/report', controller.reviews.markReported);

//products
router.get('/products', controller.products.get);
router.get('/product/:id/styles', controller.products.getStyle);
router.get('/product/:id/related', controller.products.getRelated);
router.get('/product/:id', controller.products.getOne);

module.exports = router;