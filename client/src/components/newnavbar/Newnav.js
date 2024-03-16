// import React, { useContext, useEffect, useState } from 'react'
// import SearchIcon from '@mui/icons-material/Search.js';
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart.js';
// import Avatar from '@mui/material/Avatar';
// import "./newnaav.css"
// import VideoBg1 from '../../video-background/VideoBg1.mp4';
// import logo from '../../image/logofinal.png';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { LoginContext } from "../context/ContextProvider.js";
// import { useSelector } from 'react-redux';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd.js';
// import Settings from '@mui/icons-material/Settings.js';
// import Logout from '@mui/icons-material/Logout.js';
// import LoginIcon from '@mui/icons-material/Login.js';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu.js';
// import Drawer from '@mui/material/Drawer';
// import TemporaryDrawer from './TemporaryDrawer.js'
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';


// const Newnav = ({ openSearch }) => {
//     const { account, setAccount } = useContext(LoginContext);
//     // console.log(account);


//     const [dropen, setDropen] = useState(false);

//     const history = useNavigate();
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const getdetailvaliduser = async () => {
//         const res = await fetch("/validuser", {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json"
//             },
//             credentials: "include"
//         });

//         const data = await res.json();
//         console.log(data);

//         if (res.status !== 201) {
//             console.log("error");
//         } else {
//             console.log("data valid");
//             setAccount(data);
//         }
//     };


//     const logoutuser = async () => {
//         const res2 = await fetch("/logout", {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json"
//             },
//             credentials: "include"
//         });

//         const data2 = await res2.json();
//         console.log(data2);

//         if (res2.status !== 201) {
//             console.log("error");
//         } else {
//             console.log("logged out");
//             alert("logout");
//             history("/");
//             setAccount(false);
//         }
//     };

//     useEffect(() => {
//         getdetailvaliduser()
//     }, [])

//     //for drawer
//     const handelopen = () => {
//         setDropen(true);
//     }

//     const handleClosedr = () => {
//         setDropen(false)
//     }
//     const [searchQuery, setSearchQuery] = useState('');
//     const [text, setText] = useState('');
//     const [liopen, setLiopen] = useState(false);

//     const { products } = useSelector((state) => state.getproductsdata);

//     const handleSearchChange = (event) => {
//         const searchText = event.target.value;
//         setSearchQuery(searchText);
//         setText(searchText);
//         console.log(`Entered text: ${searchText}`);
//     };

//     const handleSearchSubmit = (event) => {
//         event.preventDefault();
//         console.log(`Search submitted with query: ${searchQuery}`);
//     };

//     const MAX_DISPLAY_PRODUCTS = 8; // Set the maximum number of products to display

//     return (

//         <div className="newnav_main">
//             <div className='VB'>
//                 <video src={VideoBg1} autoPlay loop muted />
//             </div>
//             <div className='tab_new'>
//                 <div className="nav_left">
//                     <ul>
//                         <li><NavLink to="/Abt"><a href="#" className='Abt'>About</a></NavLink></li>
//                         <li><NavLink to="/men"><a href="#" className='M'>Men</a></NavLink></li>
//                         <li><NavLink to="/women"><a href="#" className='W'>Women</a></NavLink></li>
//                         <li><NavLink to="/accessories"><a href="#" className='K'>Accessories</a></NavLink></li>
//                     </ul>
//                     <IconButton className="hamburgur" onClick={handelopen}>
//                         <MenuIcon />
//                     </IconButton>

//                     <Drawer open={dropen} onClose={handleClosedr}>
//                         <TemporaryDrawer />
//                     </Drawer>
//                 </div>
//                 <div className="nav_center">
//                     <img src={logo} alt="Logo"></img>
//                 </div>
//                 <div className="nav_right">
//                 <div className="searchbar">
//                         <form onSubmit={handleSearchSubmit} className="search_form">
//                             <div className="search_input_container">
//                                 <input
//                                     className="search_input"
//                                     type="text"
//                                     placeholder="Search..."
//                                     value={searchQuery}
//                                     onChange={handleSearchChange}
//                                 />
//                                 {/* Move the condition for displaying the list outside the input field */}
//                             </div>
//                         </form>
//                         {(text && liopen) && (
//                             <List className="extrasearch">
//                                 {products
//                                     .filter((product) =>
//                                         product.product_name.toLowerCase().includes(text.toLowerCase())
//                                     )
//                                     .slice(0, MAX_DISPLAY_PRODUCTS)
//                                     .map((product) => (
//                                         <ListItem key={product.id}>
//                                             <NavLink to={`/product/${product.id}`} className="search-link">
//                                                 {product.product_name}
//                                             </NavLink>
//                                         </ListItem>
//                                     ))}
//                             </List>
//                         )}
//                     </div>
//                     <div className="search_icon">
//                         <SearchIcon id="search" onClick={openSearch} />
//                     </div>
//                     <div className="cart">
//                         {
//                             account ? <NavLink to="/cart">
//                                 <Badge badgeContent={(account && account.carts) ? account.carts.length : 0} color="primary">
//                                     <ShoppingCartIcon id="icon" />
//                                 </Badge></NavLink> :
//                                 <NavLink to="/login">
//                                     <Badge badgeContent={0} color="primary">
//                                         <ShoppingCartIcon id="icon" />
//                                     </Badge></NavLink>
//                         }
//                     </div>
//                     <div className="profile">

//                         {account ?
//                             <React.Fragment>
//                                 <Tooltip title="Account settings" >
//                                     <IconButton onClick={handleClick} className="design"
//                                         size="small"
//                                         sx={{ ml: 2 }}
//                                         aria-controls={open ? 'account-menu' : undefined}
//                                         aria-haspopup="true"
//                                         aria-expanded={open ? 'true' : undefined}>
//                                         <Avatar className="avatar" style={{ background: "black", color: "rgb(238, 234, 135)" }}>
//                                             {account.fname[0].toUpperCase()}</Avatar>
//                                     </IconButton>
//                                 </Tooltip>
//                                 <Menu
//                                     anchorEl={anchorEl}
//                                     id="account-menu"
//                                     open={open}
//                                     onClose={handleClose}
//                                     onClick={handleClose}
//                                     PaperProps={{
//                                         elevation: 0,
//                                         sx: {
//                                             overflow: 'visible',
//                                             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                                             mt: 1.5,
//                                             '& .MuiAvatar-root': {
//                                                 width: 32,
//                                                 height: 32,
//                                                 ml: -0.5,
//                                                 mr: 1,
//                                             },
//                                             '&::before': {
//                                                 content: '""',
//                                                 display: 'block',
//                                                 position: 'absolute',
//                                                 top: 0,
//                                                 right: 14,
//                                                 width: 10,
//                                                 height: 10,
//                                                 bgcolor: 'background.paper',
//                                                 transform: 'translateY(-50%) rotate(45deg)',
//                                                 zIndex: 0,
//                                             },
//                                         },
//                                     }}
//                                     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                                     anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//                                 >
//                                     <NavLink to="/account" className="accountlink">
//                                         <MenuItem onClick={handleClose}>
//                                             <Avatar /> My account
//                                         </MenuItem>
//                                     </NavLink>
//                                     <Divider />
//                                     <NavLink to="/register" className="registerlink">
//                                         <MenuItem onClick={handleClose}>
//                                             <ListItemIcon>
//                                                 <PersonAdd fontSize="small" />
//                                             </ListItemIcon>
//                                             Add another account
//                                         </MenuItem>
//                                     </NavLink>
//                                     <MenuItem onClick={handleClose}>
//                                         <ListItemIcon>
//                                             <Settings fontSize="small" />
//                                         </ListItemIcon>
//                                         Settings
//                                     </MenuItem>
//                                     <MenuItem onClick={() => { handleClose(); logoutuser(); }} >
//                                         <ListItemIcon>
//                                             <Logout fontSize="small" />
//                                         </ListItemIcon>
//                                         Logout
//                                     </MenuItem>
//                                 </Menu>
//                             </React.Fragment>
//                             :
//                             <React.Fragment>
//                                 <Tooltip title="Account settings" >
//                                     <IconButton onClick={handleClick} className="design"
//                                         size="small"
//                                         sx={{ ml: 2 }}
//                                         aria-controls={open ? 'account-menu' : undefined}
//                                         aria-haspopup="true"
//                                         aria-expanded={open ? 'true' : undefined}>
//                                         <Avatar className="avatar" style={{ background: "black" }}></Avatar>
//                                     </IconButton>
//                                 </Tooltip>
//                                 <Menu
//                                     anchorEl={anchorEl}
//                                     id="account-menu"
//                                     open={open}
//                                     onClose={handleClose}
//                                     onClick={handleClose}
//                                     PaperProps={{
//                                         elevation: 0,
//                                         sx: {
//                                             overflow: 'visible',
//                                             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                                             mt: 1.5,
//                                             '& .MuiAvatar-root': {
//                                                 width: 32,
//                                                 height: 32,
//                                                 ml: -0.5,
//                                                 mr: 1,
//                                             },
//                                             '&::before': {
//                                                 content: '""',
//                                                 display: 'block',
//                                                 position: 'absolute',
//                                                 top: 0,
//                                                 right: 14,
//                                                 width: 10,
//                                                 height: 10,
//                                                 bgcolor: 'background.paper',
//                                                 transform: 'translateY(-50%) rotate(45deg)',
//                                                 zIndex: 0,
//                                             },
//                                         },
//                                     }}
//                                     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                                     anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//                                 >
//                                     <NavLink to="/login" className="registerlink">
//                                         <MenuItem onClick={handleClose}>
//                                             <ListItemIcon>
//                                                 <LoginIcon fontSize="small" />
//                                             </ListItemIcon>
//                                             Login
//                                         </MenuItem>
//                                     </NavLink>
//                                     <Divider />
//                                     <NavLink to="/register" className="registerlink">
//                                         <MenuItem onClick={handleClose}>
//                                             <ListItemIcon>
//                                                 <PersonAdd fontSize="small" />
//                                             </ListItemIcon>
//                                             Add an account
//                                         </MenuItem>
//                                     </NavLink>
//                                     <MenuItem onClick={handleClose}>
//                                         <ListItemIcon>
//                                             <Settings fontSize="small" />
//                                         </ListItemIcon>
//                                         Settings
//                                     </MenuItem>
//                                 </Menu>
//                             </React.Fragment>
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Newnav


import React, { useContext, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search.js';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart.js';
import Avatar from '@mui/material/Avatar';
import "./newnaav.css";
import VideoBg1 from '../../video-background/VideoBg1.mp4';
import logo from '../../image/logofinal.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContext } from "../context/ContextProvider.js";
import { useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd.js';
import Settings from '@mui/icons-material/Settings.js';
import Logout from '@mui/icons-material/Logout.js';
import LoginIcon from '@mui/icons-material/Login.js';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu.js';
import Drawer from '@mui/material/Drawer';
import TemporaryDrawer from './TemporaryDrawer.js'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const Newnav = ({ openSearch }) => {
    const { account, setAccount } = useContext(LoginContext);

    const [dropen, setDropen] = useState(false);
    const history = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getdetailvaliduser = async () => {
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);

        if (res.status !== 201) {
            console.log("error");
        } else {
            console.log("data valid");
            setAccount(data);
        }
    };

    const logoutuser = async () => {
        const res2 = await fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status !== 201) {
            console.log("error");
        } else {
            console.log("logged out");
            alert("logout");
            history("/");
            setAccount(false);
        }
    };

    useEffect(() => {
        getdetailvaliduser()
    }, [])

    const handelopen = () => {
        setDropen(true);
    }

    const handleClosedr = () => {
        setDropen(false)
    }

    const [searchQuery, setSearchQuery] = useState('');
    const [text, setText] = useState('');
    const [liopen, setLiopen] = useState(false);

    const { products } = useSelector((state) => state.getproductsdata);

    const handleSearchChange = (event) => {
        const searchText = event.target.value;
        setSearchQuery(searchText);
        setText(searchText);
        setLiopen(true);
        console.log(`Entered text: ${searchText}`);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(`Search submitted with query: ${searchQuery}`);
    };

    const MAX_DISPLAY_PRODUCTS = 8;

    return (
        <div className="newnav_main">
            <div className='VB'>
                <video src={VideoBg1} autoPlay loop muted />
            </div>
            <div className='tab_new'>
                <div className="nav_left">
                    <ul>
                        <li><NavLink to="/Abt"><a href="#" className='Abt'>About</a></NavLink></li>
                        <li><NavLink to="/men"><a href="#" className='M'>Men</a></NavLink></li>
                        <li><NavLink to="/women"><a href="#" className='W'>Women</a></NavLink></li>
                        <li><NavLink to="/accessories"><a href="#" className='K'>Accessories</a></NavLink></li>
                    </ul>
                    <IconButton className="hamburgur" onClick={handelopen}>
                        <MenuIcon />
                    </IconButton>

                    <Drawer open={dropen} onClose={handleClosedr}>
                        <TemporaryDrawer />
                    </Drawer>
                </div>
                <div className="nav_center">
                    <img src={logo} alt="Logo"></img>
                </div>
                <div className="nav_right">
                <div className="searchbar">
                    <form onSubmit={handleSearchSubmit} className="search_form">
                        <div className="search_input_container">
                            <input
                                className="search_input"
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </form>
                    {/* Display the list only when there is non-empty text */}
                    <List className="extrasearch" style={{ display: text ? 'block' : 'none' }}>
                        {products
                            .filter((product) =>
                                product.product_name.toLowerCase().includes(text.toLowerCase())
                            )
                            .slice(0, MAX_DISPLAY_PRODUCTS)
                            .map((product) => (
                                <ListItem key={product.id}>
                                    <NavLink to={`/product/${product.id}`} className="search-link">
                                        {product.product_name}
                                    </NavLink>
                                </ListItem>
                            ))}
                    </List>
                </div>
                    <div className="search_icon">
                        <SearchIcon id="search" onClick={openSearch} />
                    </div>
                    <div className="cart">
                        {
                            account ? <NavLink to="/cart">
                                <Badge badgeContent={(account && account.carts) ? account.carts.length : 0} color="primary">
                                    <ShoppingCartIcon id="icon" />
                                </Badge></NavLink> :
                                <NavLink to="/login">
                                    <Badge badgeContent={0} color="primary">
                                        <ShoppingCartIcon id="icon" />
                                    </Badge></NavLink>
                        }
                    </div>
                    <div className="profile">
                        {account ?
                            <React.Fragment>
                                <Tooltip title="Account settings" >
                                    <IconButton onClick={handleClick} className="design"
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}>
                                        <Avatar className="avatar" style={{ background: "black", color: "rgb(238, 234, 135)" }}>
                                            {account.fname[0].toUpperCase()}</Avatar>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <NavLink to="/account" className="accountlink">
                                        <MenuItem onClick={handleClose}>
                                            <Avatar /> My account
                                        </MenuItem>
                                    </NavLink>
                                    <Divider />
                                    <NavLink to="/register" className="registerlink">
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <PersonAdd fontSize="small" />
                                            </ListItemIcon>
                                            Add another account
                                        </MenuItem>
                                    </NavLink>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={() => { handleClose(); logoutuser(); }} >
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Tooltip title="Account settings" >
                                    <IconButton onClick={handleClick} className="design"
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}>
                                        <Avatar className="avatar" style={{ background: "black" }}></Avatar>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <NavLink to="/login" className="registerlink">
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <LoginIcon fontSize="small" />
                                            </ListItemIcon>
                                            Login
                                        </MenuItem>
                                    </NavLink>
                                    <Divider />
                                    <NavLink to="/register" className="registerlink">
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <PersonAdd fontSize="small" />
                                            </ListItemIcon>
                                            Add an account
                                        </MenuItem>
                                    </NavLink>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newnav;
