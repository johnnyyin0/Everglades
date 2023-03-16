import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Overview from './Overview/Overview.jsx'
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx'
import Reviews from './Reviews/Reviews.jsx'

function App() {

  return (
    <div className="App">
        <Overview/>
        <QuestionsAnswers/>
        <Reviews/>
    </div>
  )
}

export default App
