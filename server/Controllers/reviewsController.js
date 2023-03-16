const Models = require('../Models/Models.js');

reviewController = {
  get: (req, res) => {
      Models.reviews.getReviews()
      .then(data => {
        console.log('Got reviews');
        res.send(data)
      })
      .catch(err => {
        console.log(err, 'Failed to fetch reviews')
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