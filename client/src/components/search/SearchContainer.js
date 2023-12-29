import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './searchpage.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SearchContainer = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [text, setText] = useState('');
  const [liopen, setLiopen] = useState(true);

  const { products } = useSelector((state) => state.getproductsdata);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchQuery(searchText);
    setText(searchText);
    setLiopen(false);
    console.log(`Entered text: ${searchText}`);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Search submitted with query: ${searchQuery}`);
  };

  const MAX_DISPLAY_PRODUCTS = 8; // Set the maximum number of products to display

  return (
    <div className="search-container">
      <div className="search-content">
        <form onSubmit={handleSearchSubmit} className="search_form">
          <input
            className="search_input"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search">
            <SearchIcon />
          </button>
          {text && (
            <List className="extrasearch" hidden={liopen}>
              {products
                .filter((product) =>
                  product.product_name.toLowerCase().includes(text.toLowerCase())
                )
                .slice(0, MAX_DISPLAY_PRODUCTS) // Use slice to limit the number of displayed products
                .map((product) => (
                  <ListItem key={product._id}>
                    <NavLink to={`/product/${product._id}`} onClick={()=>setLiopen(true)} className="search-link">
                      {product.product_name}
                    </NavLink>
                  </ListItem>
                ))}
            </List>
          )}
        </form>

        <button onClick={onClose} className="close">
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchContainer;
