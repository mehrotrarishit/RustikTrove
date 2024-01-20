import React, { useContext, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import logo from '../../image/logofinal.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContext } from "../context/ContextProvider";
import { useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Drawert from './Drawert.js'
import MenuIcon from '@mui/icons-material/Menu';
import "./navtop.css";

const Navtop = ({ openSearch }) => {

    const { account, setAccount } = useContext(LoginContext);
    // console.log(account);


    const [dropen, setDropen] = useState(false);

    const history = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
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


    //for drawer
    const handelopen = () => {
        setDropen(true);
    }

    const handleClosedr = () => {
        setDropen(false)
    }

    return (

        <div className='tab'>
            <div className="nav_left">
                <ul>
                    <li><NavLink to="/Abt"><a href="#" className='Abt'>About Us</a></NavLink></li>
                    <li><NavLink to="/men"><a href="#" className='M'>Men</a></NavLink></li>
                    <li><NavLink to="/women"><a href="#" className='W'>Women</a></NavLink></li>
                    <li><NavLink to="/accessories"><a href="#" className='K'>Accessories</a></NavLink></li>
                </ul>

                <IconButton className="hamburgur2" onClick={handelopen}>
                    <MenuIcon />
                </IconButton>

                <Drawer open={dropen} onClose={handleClosedr}>
                    <Drawert />
                </Drawer>
            </div>
            <div className="navtop_center">
                <NavLink to="/" ><img src={logo} alt="Logo"></img></NavLink>
            </div>
            <div className="nav_right">
                <div className="search_icon2">
                    <SearchIcon id="search" onClick={openSearch} />
                </div>
                <div className="cart2">
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
                <div className="profile2">

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
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> My account
                                </MenuItem>
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
    )
}

export default Navtop
