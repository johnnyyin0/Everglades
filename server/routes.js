const controller = require('./Controllers/controllers.js');
const router = require('express').Router();

//questions
router.get('/questions', controller.questions.getQuestions);
router.get('/questions/answers', controller.questions.getAnswers);
router.put('/questions/answer/helpful', controller.questions.updateHelpfulnessAnswer);
router.put('/questions/question/helpful',controller.questions.updateHelpfulnessQuestion)

//reviews
router.get('/reviews', controller.reviews.get);

//products
router.get('/products', controller.products.get);
module.exports = router;