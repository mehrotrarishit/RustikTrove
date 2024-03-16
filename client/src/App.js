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
import Return from './components/ReturnPolicy/Return';
import Review from './components/ReviewsPage/Review';
import Shipping from './components/ShippingPolicy/Shipping';
import Terms from './components/TermsOfService/Terms';
import CircularProgress from '@mui/material/CircularProgress';
import Navtop from './components/navbar/Navtop';
import Men from './components/multiple_products/Men'
import Women from './components/multiple_products/Women'
import Accessories from './components/multiple_products/Accessories';
import Account from './components/Account_page/Account';
function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 500);
  }, []);

  const navigate = useNavigate();


  function Home() {
    return (
      <>
        <ScrollToTop />
        <Newnav />
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

  return (
    <>
      {data ? (
        <>
          <Navbar />
          <ReviewsButton />
          <Routes className="navtop">
            <Route path="/Abt" element={<Navtop />} />
            <Route path="/faq" element={<Navtop  />} />
            <Route path="/contact-us" element={<Navtop  />} />
            <Route path="/privacy-policy" element={<Navtop  />} />
            <Route path="/return-policy" element={<Navtop  />} />
            <Route path="/shipping-policy" element={<Navtop  />} />
            <Route path="/terms-of-service" element={<Navtop />} />
            <Route path="/product/:id" element={<Navtop  />} />
            <Route path="/cart" element={<Navtop  />} />
            <Route path="/reviews" element={<Navtop  />} />
            <Route path="/men" element={<Navtop  />} />
            <Route path="/women" element={<Navtop  />} />
            <Route path="/accessories" element={<Navtop  />} />
            <Route path="/account" element={<Navtop  />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Sign_in />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/Abt" element={<About />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/return-policy" element={<Return />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/shipping-policy" element={<Shipping />} />
            <Route path="/terms-of-service" element={<Terms />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          

          <Routes className="scrolltotop">
            <Route path="/Abt" element={<ScrollToTop />} />
            <Route path="/faq" element={<ScrollToTop />} />
            <Route path="/contact-us" element={<ScrollToTop />} />
            <Route path="/privacy-policy" element={<ScrollToTop />} />
            <Route path="/cart" element={<ScrollToTop />} />
            <Route path="/product/:id" element={<ScrollToTop />} />
            <Route path="/return-policy" element={<ScrollToTop />} />
            <Route path="/reviews" element={<ScrollToTop />} />
            <Route path="/shipping-policy" element={<ScrollToTop />} />
            <Route path="/terms-of-service" element={<ScrollToTop />} />
            <Route path="/men" element={< ScrollToTop />} />
            <Route path="/women" element={< ScrollToTop />} />
            <Route path="/accessories" element={< ScrollToTop />} />
            <Route path="/account" element={< ScrollToTop />} />
          </Routes>

          <Routes className="footer">
            <Route path="/Abt" element={<Footer />} />
            <Route path="/faq" element={<Footer />} />
            <Route path="/contact-us" element={<Footer />} />
            <Route path="/privacy-policy" element={<Footer />} />
            <Route path="/cart" element={<Footer />} />
            <Route path="/product/:id" element={<Footer />} />
            <Route path="/return-policy" element={<Footer />} />
            <Route path="/reviews" element={<Footer />} />
            <Route path="/shipping-policy" element={<Footer />} />
            <Route path="/terms-of-service" element={<Footer />} />
            <Route path="/men" element={<Footer />} />
            <Route path="/women" element={<Footer />} />
            <Route path="/accessories" element={<Footer />} />
            <Route path="/account" element={<Footer />} />
          </Routes>
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
}

export default App;
