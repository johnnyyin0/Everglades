import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NewReviewModal from './components/RatingsReviews/NewReviewModal.jsx'
import './index.css'
import AddAnswer from './components/QuestionsAnswers/AddAnswer'

ReactDOM.createRoot(document.getElementById('NewReviewModal')).render(
  <React.StrictMode>
    <NewReviewModal />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('AddAnswer')).render(
  <React.StrictMode>
    <AddAnswer />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
