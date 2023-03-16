const controller = require('./Controllers/controllers.js');
const router = require('express').Router();

//questions
router.get('/questions', controller.questions.get);

//reviews
router.get('/reviews', controller.reviews.get);

//products
router.get('/products', controller.products.get);
module.exports = router;