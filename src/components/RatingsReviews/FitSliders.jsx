
import React from 'react'
import _ from 'underscore'
import FitSlider from './FitSlider.jsx'

export default function FitSliders({ characteristics }) {

  //metadata has a "characteristics" tab to iterate through:
  // "characteristics": {
  //   "Size": {
  //     "id": 14,
  //     "value": "4.0000"
  //   },
  //   "Width": {
  //     "id": 15,
  //     "value": "3.5000"
  //   },
  //   "Comfort": {
  //     "id": 16,
  //     "value": "4.0000"
  //   },

  return (
    <div className="px-5 pb-10" title="fit-sliders">
    {characteristics && _.map(characteristics, (vals, char) => (
    <FitSlider fitChar={char} charId={vals.id} charVal={vals.value} key={vals.id}/>))}
    </div>
  )
}