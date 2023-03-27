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
    <div className="border-2 border-[#21355F] relative  scale-90 hover:scale-100 ease-in-out duration-300 bg-white rounded-lg min-w-[220px] dark:bg-zinc-800 dark:border-slate-200">
    <div >
      <a href={hrefUrl}>
    { product.photos[0].thumbnail_url == null ?
      <img src={"https://webkit.org/demos/srcset/image-src.png"} className="rounded border bg-white p-1 object-cover h-[270px] w-[300px] dark:bg-zinc-800 dark:border-zinc-800" />
      : <img src={product.photos[0].thumbnail_url} className="rounded border bg-white p-1 object-cover h-[270px] w-[300px] dark:bg-zinc-800 dark:border-zinc-800" />
    }
        </a>
    <StarsWidget rating={avgReview} />
      <div>
        <p className="font-sans text-lg">{carouselProduct.category}</p>
        <p className="font-sans font-semibold text-1xl">{carouselProduct.name}</p>
          {product.sale_price ?
          <>
          <p className="line-through font-sans text-lg">{product.original_price}</p>
          <p className="font-sans text-lg">{product.sale_price}</p>
          </>
        : <p className="font-sans text-lg">{product.original_price}</p>}
        </div>
        </div>
        <button className="max-h-[50px] max-w-[60px] absolute right-0 -top-0 hover:scale-100 ease-in-out duration-300 rounded opacity-80" onClick={handleModal}>⍟</button>
        </div>
        );
      }


    export default CaroselProduct;