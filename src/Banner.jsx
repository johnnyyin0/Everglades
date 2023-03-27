import React, { useState } from 'react';

const Banner = ({ theme, setTheme, cartItems }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleTheme = (evt) => {
    evt.target.checked === true ? setTheme('light') : setTheme('dark')
  }

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#213547', padding: '20px', zIndex: 1, }} className="dark:bg-zinc-800">
        <div style={{ fontWeight: 'bold', fontSize: '30px', color: 'white', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          EVERGLADES
          <img src="../icons/gator_icon.jpeg" alt="Everglades logo" style={{ width: '50px', height: '50px', borderRadius: '50%', marginLeft: '10px', }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label className="swap swap-rotate fill-slate-200 hover:fill-amber-300">


            <input type="checkbox" id="themetoggle" onClick={handleTheme}/>


            <svg className="swap-on w-10 h-10  mr-5 pt-1 fill-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


            <svg className="swap-off fill-inherit w-10 h-10 pt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

          </label>
          <input type="text" value={searchText} onChange={handleSearch} placeholder=" Search" className="p-5 rounded-none h-[40px] bg-white"
          />
            <img src="../icons/search_icon.jpg" alt="search icon" className="w-8 h-8 -ml-8 "></img>
            <div className="indicator">
 {cartItems &&  <span className="indicator-item badge badge-info font-bold text-white badge-sm">{cartItems}</span>}
  <div>

          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 125 107.5"  className="fill-white w-8 h-8 stroke-white right-10 ml-5 hover:fill-emerald-500 cursor-pointer" xmlSpace="preserve"><g><path d="M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z"/></g></svg>
  </div>
</div>
        </div>
      </div>
      <div className="relative top-[90px] flex items-center justify-center bg-[#f2f2f2] p-[10px] mb-[60px] dark:bg-zinc-600">
        <div>
          <b>
            SIGN UP NOW AND GET 20% OFF + FREE SHIPPING ON YOUR FIRST ORDER!{' '}
            <u style={{ cursor: 'pointer' }}>Details Here</u>
          </b>
        </div>
      </div>
    </>
  );
};
export default Banner;