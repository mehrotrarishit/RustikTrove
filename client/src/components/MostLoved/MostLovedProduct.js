import React, { useState, useEffect, useContext } from 'react';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';
import './most.css';

const MostLovedProduct = () => {
  const product_name = "PRINTED KNIT SWEATER";
  const history = useNavigate("");
  const { account, setAccount } = useContext(LoginContext);

  const addtocart = async (product_name) => {
    try {
      const checkres = await fetch('/addcartmlp', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          product_name
        }),
        credentials: "include"
      });

      if (!checkres.ok) {
        console.log("User invalid");
        alert("User invalid");
        return;
      }

      const data1 = await checkres.json();

      if (!data1) {
        console.log("Invalid response data");
        alert("Invalid response data");
        return;
      }

      history("/cart");
      setAccount(data1);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="container">
      <h2>Most Loved Product</h2>
      <Divider />
      <div className="content">
        <div className="image">
          <img src="https://static.zara.net/photos///2023/I/0/2/p/6674/300/802/2/w/448/6674300802_6_1_1.jpg?ts=1691057348561" alt="PRINTED KNIT SWEATER" />
        </div>
        <div className="information">
          <h3>{product_name}</h3>
          <p>Knit sweater with a round neck and long sleeves. Contrast print all over the garment. The "PRINTED KNIT SWEATER" is a stylish and comfortable knit sweater designed to elevate your winter wardrobe. Crafted with meticulous attention to detail, this sweater is a perfect blend of fashion and functionality.</p>
          <p className='MLP_price'>Price: ₹ 4,990.00</p>
          {
            account ? <button className='ATC' onClick={() => addtocart(product_name)}>Add to Cart</button>
            : <button className='ATC' onClick={() => history("/login")}>Add to Cart</button>
          }
          <button className='BN'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default MostLovedProduct;
