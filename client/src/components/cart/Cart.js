import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Divider } from '@mui/material';
import './cart.css';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams, NavLink } from 'react-router-dom';

const Cart = () => {
    const [cartdata, setCartdata] = useState([]);
    const [loading, setLoading] = useState(true)
    const getdatabuy = async () => {
        try {
            const res = await fetch("/cartdetails", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (res.status === 201) {
                const data = await res.json();

                // Group products by ID and calculate quantity
                const groupedCart = groupByProductId(data.carts);
                setCartdata(groupedCart);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const groupByProductId = (cartItems) => {
        const groupedCart = cartItems.reduce((result, currentItem) => {
            const existingItem = result.find(item => item.id === currentItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                result.push({ ...currentItem, quantity: 1 });
            }

            return result;
        }, []);

        return groupedCart;
    };

    useEffect(() => {
        setTimeout(getdatabuy, 500);
    }, []);

    if (loading) {
        return (
            <div className="circle">
                <CircularProgress />
                <h2>Loading...</h2>
            </div>
        );
    }
    return (
        <div className='cart_section'>
            <div className='cart_container'>
                <div className='cart_left'>
                    <h1>Shopping Cart</h1>
                    <p>Select all items</p>
                    <span className='leftcartprice'></span>
                    <Divider />
                    {cartdata.map((e, k) => (
                        <div key={k} className='item_container'>
                            <NavLink to={`/product/${e.id}`}><img src={e.image_url} alt={e.product_name} ></img> </NavLink>
                            <div className='item_details'>
                                <h3>{e.product_name}</h3>
                                <p className='differentprice'>{e.details}</p>
                                <p className='unusual'>Usually dispatched in 8 days</p>
                                <p>Eligible for free shipping</p>
                                <Option deletedata={e.id} get={getdatabuy} quantity={e.quantity} />
                            </div>
                            <h3 className='item_price'>{e.price}</h3>
                            <Divider />
                        </div>
                    ))}
                    <Subtotal item={cartdata} />
                </div>
                <div>
                    <Right item={cartdata} />
                </div>
            </div>
        </div>
    );
};

export default Cart;
