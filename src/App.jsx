import { createContext } from 'react'
import Overview from './components/Overview/Overview.jsx'
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx'
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx'
import Banner from './Banner.jsx'

function App() {

  const handleOverviewClick = (e) => {
    console.log('Overview')
    console.log('Clicked: ', e.target)
    console.log('at: ', new Date(Date.now()).toString())
  }
  const handleQuestionsAnswersClick = (e) => {
    console.log('Questions & Answers')
    console.log('Clicked: ', e.target)
    console.log('at: ', new Date(Date.now()).toString())
  }
  const handleRatingsReviewsClick = (e) => {
    console.log('Ratings & Reviews')
    console.log('Clicked: ', e.target)
    console.log('at: ', new Date(Date.now()).toString())
  }



  return (
    <div>
    <Banner/>
    <div className="mx-auto max-w-screen-2xl w-11/12">
      <div onClick={handleOverviewClick}>
        <Overview />
      </div>
      <div onClick={handleQuestionsAnswersClick}>
        <QuestionsAnswers />
      </div>
      <div onClick={handleRatingsReviewsClick}>
        <RatingsReviews/>
      </div>
    </div>
    </div>
  )
}

export default App