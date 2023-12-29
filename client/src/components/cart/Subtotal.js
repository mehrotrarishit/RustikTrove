import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cart.css';

const Subtotal = ({ item }) => {
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
        <div className='sub_item'>
            <h3>
                Subtotal( {item ? item.length : 0} item):{' '}
                <strong style={{ fontWeight: 700, color: '#111' }}>&#8377;{price}.00</strong>
            </h3>
        </div>
    );
};

export default Subtotal;


