import React from 'react'
import MainAverage from './MainAverage.jsx'
import TotalsFilters from './TotalsFilters.jsx'
import FitSliders from './FitSliders.jsx'

export default function Sidebar(props) {

  //hardcoded for testing
  const avgReview = 3.5;
  const pctRecommended = 97;

  return (

    <div className="flex-column basis-4/12 h-max border-2 ml-5 mt-5">
      <MainAverage avgReview={avgReview} pctRecommended={pctRecommended}/>
      <div className="border-2">Recommended Box</div>
      <TotalsFilters />
      <FitSliders />
    </div>

  )
}