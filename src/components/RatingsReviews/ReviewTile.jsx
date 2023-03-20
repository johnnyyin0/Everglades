import React from 'react'
import StarsWidget from './StarsWidget'

export default function ReviewTile(props) {

  return (
    <div className="flex border-2">
      <div>Review Tile</div>
      <StarsWidget />
    </div>
  )
}