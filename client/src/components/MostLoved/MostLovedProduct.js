import React from 'react';
import { Divider } from '@mui/material';
import './most.css'
const MostLovedProduct = () => {

  return (
    <div className="container">
      <h2>Most Loved Product</h2>
        <Divider />
        <div className="content">
          <div className="image">
            <img src="https://static.zara.net/photos///2023/I/0/2/p/6674/300/802/2/w/448/6674300802_6_1_1.jpg?ts=1691057348561" alt="PRINTED KNIT SWEATER" />
          </div>
          <div className="information">
            <h3>PRINTED KNIT SWEATER</h3>
            <p>Knit sweater with a round neck and long sleeves. Contrast print all over the garment.</p>
            <p>Price: ₹ 4,990.00</p>
            <button>Add to Cart</button>
          </div>
        </div>
    </div>
  );
};

export default MostLovedProduct