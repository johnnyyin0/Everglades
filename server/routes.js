const controller = require('./Controllers/controllers.js');
const router = require('express').Router();

//questions
router.get('/questions', controller.questions.get);

//reviews
router.get('/reviews', controller.reviews.get);
router.post('/reviews', controller.reviews.post);
router.get('/reviews/meta', controller.reviews.getMeta);
router.put('/reviews/helpful', controller.reviews.markHelpful);
router.put('/reviews/report', controller.reviews.markReported);

//products
router.get('/products', controller.products.get);
module.exports = router;