import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Overview from './components/Overview/Overview.jsx'
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx'
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx'

function App() {

  return (
    <div className="ratigs-reviews-wrapper">
      <Overview />
      <QuestionsAnswers />
      <RatingsReviews />
    </div>
  )
}

export default App
