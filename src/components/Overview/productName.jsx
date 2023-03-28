
let ProductName = ({currentProduct, styleSelected}) => {
  return (
    <div className='ml-6 mt-2'>
    <p className="font-sans text-2xl">{currentProduct.category}</p>
    <h2 className="font-sans font-semibold text-5xl">{currentProduct.name}</h2>
    {styleSelected.sale_price ?
          <>
          <div className="flex justify-start">
          <p className="font-sans line-through mt-3 ml-1 text-xl">{styleSelected.original_price}</p>
          <p className="font-sans mt-3 ml-1 text-xl">{styleSelected.sale_price}</p>
          </div>
          </>
        : <p className="font-sans mt-3 ml-1 text-xl">{styleSelected.original_price}</p>}
    <p className="font-sans mt-3 ml-1 text-xl">{styleSelected.default_price}</p>
    </div>
  )
}

export default ProductName;