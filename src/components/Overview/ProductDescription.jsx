let ProductDescription = ({currentProduct}) => {

  return (
    <div className="flex justify-between">
      <div className="max-w-md">
      <p>{currentProduct.description}</p>
      </div>
      <ul>
      {currentProduct.features.map(feature => {
        return <li key={feature.feature}>-{feature.feature}: {feature.value}</li>
      })}
      </ul>
    </div>
  )
}
export default ProductDescription;