import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cart.css';
const Subtotal = ({ item }) => {
    const [price, setPrice] = useState(0);
    console.log(item);
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

    return (
        <div className='sub_item'>
            <h3>
                Subtotal({item ? item.reduce((total, i) => total + i.quantity, 0) : 0} items):{''}
                <strong style={{ fontWeight: 700, color: '#111' }}>&#8377;{price.toFixed(2)}</strong>
            </h3>
        </div>
    );
};

export default Subtotal;
