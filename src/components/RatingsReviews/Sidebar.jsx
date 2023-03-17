import React from 'react'
import MainAverage from './MainAverage.jsx'
import TotalsFilters from './TotalsFilters.jsx'
import FitSliders from './FitSliders.jsx'

export default function Sidebar(props) {

  return (

    <div className="flex-column basis-4/12 border-2 ml-10 mt-10">
      <h3 className="border-2">Ratings & Reviews</h3>
      <MainAverage />
      <div className="border-2">Recommended Box</div>
      <TotalsFilters />
      <FitSliders />
    </div>

  )
}