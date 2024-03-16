import React, { useState, useEffect, useContext } from 'react';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';
import logo from '../../image/logofinal.png';
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
  
  const paymentHandlermlp = async (e) => {
    const currency="INR";
    const amount="499000";
    console.log(amount);
    const response = await fetch(`/order`, {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: "qwsaq1",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_5ua9xTjBS5zVfZ", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Rustik Trove", //your business name
      description: "Test Transaction",
      image: logo,
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          `/order/validate`,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Web Dev Matrix", //your customer's name
        email: "webdevmatrix@example.com",
        contact: "9000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color:"#604f4f" ,
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
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
          {account?<button className='BN' onClick={paymentHandlermlp}>Buy Now</button>
          :<button className='BN' onClick={() => history("/login")}>Buy Now</button>}
          
        </div>
      </div>
    </div>
  );
};

export default MostLovedProduct;
