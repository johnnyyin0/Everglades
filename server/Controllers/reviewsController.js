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
    .then(response =>
      res.send(response.data)
    )
    .catch(err =>
      res.send(err.data, 'Failed to post review!')
    )
  },
  getMeta: (req, res) => {
    Models.reviews.getMeta(req.body)
    //req.body must be an object with just a product_id key
    .then(response =>
      res.send(response.data)
    )
    .catch(err =>
      res.send(err.data, 'Failed to fetch review metadata!')
    )
  },
  markHelpful: (req, res) => {
    Models.reviews.markHelpful(req.body)
    //req.body must be an object with just a product_id key
    .then(response =>
      res.send(response.data, 'This review has been marked helpful!')
    )
    .catch(err => res.send(err.data, 'Failed to mark review helpful!')
    )
  },
  markReported: (req, res) => {
    Models.reviews.markReported(req.body)
    //req.body must be an object with just a product_id key
    .then(response =>
      res.send(response.data, 'This review has been reported!')
      )
    .catch(err =>
      res.send(err.data, 'Failed to report review!')
      )
  }
}


module.exports = reviewController;