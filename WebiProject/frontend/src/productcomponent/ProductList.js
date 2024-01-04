import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Navbar1 from "../navbar1";
// import Navbar2 from "../navbar";
// import Shopeur from "../shopeur";
// import Category from "../category";
// import { FeatureProduct } from "../featureProduct";
// import LatestNews from "../latestNews";
// import { CatProd } from "../CatProd";
// import Themeextimg from "../Themeextimg";
// import Scrollcards from "../scrollcards";
// import Footer from "../footer";
// import AllCategory from "../allCategory";

const ProductList = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const getproducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3009/api/product/getproduct"
        );
        const data = await response.data;
        setproducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getproducts();
  }, [products]);

  console.log(products);

  return (
    <>
      {/* <Navbar1 />
      <Shopeur />
      <Navbar2 />
      <AllCategory />
      <Category /> */}
      

      <div className="container mt-4 ">
        <h2>LATEST PRODUCT </h2>
        <div className="row  mt-3 mb-3">
          {products.map((value, index) => (
            <div className="col-lg-3 " key={index}>
              <div className="card  mb-3   border-0">
                <Link to={`products/${value._id}`}>
                  <img
                    src="/images/laptop/27-300x298.jpg"
                    className=""
                    alt="gggg"
                   
                  />
                  <div className="cord-body">
                    <h3 className="cord-title text-center">
                      {value.productName}
                    </h3>
                  </div>
                  <p className="cord-text text-center">
                    {value.price}00 rupees
                  </p>
                  <p className="cord-text text-center text-truncate  ">
                    {value.discription}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <FeatureProduct />
      <CatProd />

      <LatestNews />
      <Themeextimg />
      <Scrollcards />
      <Footer /> */}
    </>
  );
};
export default ProductList;
