const Models = require('../Models/Models.js');

reviewController = {
  get: (req, res) => {
      let params = {
        product_id: req.params.id,
        sort: req.params.sort
      }
      Models.reviews.getReviews(params)
      .then(response => {
        res.send(response.data)
      })
      .catch(err => {
        res.send(err.data)
      })
  },
  post: (req, res) => {
    Models.reviews.postReview(req.body)
    //req.body should include: product_id, rating (1-5), summary, body, recommend(bool), name, email, photos(array), characteristics(obj)
    .then(response =>
      res.send(response.data)
    )
    .catch(err =>
      console.log(err.response.data, 'Failed to post review!')
    )
  },
  getMeta: (req, res) => {
    Models.reviews.getMeta({product_id: req.params.id})
    .then(response =>
      res.send(response.data)
    )
    .catch(err =>
      res.send(err.data, 'Failed to fetch review metadata!')
    )
  },
  markHelpful: (req, res) => {
    Models.reviews.markHelpful({product_id: req.params.id})
    .then(response =>
      res.send(response.data, 'This review has been marked helpful!')
    )
    .catch(err => res.send(err.data, 'Failed to mark review helpful!')
    )
  },
  markReported: (req, res) => {
    Models.reviews.markReported({product_id: req.params.id})
    .then(response =>
      res.send(response.data, 'This review has been reported!')
      )
    .catch(err =>
      res.send(err.data, 'Failed to report review!')
      )
  }
}


module.exports = reviewController;