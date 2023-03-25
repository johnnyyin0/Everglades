import React from 'react';
import axios from 'axios';
import StarsWidget from '../RatingsReviews/StarsWidget.jsx';
import {useState, useEffect} from 'react';

const CaroselProduct = ({product, setModal, selectClickedProduct}) => {

  let hrefUrl = `http://localhost:5173/${product.productId}`;

  let [carouselProduct, setCarouselProduct] = useState('');
  let [avgReview, setAvgReview] = useState(3)

  useEffect(() => {
    axios.get(`http://localhost:3000/product/${product.productId}`)
    .then(res => {
      setCarouselProduct(res.data);
    })
  }, [])

  useEffect(() => {
    let options = {
      url: `http://localhost:3000/meta/${product.productId}`,
    };
    axios(options)
      .then(res => {
        let meta = res.data
        let avgDividend = 0
        let totalRatings = 0
        for (let key in meta.ratings) {
          totalRatings += parseInt(meta.ratings[key])
          avgDividend += parseInt(key) * parseInt(meta.ratings[key])
        }
        setAvgReview((avgDividend/totalRatings).toFixed(1))

      })
      .catch(err => console.log(err))
  }, [])

  let handleModal = () => {
    selectClickedProduct(carouselProduct);
    setModal(true);
  }

  return (
    <div className="carousel-item border-2 border-[#505050] mr-2 ml-2 hover:scale-105 ease-in-out duration-300 bg-white relative">
    <div className="grid grid-cols-1 auto-rows-max gap-2">
    { product.photos[0].thumbnail_url == null ?
      <img src={"https://webkit.org/demos/srcset/image-src.png"} className="rounded border bg-white p-1 object-cover h-[180px] w-[180px]" />
      : <img src={product.photos[0].thumbnail_url} className="rounded border bg-white p-1 object-cover h-[180px] w-[180px]" />
    }
      <a href={hrefUrl} className='text-black'>
    <StarsWidget rating={avgReview} />
      <div className="underline">
        <p className="">{carouselProduct.category}</p>
        <p className="">{carouselProduct.name}</p>
          {product.sale_price ?
          <>
          <p className="line-through">{product.original_price}</p>
          <p>{product.sale_price}</p>
          </>
        : <p>{product.original_price}</p>}
        </div>
      </a>
        </div>
        <button className="max-h-[50px] max-w-[60px] absolute -right-0 -top-0 hover:scale-105 ease-in-out duration-300 rounded opacity-80" onClick={handleModal}>⍟</button>
        </div>
        );
      }


    export default CaroselProduct;