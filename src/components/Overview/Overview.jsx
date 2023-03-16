import Axios from 'axios';
import ProductName from './productName.jsx';
import StarsWidget from '../RatingsReviews/StarsWidget.jsx'
import ProductDescription from './ProductDescription.jsx';
import Carosel from './Carosel.jsx';
import Styles from './styles.jsx';
let Overview = () => {



  return (
    <>
    <div className="grid grid-cols-6 gap-2" >

      <div className='bg-red-500 rounded-lg shadow-xl min-h-[50px] col-span-4 row-span-4'>
        <img src="https://webkit.org/demos/srcset/image-src.png"></img>
      </div>

      <div className='bg-red-500 rounded-lg shadow-xl min-h-[50px] col-span-2'>
        <StarsWidget />
        </div>


      <div className='bg-red-500 rounded-lg shadow-xl min-h-[50px] col-span-2'>
        <ProductName />
      </div>

      <div className='bg-red-500 rounded-lg shadow-xl min-h-[50px] col-span-2'>
        <Styles />
        </div>

      <div className='bg-red-500 rounded-lg shadow-xl min-h-[50px] col-span-2'>
        Add cart
        </div>

    </div>
    <ProductDescription />
    <Carosel />
    </>
  );
}

export default Overview;