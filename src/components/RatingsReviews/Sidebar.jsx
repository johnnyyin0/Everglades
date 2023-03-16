import React from 'react'
import MainAverage from './MainAverage.jsx'
import TotalsFilters from './TotalsFilters.jsx'
import FitSliders from './FitSliders.jsx'

export default function Sidebar(props) {

  return (

    <div>
      <div>Reviews Sidebar</div>
      <div>Header</div>
      <MainAverage />
      <div>Recommended Box</div>
      <TotalsFilters />
      <FitSliders />
    </div>

  )
}