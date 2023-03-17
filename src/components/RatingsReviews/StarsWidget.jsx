import Star from "./Star.jsx"

export default function StarsWidget({rating}) {

  //hardcode for testing
  rating = rating | 3.33;

  return (
    <div>
      <Star pctFilled={300} />
    </div>
  )
}