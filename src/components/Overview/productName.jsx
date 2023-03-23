
let ProductName = ({currentProduct, styleSelected}) => {
  return (
    <div className='ml-6'>
    <p>{currentProduct.category}</p>
    <h2 className="font-semibold text-lg">{currentProduct.name}</h2>
    {styleSelected.sale_price ?
          <>
          <div className="flex justify-start">
          <p className="line-through">{styleSelected.original_price}</p>
          <p className="ml-3">{styleSelected.sale_price}</p>
          </div>
          </>
        : <p>{styleSelected.original_price}</p>}
    <p>{styleSelected.default_price}</p>
    </div>
  )
}

export default ProductName;