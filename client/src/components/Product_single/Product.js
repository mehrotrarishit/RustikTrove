// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { Divider } from '@mui/material';
// import { useNavigate, useParams } from 'react-router-dom';
// import "./product.css";
// import { LoginContext } from '../context/ContextProvider';
// import CircularProgress from '@mui/material/CircularProgress';

// const Product = () => {
//   const { id } = useParams("");
//   const history = useNavigate("");
//   const { account, setAccount } = useContext(LoginContext);
//   const [inddata, setIndData] = useState(null);

//   const getinddata = async () => {
//     try {
//       const res = await fetch(`/product/${id}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });

//       const data = await res.json();
//       console.log(data);

//       if (res.status !== 201) {
//         console.log("no data available");
//       } else {
//         console.log("get data");
//         setIndData(data);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     setTimeout(getinddata, 500);
//   }, [id]);

//   const addtocart = async (id) => {
//     try {
//       const checkres = await fetch(`/addcart/${id}`, {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           inddata
//         }),
//         credentials: "include"
//       });

//       const data1 = await checkres.json();

//       if (checkres.status === 401 || !data1) {
//         console.log("user invalid");
//         alert("user invalid");
//       } else {
//         history("/cart");
//         setAccount(data1);
//       }
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   };
//   const payment = async(id) => {
//     const paymentorder = await fetch(`/paymentRoute`)
//   }
//   return (
//     <div className="product_section">
//       {inddata ? (
//         <div className="product_container">
//           <div className="left_product">
//             <img src={inddata.image_url} alt="" />
//             <div className="cart_btn">
//               { account ?
//               <button className="cart_btn1" onClick={() =>  addtocart(inddata.id)}>Add to Cart</button>
//               :
//               <button className="cart_btn1" onClick={() =>  history("/login")}>Add to Cart</button>
//               }
//               <button onClick={payment} className="cart_btn2">Buy Now</button>
//             </div>
//           </div>
//           <div className="right_product">
//             <h3>{inddata.product_name}</h3>
//             <Divider />
//             <p className="mrp">Price : {inddata.price}</p>
//             <p className="description">About the Item : <span style={{ color: "#565959", fontSize: 17, fontWeight: 500, letterSpacing: "0.7px" }}>{inddata.details}</span></p>
//           </div>
//         </div>
//       ) : (
//         <div className="circle">
//           <CircularProgress />
//           <h2>Loading...</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;




import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Divider } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import "./product.css";
import { LoginContext } from '../context/ContextProvider';
import CircularProgress from '@mui/material/CircularProgress';
import logo from '../../image/logofinal.png';

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

  const paymentHandler = async (e) => {
    const currency="INR";
    const amount1=await inddata.price;
    const amount = parseInt(amount1.replace(/[^0-9]/g, ''), 10);
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
    <div className="product_section">
      {inddata ? (
        <div className="product_container">
          <div className="left_product">
            <img src={inddata.image_url} alt="" />
            <div className="cart_btn">
              {account ? (
                <button className="cart_btn1" onClick={() => addtocart(inddata.id)}>Add to Cart</button>
              ) : (
                <button className="cart_btn1" onClick={() => history("/login")}>Add to Cart</button>
              )}
              {account?
              (<button onClick={paymentHandler} className="cart_btn2">Buy Now</button>)
              :
              (<button onClick={() => history("/login")} className="cart_btn2">Buy Now</button>)
              }
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
