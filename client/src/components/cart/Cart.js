import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Divider } from '@mui/material';
import './cart.css';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
const Cart = () => {

    const [cartdata, setCartdata] = useState("");
    // console.log(cartdata.carts);

    const getdatabuy = async () => {
        const res = await fetch("/cartdetails", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();

        if (res.status !== 201) {
            console.log("error")
        } else {
            setCartdata(data.carts);
        }
    };

    useEffect(() => {
        getdatabuy();
    }, []);

    return (
        <>
            {
                cartdata.length ? <div className='cart_section'>
                    <div className='cart_container'>
                        <div className='cart_left'>
                            <h1>Shopping Cart</h1>
                            <p>Select all items</p>
                            <span className='leftcartprice'></span>
                            <Divider />
                            {
                                cartdata.map((e, k) => {
                                    return (
                                        <>
                                            
                                                <div className='item_container'>
                                                    <img src={e.image_url} alt={e.product_name}></img>
                                                    <div className='item_details'>
                                                        <h3>{e.product_name}</h3>
                                                        <p className='differentprice'>{e.details}</p>
                                                        <p className='unusual'>Usually dispatched in 8 days</p>
                                                        <p>Eligible for free shipping</p>
                                                        <Option deletedata={e._id} get={getdatabuy}/>
                                                    </div>
                                                    <h3 className='item_price'>{e.price}</h3>
                                                </div>
                                                <Divider />
                                        </>
                                    )
                                }
                                )
                            }
                            <Subtotal item={cartdata}/>
                        </div>
                        <div>
                            <Right item={cartdata} />
                        </div>
                    </div>
                </div> : ""
            }
        </>

    )
}

export default Cart
