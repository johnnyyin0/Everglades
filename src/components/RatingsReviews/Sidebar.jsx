import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainAverage from './MainAverage.jsx'
import TotalsFilters from './TotalsFilters.jsx'
import FitSliders from './FitSliders.jsx'

export default function Sidebar({filter, setFilter, id}) {

  const [reviewMeta, setReviewMeta] = useState(null)
  const totalRatings = 0
  const pctRecommended = 0
  const avgReview = 0.00.toFixed(1)

  useEffect(() => {
    let options = {
      url: 'http://localhost:3000/reviews/meta',
      method: 'post',
      data: { product_id: id}
    };
    axios(options)
      .then(res => {
        let meta = res.data
        setReviewMeta(meta)
        for (let key in meta.ratings) {
          totalRatings += parseInt(meta.ratings[key])
        }

      })
      .catch(err => console.log(err.data))
  }, [id])


  const sampleData = {
    "product_id": "37317",
    "ratings": {
        "1": "2",
        "2": "2",
        "3": "14",
        "4": "8",
        "5": "47"
    },
    "recommended": {
        "false": "5",
        "true": "68"
    },
    "characteristics": {
        "Size": {
            "id": 125052,
            "value": "3.0000000000000000"
        },
        "Width": {
            "id": 125053,
            "value": "3.3461538461538462"
        },
        "Comfort": {
            "id": 125054,
            "value": "3.6923076923076923"
        },
        "Quality": {
            "id": 125055,
            "value": "3.5625000000000000"
        }
    }
}
  //hardcoded for testing
  // const avgReview = 3.5;
  // const pctRecommended = 97;

  return (

    <div className="flex-column w-max h-max border-2 ml-5 mt-5">
      <MainAverage avgReview={avgReview} pctRecommended={pctRecommended}/>
      <TotalsFilters setFilter={setFilter} />
      <FitSliders />
    </div>

  )
}