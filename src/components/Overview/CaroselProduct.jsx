

const CaroselProduct = ({product}) => {
  return (
  <div className="carousel-item mr-2 ml-2">
    <div className="grid grid-cols-1 auto-rows-max gap-2">
      <img src={product.photos[0].thumbnail_url} className="max-h-[200px]" />
      <div className="bg-gray-300">
        <p className="">{product.name}</p>
        <p className="">{product.sale_price || product.original_price}$</p>
        </div>
        </div>
        </div>
        );
      }


    export default CaroselProduct;