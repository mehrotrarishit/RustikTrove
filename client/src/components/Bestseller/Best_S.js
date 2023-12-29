import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/action';
import './best_s.css';

const Best_S = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Function to shuffle an array randomly
  const shuffleArray = (array) => {
    if (!array) return []; // Add a check for undefined array
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Shuffle the products array only if it is defined
  const shuffledProducts = shuffleArray(products).slice(0, 8);
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="Bestsellerslide">
      <div className="best_text">
        <h1>Best Sellers</h1>
      </div>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {shuffledProducts.map((product, index) => (
          <NavLink to={`/product/${product._id}`} className='nav-link'>
            <div key={index} className="product_items">
              <div className="product_img">
                <img src={product.image_url} alt={product.product_name} />
              </div>
              <h3>{product.product_name}</h3>
              <p>{product.price}</p>
            </div>
          </NavLink>
        ))}
      </Carousel>
    </div>
  );
};

export default Best_S;