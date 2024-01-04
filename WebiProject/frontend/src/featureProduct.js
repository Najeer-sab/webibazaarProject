import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const FeatureProduct = () => {
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
    <>

      {" "}
      <div className="container-fluid bg-light mt-4  ">
        <div className="container ">
          <h2 className="">FEATURED PRODUCTS</h2>
          <div className="d-flex ">
            <div className="row  mt-4 mb-4 col-12 ">
              {products.map((value, index) => (
                <Link to="/singleProduct" className="col-4" style={{textDecoration:"none"}}>
                  <div className="col" key={index}>
                    <div className="card  mb-4 ">
                      <div className="card-body d-flex  ">
                        <div className="col">
                          <img
                            src="/images/laptop/22-300x298.jpg"
                            alt="thhd"
                            className=""
                            width={80}
                          />
                        </div>
                        <div className="col">
                          <h5 className=" text-center">{value.productName}</h5>
                          <p className="text-center">{value.price}00 rupees</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>{" "}
           
          </div>
        </div>
      </div>
    </>
  );
};
