
let ProductName = ({currentProduct, styleSelected}) => {
  return (
    <div className='ml-6' title='product-name'>
    <p className="font-sans text-3xl">{currentProduct.category}</p>
    <h1 className="font-sans font-semibold text-4xl whitespace-nowrap">{currentProduct.name}</h1>
    {styleSelected.sale_price ?
          <>
          <div className="flex justify-start">
          <p className="font-sans line-through mt-3 ml-1 text-2xl">${styleSelected.original_price}</p>
          <p className="font-sans mt-3  text-2xl pl-4">${styleSelected.sale_price}</p>
          </div>
          </>
        : <p className="font-sans mt-3  text-2xl">${styleSelected.original_price}</p>}
    <p className="font-sans mt-3 text-2xl">{styleSelected.default_price}</p>
    </div>
  )
}

export default ProductName;