import React, { useState } from 'react'
import StarsWidget from './StarsWidget'
import Report from '../QuestionsAnswers/Report.jsx'
import CarouselPhoto from './CarouselPhoto.jsx'
import { format } from 'date-fns'

export default function ReviewTile(props) {

  //hardcode for testing

  const review = {
    "review_id": 1277925,
    "rating": 3,
    "summary": "test",
    "recommend": true,
    "response": "we think this guy bought the wrong thing.",
    "body": "test test test test test test test test test test test test ",
    "date": "2022-12-13T00:00:00.000Z",
    "reviewer_name": "test",
    "helpfulness": 2,
    "photos": [
      {
        "id": 2456868,
        "url": "https://res.cloudinary.com/dhjvvkko0/image/upload/v1670966521/qzzbo01sjmgrbnyu0qhi.jpg"
      }
    ]
  }



  return (
    <div className="border-2">
      <div className="flex justify-between px-5 pt-5">
        <div>
          <StarsWidget rating={review.rating} />
        </div>
        <div className="">{format(Date.parse(review.date), 'MMMM d, yyyy')}</div>
      </div>
      <div className="px-5 py-5 font-bold text-2xl">{review.summary}</div>
      <div className="px-5 pb-5">{review.body}</div>
      <div className="px-5">{review.recommend && <div className="flex justify-left w-full">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" className="w-min mt-2"><path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z" /></svg>
        <span className="pl-3 mt-1 text-s pb-5">I recommend this product</span></div>}</div>
      <div>{review.response && <div className="pb-5">
        <div className="ml-5 mr-5 bg-slate-200">
          <div className="px-3 py-3 font-bold">Response:</div>
          <div className="pl-3 pb-3">{review.response}</div>
        </div>
      </div>}</div>
      <div>{review.photos.length > 0 && <div className="pb-5 px-5 carousel">
        {review.photos.map(photo => <CarouselPhoto src={photo.url}/>)}
        </div>}</div>
      <div className="px-5 pb-5">
        <small>
          Helpful?{' '}
          <span
            style={{
              textDecoration: 'underline',
              cursor: 'pointer'
              //pointerEvents: helpfulClicks.includes(answer.answer_id) ? 'none' : 'auto',
            }}
            onClick={() => console.log()}
          >
            Yes ({ })
          </span>{' '}
          | <Report />
        </small>
      </div>
    </div>
  )
}