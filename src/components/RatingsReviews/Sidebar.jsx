import React from 'react'
import MainAverage from './MainAverage.jsx'
import TotalsFilters from './TotalsFilters.jsx'
import FitSliders from './FitSliders.jsx'

export default function Sidebar(props) {

  return (

    <div className="flex-column basis-4/12 border-2">
      <div className="border-2">Header</div>
      <MainAverage />
      <div className="border-2">Recommended Box</div>
      <TotalsFilters />
      <FitSliders />
    </div>

  )
}