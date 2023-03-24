import React, { useState } from 'react';

const Banner = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <div style={{position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#213547', padding: '20px',  zIndex: 1, }}>
        <div style={{fontWeight: 'bold', fontSize: '30px', color: 'white', display: 'flex', alignItems: 'center',}}>
            EVERGLADES
          <img src="../gator_icon.jpeg" alt="Everglades logo" style={{width: '50px', height: '50px', borderRadius: '50%', marginLeft: '10px',}}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="text" value={searchText} onChange={handleSearch} placeholder="Search"
            style={{padding: '5px', borderRadius: '0', border: 'none', marginRight: '10px',}}
          />
          <button style={{ padding: '5px', borderRadius: '5px', border: 'none', backgroundColor: 'white', color: 'grey',}}>
            Search
          </button>
        </div>
      </div>
      <div style={{position: 'relative', top: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f2f2f2', padding: '10px', marginBottom: '50px',}}>
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