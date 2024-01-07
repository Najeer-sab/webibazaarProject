import React from "react";

import "./scrollCard.css";
const Scrollcards = ({ images }) => {
  


    return (
      <div className="container mt-5  mb-5" >
        <div className="row ">
          <div className="col">
            <div className="marquee-container card"style={{height:"100px"}}>
              <div className="marquee-content card-content  d-flex justify-content-between align-items-center">
                {images.map((imageSrc, index) => (
                  <img key={index} src={imageSrc} alt={`Imag ${index}`} width={120} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
  
};

export default Scrollcards;
