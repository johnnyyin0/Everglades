import StarsWidget from '../RatingsReviews/StarsWidget.jsx'
import {FacebookShareButton, PinterestShareButton, TwitterShareButton} from "react-share";
import {FacebookIcon, PinterestIcon, TwitterIcon} from "react-share";

const RatingsAndShare = ({currentProduct, photo}) => {
  return (
    <div>
      <StarsWidget />
      <div className="flex justify-start">
        <FacebookShareButton className="flex-1" url={window.location.href} title={currentProduct.name} quote={currentProduct.description}>
          <FacebookIcon className="max-h-[30px]" round={true}></FacebookIcon>
        </FacebookShareButton>
        <PinterestShareButton className="flex-1" url={window.location.href} media={photo} description={currentProduct.name} >
          <PinterestIcon className="max-h-[30px]" round={true}></PinterestIcon>
        </PinterestShareButton>
        <TwitterShareButton className="flex-1" url={window.location.href} title={currentProduct.name}>
          <TwitterIcon className="max-h-[30px]" round={true}></TwitterIcon>
        </TwitterShareButton>
      </div>
    </div>
  )
}
export default RatingsAndShare;