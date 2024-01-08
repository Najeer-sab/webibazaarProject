import React, { useEffect, useState } from "react";

import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
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
      <div className="container mt-4  ">
        <h2>LATEST NEWS </h2>
        <div className="row  mt-3 mb-3 d-flex ">
        <Slider {...settings}>
            {news.map((value, index) => (
              <div className="col-3 d-flext justify-content- between ">
                <div className="card  ms-4 mb-3" key={index}>
                  <img
                    src="/images/electronic/9-490x280_t.jpg"
                    className=""
                    alt=""
                  />
                  <div className="cord-body">
                    <h3 className="cord-title text-center">{value.title}</h3>
                  </div>
                  <p className="cord-text text-center  text-truncate">
                  <strong> {value.productName}</strong>  
                  </p>
                  <p className="cord-text text-center  text-truncate">
                    {value.discription}
                  </p>
                </div>
              </div>
            ))}{" "}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
