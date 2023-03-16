const Models = require('../Models/Models.js');

reviewController = {
  get: (req, res) => {
      Models.reviews.getReviews(req.body)
      .then(response => {
        res.send(response.data)
      })
      .catch(err => {
        res.send(err, req.body, 'Failed to fetch reviews')
      })
  },
  post: (req, res) => {
    Models.reviews.postReview()
    .then(data => {
      console.log('Successfully posted review!')
    })
    .catch(err => {
      console.log(err, 'Failed to post review!')
    })
  }
}


module.exports = reviewController;