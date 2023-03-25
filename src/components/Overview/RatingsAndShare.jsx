import StarsWidget from '../RatingsReviews/StarsWidget.jsx'
import {FacebookShareButton, PinterestShareButton, TwitterShareButton} from "react-share";
import {FacebookIcon, PinterestIcon, TwitterIcon} from "react-share";
import {useState, useEffect} from "react";
import axios from "axios";

const RatingsAndShare = ({currentProduct, photo}) => {

  let [avgReview, setAvgReview] = useState(3)

   useEffect(() => {
    let options = {
      url: `http://localhost:3000/meta/${currentProduct.id}`,
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

  return (
    <div>
      <div className="pl-5">
      <StarsWidget rating={avgReview} />
      </div>
      <div className="flex flex-row pt-5">

        <div className="" >
        <FacebookShareButton url={window.location.href} title={currentProduct.name} quote={currentProduct.description}>
          <FacebookIcon className="max-h-[30px]" round={true}></FacebookIcon>
        </FacebookShareButton>
        </div>

        <div className="" >
        <PinterestShareButton url={window.location.href} media={photo} description={currentProduct.name} >
          <PinterestIcon className="max-h-[30px]" round={true}></PinterestIcon>
        </PinterestShareButton>
        </div>

        <div className="" >
        <TwitterShareButton url={window.location.href} title={currentProduct.name}>
          <TwitterIcon className="max-h-[30px]" round={true}></TwitterIcon>
        </TwitterShareButton>
        </div>
      </div>
    </div>
  )
}
export default RatingsAndShare;