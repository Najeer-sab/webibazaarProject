import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

export const FeatureProduct = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const getproducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3009/api/product/getProduct"
        );
        const data = await response.data;
        setproducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getproducts();
  }, []);

  console.log(products);

  return (
  
      <div className="container ">
        <div className="d-flex">
          <h3 >FEATURED PRODUCTS</h3>
          <hr className="col-8" />
        </div>
        <div className="d-flex">
          <div className="row  mt-4 mb-4 d-flex ">
            {products.map((value, index) => (
              <Link
                to="/singleProduct"
                style={{ textDecoration: "none" }}
                className="col-4 "
              >
                <div className="col  " key={index}>
                  <div className="card  mb-4">
                    <div className="card-body d-flex ">
                      <div className="col">
                        <img
                          src="/images/laptop/22-300x298.jpg"
                          alt="thhd"
                          className=""
                          width={80}
                        />
                      </div>
                      <div className="col ">
                        <p className="text-center text-warning">
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                        </p>
                        <h6 className=" text-center">{value.productName}</h6>
                        <p className="text-center">$ {value.price}.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* <div className="row">
            <div className="col-8">
              <img src="/images/laptop/27-300x298.jpg" alt="ttt" className="" />
            </div> */}
          {/* </div> */}
  
      </div>
    </div>
  );
};