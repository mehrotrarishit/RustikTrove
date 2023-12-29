import React from 'react'
import logo from '../../image/logofinal.png';
import "./footer.css"
import { NavLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_details_one'>
                    <h3>ABOUT US</h3>
                    <img src={logo} alt="Logo"></img>
                    <p>RustikTrove is India's premier online destination for diverse, exceptional clothing, serving all genders with swift global delivery. Pioneering style understanding, we provide effortless solutions for wardrobe needs. Our dedicated team ensures a seamless fashion journey, enhancing your style with RustikTrove-Your Fashion Unleashed for All.</p>
                    <p>By Tanushree & Rishit</p>
                    <p>+915673459025</p>
                </div>
                <div className='footer_details_two'>
                    <h3>RESOURCES</h3>
                    <NavLink to="/" className='link'><p>Home page</p></NavLink>
                    <NavLink to="/Abt" className='link'><p>About us</p></NavLink>
                    <NavLink to="/contact-us" className='link'><p>Contact us</p></NavLink>
                    <NavLink to="/faq" className='link'><p>FAQ's</p></NavLink>

                </div>
                <div className='footer_details_three'>
                    <h3>SOCIAL</h3>
                    <p><InstagramIcon  />Instagram</p>
                    <p><YouTubeIcon />Youtube</p>
                    <p><TwitterIcon />Twitter</p>
                    <p><WhatsAppIcon />whatsapp</p>
                </div>
                <div className='footer_details_four'>
                    <h3>POLICY</h3>
                    <NavLink to="/privacy-policy" className='link'><p>Privacy Policy</p></NavLink>
                    <NavLink to="/return-policy" className='link'><p>Return and Exchange Policy</p></NavLink> 
                    <NavLink to="/shipping-policy" className='link'><p>Shipping Policy</p></NavLink>
                    <NavLink to="/terms-of-service" className='link'><p>Terms of Service</p></NavLink>
                </div>

            </div>
        </footer>
    )
}

export default Footer