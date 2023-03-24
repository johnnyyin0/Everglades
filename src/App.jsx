import Overview from './components/Overview/Overview.jsx'
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx'
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx'
import Logo from './Logo.jsx'

function App() {

  return (
    <div>
    <Logo/>
    <div className="mx-auto max-w-screen-2xl w-11/12">
      <Overview />
      <QuestionsAnswers />
      <RatingsReviews/>
    </div>
    </div>  
  )
}

export default App