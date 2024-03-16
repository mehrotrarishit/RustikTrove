import React, { useState, useEffect } from 'react';
import logo from '../../image/logofinal.png';
import './cart.css';

const Right = ({ item }) => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [item]);

    const totalAmount = () => {
        if (item && Array.isArray(item)) {
            let totalPrice = 0;
            item.forEach((i) => {
                const priceWithoutRupee = parseFloat(i.price.replace(/[^\d.]/g, '')) * 100;
                totalPrice += !isNaN(priceWithoutRupee) ? i.quantity*priceWithoutRupee : 0;
            });
            setPrice(totalPrice / 100);
        } else {

            setPrice(0);
        }
    };
    const paymentHandlercart = async (e) => {
        const currency="INR";
        const amount=(await price)*100;
        // const amount = parseInt(amount1.replace(/[^0-9]/g, ''), 10);
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
        <div className='right_cart'>
            <div>
                <p className='right-top'>Your order is Eligible for FREE Delivery.</p> <br />
                <span style={{ color: "#565959" }}>Select this option at checkout.Details</span>
                <h3 className='import'> Subtotal({item ? item.reduce((total, i) => total + i.quantity, 0) : 0} items):{''}
                    <strong style={{ fontWeight: 700, color: '#111' }}>&#8377;{price}.00</strong></h3>
                <button onClick={paymentHandlercart} className='rightcart_btn'>PLACE ORDER</button>
                <div className="emi" >
                    Emi available
                </div>
            </div>
        </div>
    )
}

export default Right;
