import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Overview from './components/Overview/Overview.jsx'
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx'
import Reviews from './components/RatingsReviews/RatingsReviews.jsx'

function App() {

  return (
    <div>
      <Overview />
      <QuestionsAnswers />
      <Reviews/>
    </div>
  )
}

export default App
