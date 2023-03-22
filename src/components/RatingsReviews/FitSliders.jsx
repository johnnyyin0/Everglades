
import React from 'react'
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
    <div className="px-5 pb-10">
      <FitSlider />
      <FitSlider />
      <FitSlider />
    </div>
  )
}