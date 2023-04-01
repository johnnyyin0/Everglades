import StarsWidget from '../RatingsReviews/StarsWidget.jsx';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, PinterestIcon, TwitterIcon } from 'react-share';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const RatingsAndShare = ({ currentProduct, photo }) => {
  let [meta, setMeta] = useState(null);

  useEffect(() => {
    const options = {
      url: `api/meta/${currentProduct.id}`,
    };
    let cached = localStorage.getItem(`products${currentProduct.id}meta`);
    if (cached) {
      setMeta(JSON.parse(cached));
    } else {
      axios(options)
      .then((res) => {
        localStorage.setItem(`products${currentProduct.id}meta`, JSON.stringify(res.data));
        setMeta(res.data);
      })
      .catch((err) => console.log(err));
    }
  }, [currentProduct.id]);

  const avgReview = useMemo(() => {
    if (meta) {
      let avgDividend = 0;
      let totalRatings = 0;
      for (let key in meta.ratings) {
        totalRatings += parseInt(meta.ratings[key]);
        avgDividend += parseInt(key) * parseInt(meta.ratings[key]);
      }
      return (avgDividend / totalRatings).toFixed(1);
    }
  }, [meta]);

  return (
    <div title="rating-and-share">
      <div className="pl-5">
        <StarsWidget rating={avgReview} />
      </div>
      <div className="flex flex-row pt-5">
        <div className="">
          <FacebookShareButton url={window.location.href} title={currentProduct.name} quote={currentProduct.description}>
            <FacebookIcon className="max-h-[30px]" round={true}></FacebookIcon>
          </FacebookShareButton>
        </div>
        <div className="">
          <PinterestShareButton url={window.location.href} media={photo} description={currentProduct.name}>
            <PinterestIcon className="max-h-[30px]" round={true}></PinterestIcon>
          </PinterestShareButton>
        </div>
        <div className="">
          <TwitterShareButton url={window.location.href} title={currentProduct.name}>
            <TwitterIcon className="max-h-[30px]" round={true}></TwitterIcon>
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default RatingsAndShare;