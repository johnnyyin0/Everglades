import React, { useState } from 'react';

const Banner = ({ theme, setTheme }) => {
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
          <input type="text" value={searchText} onChange={handleSearch} placeholder=" Search"
            style={{ padding: '5px', borderRadius: '0', border: 'none', height: '40px', backgroundColor: 'white' }}
          />
          <button style={{ padding: '5px', borderRadius: '0px', border: 'none', backgroundColor: 'white', color: 'grey', }}>
            <img src="../icons/search_icon.jpg" alt="search icon" style={{ width: '30px', height: '30px', background: 'white' }}></img>
          </button>
          <img src="../icons/heart.png" alt="heart icon" className="w-[25px] h-[25px] ml-[20px] cursor-pointer" ></img>
          <img src="../icons/cart.png" alt="cart icon" style={{ width: '30px', height: '30px', marginLeft: '20px', cursor: 'pointer', }}></img>
        </div>
      </div>
      <div className="relative top-[90px] flex items-center justify-center bg-[#f2f2f2] p-[10px] mb-[60px] dark:bg-zinc-600" style={{ width: '100%' }}>
        <b>
            SIGN UP NOW AND GET 20% OFF + FREE SHIPPING ON YOUR FIRST ORDER!{' '}
          <u style={{ cursor: 'pointer' }}>Details Here</u>
        </b>
    </div>
    </>
  );
};
export default Banner;