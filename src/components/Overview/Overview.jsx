import Axios from 'axios';

let Overview = () => {
  return (




    <>
    <div className="grid grid-cols-6 gap-2" >
      <div className='bg-red-500 rounded-lg shadow-xl min-h-[50px] col-span-5 row-span-4'>
        <img src="https://webkit.org/demos/srcset/image-src.png"></img>
      </div>
      <div className='bg-red-500 rounded-lg shadow-xl min-h-[50px]'>ratings</div>
      <div className='bg-red-500 rounded-lg shadow-xl min-h-[50px]'>Name</div>
      <div className='bg-red-500 rounded-lg shadow-xl min-h-[50px]'>Styles</div>
      <div className='bg-red-500 rounded-lg shadow-xl min-h-[50px]'>Add cart</div>
    </div>
    </>
  );
}

export default Overview;