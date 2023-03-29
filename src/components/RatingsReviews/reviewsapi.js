export const getMeta = (id) => {
  return axios.get(`/api/meta/${id}`)
}

export const getProduct = (id) => {
  return axios.get(`/api/product/${id}`)
}

export const getAlReviews = (id, sort) => {
  let url = `/api/reviews/${id}/${sort}`;
  return axios.get(url)
}

export const sendReview = (payload) => {
  let options = {
    url: "api/review",
    data: payload,
    method: 'post'
  }
  return axios(options)
}

export const sendHelpful = (reviewId) => {
  let options = {
    url:"/api/reviews/helpful",
    method:"put",
    data: { review_id: reviewId },
  }
  return axios(options)
}

export const sendHurtful = (reviewId) => {
  let options = {
    url:"/api/reviews/report",
    method:"put",
    data: { review_id: reviewId },
  }
  return axios(options)
}