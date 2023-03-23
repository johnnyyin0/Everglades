import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Overview from './components/Overview/Overview.jsx'
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx'
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx'

function App() {

  const photoWidget = cloudinary.createUploadWidget({
    cloudName: 'dyrlg2pzz',
    uploadPreset: 'tiigxyou',
    cropping: true,
    clientAllowedFormats: ["image"]
  },
    (error, result) => {
      if (!error && result && result.event === "success") {
        let newPhotos = photos.slice()
        newPhotos.push(result.info.secure_url)
        if (newPhotos.length >= 5) {
          setShowButton(false)
        }
        setPhotos(newPhotos)

      }
    })

  return (

    <div className="mx-auto max-w-screen-2xl w-11/12">
      <Overview />
      <QuestionsAnswers />
      <RatingsReviews photoWidget={photoWidget} />
    </div>

  )
}

export default App
