import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnavbar/Newnav';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ReviewsButton from './components/ReviewsButton';
import Best_S from './components/Bestseller/Best_S';
import About from './components/AboutUs/About';
import MostLovedProduct from './components/MostLoved/MostLovedProduct';
import Sign_in from './components/signup_sign/Sign_in';
import SignUp from './components/signup_sign/SignUp';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FAQPage from './components/FAQ/FAQPage';
import ContactUs from './components/Contact/ContactUs';
import Privacy from './components/PrivacyPolicy/Privacy';
import Cart from './components/cart/Cart';
import Product from './components/Product_single/Product';
import SearchContainer from './components/search/SearchContainer';
import Return from './components/ReturnPolicy/Return';
import Review from './components/ReviewsPage/Review';
import Shipping from './components/ShippingPolicy/Shipping';
import Terms from './components/TermsOfService/Terms';
import CircularProgress from '@mui/material/CircularProgress';

function App() {

  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true)
    }, 1000)
  }, [])

  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const openSearch = () => {
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };
  return (
    <>
      {
        data ? (
          <>
            <Navbar />
            <ReviewsButton />
            <Routes>
              <Route path="/" element={<Home openSearch={openSearch} />} />
              <Route path="/login" element={<Sign_in />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/Abt" element={<About />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:_id" element={<Product />} />
              <Route path="/return-policy" element={<Return />} />
              <Route path="/reviews" element={<Review />} />
              <Route path="/shipping-policy" element={<Shipping />} />
              <Route path="/terms-of-service" element={<Terms />} />
            </Routes>

            {searchOpen && <SearchContainer onClose={closeSearch} />}
            <Routes className="scrolltotop">
              <Route path="/Abt" element={<ScrollToTop />} />
              <Route path="/faq" element={<ScrollToTop />} />
              <Route path="/contact-us" element={<ScrollToTop />} />
              <Route path="/privacy-policy" element={<ScrollToTop />} />
              <Route path="/cart" element={<ScrollToTop />} />
              <Route path="/product/:_id" element={<ScrollToTop />} />
              <Route path="/return-policy" element={<ScrollToTop />} />
              <Route path="/reviews" element={<ScrollToTop />} />
              <Route path="/shipping-policy" element={<ScrollToTop />} />
              <Route path="/terms-of-service" element={<ScrollToTop />} />
            </Routes>

            <Routes className="footer">
              <Route path="/Abt" element={<Footer />} />
              <Route path="/faq" element={<Footer />} />
              <Route path="/contact-us" element={<Footer />} />
              <Route path="/privacy-policy" element={<Footer />} />
              <Route path="/cart" element={<Footer />} />
              <Route path="/product/:_id" element={<Footer />} />
              <Route path="/return-policy" element={<Footer />} />
              <Route path="/reviews" element={<Footer />} />
              <Route path="/shipping-policy" element={<Footer />} />
              <Route path="/terms-of-service" element={<Footer />} />
            </Routes>
          </>
        ) : (<>
          <div className='circle'>
            <CircularProgress/>
            <h2>Loading...</h2>
          </div>
        </>
        )
      }
    </>
  );
}

function Home({ openSearch }) {
  return (
    <>
      <ScrollToTop />
      <Newnav openSearch={openSearch} />
      <Best_S />
      <MostLovedProduct />
      <Footer />
    </>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;