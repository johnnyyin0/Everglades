
let ProductName = ({currentProduct, styleSelected}) => {
  return (
    <>
    <p>{currentProduct.category}</p>
    <h2>{currentProduct.name}</h2>
    {styleSelected.sale_price ?
          <>
          <div className="flex justify-start">
          <p className="line-through">{styleSelected.original_price}</p>
          <p className="ml-3">{styleSelected.sale_price}</p>
          </div>
          </>
        : <p>{styleSelected.original_price}</p>}
    <p>{styleSelected.default_price}</p>
    </>
  )
}

export default ProductName;