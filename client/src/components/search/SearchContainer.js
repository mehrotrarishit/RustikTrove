// import React, { useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import './searchpage.css';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import Drawer from '@mui/material/Drawer';

// const SearchContainer = ({ onClose }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [text, setText] = useState('');
//   const [liopen, setLiopen] = useState(true);

//   const { products } = useSelector((state) => state.getproductsdata);

//   const handleSearchChange = (event) => {
//     const searchText = event.target.value;
//     setSearchQuery(searchText);
//     setText(searchText);
//     setLiopen(false);
//     console.log(`Entered text: ${searchText}`);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Search submitted with query: ${searchQuery}`);
//   };

//   const MAX_DISPLAY_PRODUCTS = 8; // Set the maximum number of products to display

//   return (
//     <div className="search-container">
//       <div className="search-content">
//         <form onSubmit={handleSearchSubmit} className="search_form">
//           <input
//             className="search_input"
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//           <button type="submit" className="search">
//             <SearchIcon />
//           </button>
//           {text && (
//             <List className="extrasearch" hidden={liopen}>
//               {products
//                 .filter((product) =>
//                   product.product_name.toLowerCase().includes(text.toLowerCase())
//                 )
//                 .slice(0, MAX_DISPLAY_PRODUCTS) // Use slice to limit the number of displayed products
//                 .map((product) => (
//                   <ListItem key={product._id}>
//                     <NavLink to={`/product/${product._id}`} onClick={()=>setLiopen(true)} className="search-link">
//                       {product.product_name}
//                     </NavLink>
//                   </ListItem>
//                 ))}
//             </List>
//           )}
//         </form>

//         <button onClick={onClose} className="close">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchContainer;


// import React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// type Anchor = 'top' | 'left' | 'bottom' | 'right';

// export default function SearchContainer() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer =
//     (anchor: Anchor, open: boolean) =>
//     (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event.type === 'keydown' &&
//         ((event as KeyboardEvent).key === 'Tab' ||
//           (event as KeyboardEvent).key === 'Shift')
//       ) {
//         return;
//       }

//       setState({ ...state, [anchor]: open });
//     };

//   const list = (anchor: Anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }


import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './searchpage.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';

const SearchContainer =()=>{

const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const [searchInput, setSearchInput] = useState('');

const handleSearchIconClick = () => {
  setIsDrawerOpen(!isDrawerOpen);
};

const handleInputChange = (e) => {
  setSearchInput(e.target.value);
};

const closeDrawer = () => {
  setIsDrawerOpen(false);
};

return(
  <div>
  {isDrawerOpen && (
    <div className="drawer">
      <div className="close-button" onClick={closeDrawer}>
        X
      </div>
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </div>
  )}
  </div>
);
};

export default SearchContainer;