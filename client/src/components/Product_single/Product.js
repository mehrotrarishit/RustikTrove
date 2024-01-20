import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Divider } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import "./product.css";
import { LoginContext } from '../context/ContextProvider';
import CircularProgress from '@mui/material/CircularProgress';

const Product = () => {
  const { id } = useParams("");
  const history = useNavigate("");
  const { account, setAccount } = useContext(LoginContext);
  const [inddata, setIndData] = useState(null);

  const getinddata = async () => {
    try {
      const res = await fetch(`/product/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      console.log(data);

      if (res.status !== 201) {
        console.log("no data available");
      } else {
        console.log("get data");
        setIndData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setTimeout(getinddata, 500);
  }, [id]);

  const addtocart = async (id) => {
    try {
      const checkres = await fetch(`/addcart/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inddata
        }),
        credentials: "include"
      });

      const data1 = await checkres.json();

      if (checkres.status === 401 || !data1) {
        console.log("user invalid");
        alert("user invalid");
      } else {
        history("/cart");
        setAccount(data1);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="product_section">
      {inddata ? (
        <div className="product_container">
          <div className="left_product">
            <img src={inddata.image_url} alt="" />
            <div className="cart_btn">
              { account ?
              <button className="cart_btn1" onClick={() =>  addtocart(inddata.id)}>Add to Cart</button>
              :
              <button className="cart_btn1" onClick={() =>  history("/login")}>Add to Cart</button>
              }
              <button className="cart_btn2">Buy Now</button>
            </div>
          </div>
          <div className="right_product">
            <h3>{inddata.product_name}</h3>
            <Divider />
            <p className="mrp">Price : {inddata.price}</p>
            <p className="description">About the Item : <span style={{ color: "#565959", fontSize: 17, fontWeight: 500, letterSpacing: "0.7px" }}>{inddata.details}</span></p>
          </div>
        </div>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default Product;
