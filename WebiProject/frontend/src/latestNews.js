import React, { useEffect, useState } from "react";

import axios from "axios";

const LatestNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
      const getNews = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3009/api/product/getproduct"
          );
          const data = await response.data;
          setNews(data);
        } catch (error) {
          console.log(error);
        }
      };
      getNews();
    }, []);
    
  return (
    <>
    <div className="container mt-4 ">
      <h2>LATEST NEWS </h2>
      <div className="row  mt-3 mb-3 d-flex ">
        {news.map((value, index) => (
          <div className="col-3 ">
            <div className="card  mb-3" key={index}>
              <img src="/images/electronic/9-490x280_t.jpg" className="" alt="" />
              <div className="cord-body">
                <h3 className="cord-title text-center">{value.title}</h3>
              </div>
              <p className="cord-text text-center">{value.productName}00 rupees</p>
              <p className="cord-text text-center  text-truncate">{value.discription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  
  
  </>
  )
}

export default LatestNews 