import React, { useState, useEffect } from 'react';
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
                // Remove rupee sign and convert to integer
                const priceWithoutRupee = parseInt(i.price.replace(/\D/g, ''), 10);
                totalPrice += !isNaN(priceWithoutRupee) ? priceWithoutRupee : 0;
            });
            setPrice(totalPrice);
        } else {
            // Handle the case when item is undefined or not an array
            setPrice(0);
        }
    };

    return (
        <div className='right_cart'>
            <div>
                <p className='right-top'>Your order is Eligible for FREE Delivery.</p> <br />
                <span style={{ color: "#565959" }}>Select this option at checkout.Details</span>
                <h3 className='import'> Subtotal( {item ? item.length : 0} item):{' '}
                    <strong style={{ fontWeight: 700, color: '#111' }}>&#8377;{price}.00</strong></h3>
                <button className='rightcart_btn'>PLACE ORDER</button>
                <div className="emi" >
                    Emi available
                </div>
            </div>
        </div>
    )
}

export default Right;
