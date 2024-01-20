import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './drawer.css';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import WatchIcon from '@mui/icons-material/Watch';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const TemporaryDrawer = () => {
  const [drawerActive, setDrawerActive] = useState(false);

  return (
    <div className={`drawer_container ${drawerActive ? 'active' : ''}`}>
      <div className='drawer'>
        <ul>
          <li><NavLink to="/Abt" ><HelpOutlineIcon/>  About Us</NavLink></li>
          <li><NavLink to="/men" >  <ManIcon/> Men</NavLink></li>
          <li><NavLink to="/women"><WomanIcon/> Women</NavLink></li>
          <li><NavLink to="/accessories"><WatchIcon/> Accessories</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default TemporaryDrawer;
