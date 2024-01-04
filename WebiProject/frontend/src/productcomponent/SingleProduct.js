// components/ProductDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useCart } from "../context/createContext";

import Footer from "../footer";
import Navbar1 from "../navbar1";
import Navbar2 from "../navbar";
import Shopeur from "../shopeur";


const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState('');
  const { addToCart } = useCart();
  useEffect(() => {
    // Fetch product details by ID from the server
    fetch(`http://localhost:3009/api/product/getbyid/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  const handleAddToCart = () => {
    // Call the addToCart function from the CartContext
console.log(product)
    addToCart(product);
  };



  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
          <Navbar1 />
      <Shopeur />
      <Navbar2 />
     
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body text-center">
              <img src="/images/laptop/27-300x298.jpg" className="" alt="gggg" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card" style={{height:"330px"}}>
              <div className="card-body">
                <div className="card-title">
                  <h2>{product.productName}</h2><hr/>
                </div>
                <p>{product.discription}</p><hr/>
                <p>Price: ${product.price}</p><hr/>
                <p>Quantity Available: {product.quantity}</p>
                <button onClick={handleAddToCart}    >Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      <Footer />
    </div>
  );
};

export default ProductDetails;
















