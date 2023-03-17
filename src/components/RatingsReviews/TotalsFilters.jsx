import React from 'react'
import StarAvgSlider from './StarAvgSlider'
export default function TotalsFilters(props) {

  return (
    <div className="border-2">
      <div>
        <span className="btn btn-xs">5 stars</span>
        <StarAvgSlider />
      </div>
      <div>
        <span className="btn btn-xs">4 stars</span>
        <StarAvgSlider />
      </div>
      <div>
        <span className="btn btn-xs">3 stars</span>
        <StarAvgSlider />
      </div>
      <div>
        <span className="btn btn-xs">2 stars</span>
        <StarAvgSlider />
      </div>
      <div>
        <span className="btn btn-xs">1 star</span>
        <StarAvgSlider />  </div>
    </div>
  )
}