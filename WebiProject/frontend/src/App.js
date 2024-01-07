
import React from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/SignIn';

import ForgetPassword from './components/ForgetPassword';
import NewSubmit from './components/NewSubmit';
import ProductDisplay from "./productcomponent/SingleProduct";
import  ProductList  from "./productcomponent/ProductList";
import Cart from './cart/Cart';
import Aboutus from './AboutUs/aboutus'
import Contact from './contact/contact';
import Pageerror from './errorPage/errorPage';
import Services from './serv/service';
import Faq from './faqs/faqs';
import Features from './features/features';

// import Navbar1 from "./navbar1";
// import Navbar2 from "./navbar";
// import Shopeur from "./shopeur";
import Home from './Home';

// import Footer from "./footer";


function App() {

  return (
    <div>
      

{/* 
<Navbar1 />
    
      <Navbar2 /> */}
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/SignIn" element={<Signin />} />

          <Route path="/products"element={<ProductList/>} />
          <Route path="/products/:productId"element={<ProductDisplay/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/" element={<Home/>} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/errorPage' element={<Pageerror />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/faqs' element={<Faq />} />
          <Route path='/features' element={<Features />} />


        
          <Route path="/forget-pass" element={<ForgetPassword />} />
          <Route path="/otp" element={<NewSubmit />} />
        </Routes>
      </Router>
      {/* <Footer /> */}

    </div>
  );
}

export default App;