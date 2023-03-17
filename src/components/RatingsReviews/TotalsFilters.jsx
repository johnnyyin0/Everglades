import React from 'react'
import StarAvgSlider from './StarAvgSlider'
export default function TotalsFilters(props) {

  return (
    <div className="mb-5">
      <StarAvgSlider num={5} avg={"75"}/>
      <StarAvgSlider num={4} avg={60}/>
      <StarAvgSlider num={3} avg={50}/>
      <StarAvgSlider num={2} avg={30}/>
      <StarAvgSlider num={1} avg={20}/>
    </div>
  )
}