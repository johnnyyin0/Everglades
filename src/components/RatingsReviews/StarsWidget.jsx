import Star from "./Star.jsx"

export default function StarsWidget({ rating }) {

  const starsArray = new Array(5)
  for (let i = 0; i < starsArray.length; i++) {
    if (rating - 1 > 0) {
      starsArray[i] = 100;
    } else if (rating - 1 > -1) {
      starsArray[i] = rating * 100;
    } else {
      starsArray[i] = 0
    }
    rating--
  }

  return (
    <div className="flex-row -ml-1">
      {starsArray.map(star => {
        return <Star pctFilled={star} />
      })
      }
    </div>
  )
}