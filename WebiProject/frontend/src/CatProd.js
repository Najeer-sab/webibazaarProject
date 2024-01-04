import React, { useEffect, useState } from "react";
import axios from "axios";

export const CatProd = () => {
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
    }, []);
  
    console.log(products);
  
  return (
    <div>  <div className="container ">
    <h2>CATEGORY PRODUCTS</h2>
    <div className="row  mt-3 mb-3 d-flex ">
      {products.map((value, index) => (
        <div className="col-md-3 ">
          <div className="card  mb-3" key={index}>
            <img src="/images/4-1-360x400_t.jpg" alt=""/>
            <div className="cord-body">
              <h3 className="cord-title text-center">{value.productName}</h3>
            </div>
            <p className="cord-text text-center">{value.price}00 rupees</p>
          </div>
        </div>
      ))}
    </div>{" "}
  </div></div>
  )
}
