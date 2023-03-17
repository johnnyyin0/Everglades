
let ProductName = ({currentProduct}) => {
  return (
    <>
    <p>{currentProduct.category}</p>
    <h2>{currentProduct.name}</h2>
    <p>{currentProduct.default_price}</p>
    </>
  )
}

export default ProductName;