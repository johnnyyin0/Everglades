import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NewReviewModal from './components/RatingsReviews/NewReviewModal.jsx'
import FullSizePhoto from './components/RatingsReviews/FullSizePhoto.jsx'
import './index.css'
import AddAnswer from './components/QuestionsAnswers/AddAnswerButton.jsx'

ReactDOM.createRoot(document.getElementById('NewReviewModal')).render(
  <NewReviewModal />
)

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById('AddAnswer')).render(
  <React.StrictMode>
    <AddAnswer />
=======
ReactDOM.createRoot(document.getElementById('fullsize-photo')).render(
  <React.StrictMode>
    <FullSizePhoto />
>>>>>>> 00fa4b51a5ae8d295d9c85d53dbadb4d8d1bccf0
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)