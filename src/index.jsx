import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NewReviewModal from './components/RatingsReviews/NewReviewModal.jsx'
import FullSizePhoto from './components/RatingsReviews/FullSizePhoto.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('NewReviewModal')).render(
  <React.StrictMode>
    <NewReviewModal />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
