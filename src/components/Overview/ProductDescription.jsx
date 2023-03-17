let ProductDescription = ({currentProduct}) => {
  console.log(currentProduct);
  return (
    <div className="flex justify-between">
      <p>{currentProduct.description}</p>
      <ul>
      {currentProduct.features.map(feature => {
        return <li key={feature.feature}>{feature.feature} {feature.value}</li>
      })}
      </ul>
    </div>
  )
}
export default ProductDescription;