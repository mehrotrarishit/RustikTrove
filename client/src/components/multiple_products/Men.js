import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/action';
import { NavLink } from 'react-router-dom';
import './multiple.css';

const Men = () => {

  const { products } = useSelector((state) => state.getproductsdata);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(product => product.id.toLowerCase().includes('m'));

  return (
    <div className="multiple_page">
      <div className="multiple_row">
      {filteredProducts && filteredProducts.map((product, index) => (
        <div className="mr1">
          <NavLink to={`/product/${product.id}`} className="nav-link">
          <img src={product.image_url} />
          <h3 className="mr1_title">{product.product_name}</h3>
          <h4 className="mr1_price">{product.price}</h4>
          </NavLink>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Men;
