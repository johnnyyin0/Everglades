
let ProductName = ({currentProduct, styleSelected}) => {
  return (
    <>
    <p>{currentProduct.category}</p>
    <h2>{currentProduct.name}</h2>
    {styleSelected.sale_price ?
          <>
          <p className="line-through">{styleSelected.original_price}</p>
          <p>{styleSelected.sale_price}</p>
          </>
        : <p>{styleSelected.original_price}</p>}
    <p>{styleSelected.default_price}</p>
    </>
  )
}

export default ProductName;