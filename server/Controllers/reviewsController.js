const Models = require('../Models/Models.js');

reviewController = {
  get: (req, res) => {
      Models.reviews.getReviews(req.body)
      //req.body must be an object with at least a product_id key
      .then(response => {
        res.send(response.data)
      })
      .catch(err => {
        res.send(err, 'Failed to fetch reviews!')
      })
  },
  post: (req, res) => {
    Models.reviews.postReview(req.body)
    //req.body should include: product_id, rating (1-5), summary, body, recommend(bool), name, email, photos(array), characteristics(obj)
    .then(response => {
      console.log('Successfully posted review!')
      res.send(response.data)
    })
    .catch(err => {
      console.log(err, 'Failed to post review!')
      res.send(err.data)
    })
  },
  getMeta: (req, res) => {
    Models.reviews.getMeta(req.body)
    //req.body must be an object with just a product_id key
    .then(response => {
      res.send(response.data)
    })
    .catch(err => res.send(err, 'Failed to fetch review metadata!'))
  }
}


module.exports = reviewController;