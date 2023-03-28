import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import StarsWidget from '../RatingsReviews/StarsWidget.jsx';

const CaroselProduct = ({ product, setModal, selectClickedProduct }) => {
  const [carouselProduct, setCarouselProduct] = useState({});
  const [avgReview, setAvgReview] = useState(3);

  const memoizedFetchData = useMemo(() => {
    const fetchData = async () => {
      try {
        const [carouselProductRes, metaRes] = await Promise.all([
          axios.get(`api/product/${product.productId || 37311}`),
          axios.get(`api/meta/${product.productId || 37311}`),
        ]);
        setCarouselProduct(carouselProductRes.data);

        const { ratings } = metaRes.data;
        const totalRatings = Object.values(ratings).reduce((acc, cur) => acc + parseInt(cur), 0);
        const avgDividend = Object.entries(ratings).reduce((acc, [key, val]) => acc + parseInt(key) * parseInt(val), 0);
        setAvgReview((avgDividend / totalRatings).toFixed(1));
      } catch (error) {
        console.log(error);
      }
    };
    return fetchData;
  }, [product.productId]);

  useEffect(() => {
    memoizedFetchData();
  }, [memoizedFetchData]);

  const handleModal = () => {
    selectClickedProduct(carouselProduct);
    setModal(true);
  };

  const hrefUrl = `http://localhost:5173/${product.productId || 37311}`;

  return (
    <div className="border-2 border-[#21355F] relative  scale-90 hover:scale-100 ease-in-out duration-300 bg-white rounded-lg min-w-[220px] dark:bg-zinc-800 dark:border-slate-200">
      <div>
        <a href={hrefUrl}>
          {product.photos[0].thumbnail_url == null ? (
            <img
              src={'https://webkit.org/demos/srcset/image-src.png'}
              className="rounded border bg-white p-1 object-cover h-[320px] w-[230px] dark:bg-zinc-800 dark:border-zinc-800"
            />
          ) : (
            <img
              src={product.photos[0].thumbnail_url}
              className="rounded border bg-white p-1 object-cover h-[320px] w-[215px] max-w-[215px] dark:bg-zinc-800 dark:border-zinc-800"
            />
          )}
        </a>
        <StarsWidget rating={avgReview} />
        <div>
          <p className="font-sans text-lg">{carouselProduct.category || 'Outfit Category'}</p>
          <p className="font-sans font-semibold text-1xl">{carouselProduct.name || 'Outfit Name'}</p>
          {product.sale_price ? (
            <>
              <p className="line-through font-sans text-lg">{product.original_price}</p>
              <p className="font-sans text-lg">{product.sale_price}</p>
            </>
          ) : (
            <p className="font-sans text-lg">{product.original_price}</p>
          )}
        </div>
      </div>
      <button className="max-h-[50px] max-w-[60px] absolute right-0 -top-0 hover:scale-100 ease-in-out duration-300 rounded opacity-80"onClick={handleModal}>
      ⍟</button>
    </div>
    );
  };


    export default CaroselProduct;