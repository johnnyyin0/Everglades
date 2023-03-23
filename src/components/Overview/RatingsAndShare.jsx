import StarsWidget from '../RatingsReviews/StarsWidget.jsx'
import {FacebookShareButton, PinterestShareButton, TwitterShareButton} from "react-share";
import {FacebookIcon, PinterestIcon, TwitterIcon} from "react-share";

const RatingsAndShare = ({currentProduct, photo}) => {
  return (
    <div>
      <StarsWidget />
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