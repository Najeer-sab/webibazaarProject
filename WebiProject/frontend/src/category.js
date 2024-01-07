import React, { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line

const Category = () => {
  const [catogary, setCatogary] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(10);

  useEffect(() => {
    const fetctchCat = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3009/api/product/getproduct"
        );
        const data = await res.data;
        setCatogary(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetctchCat();
  });

  return (
    <>
      {" "}
      <div className="container mt-5 ">
        <div className="d-flex">
          <h3 className="col-3">TOP CATEGORY </h3>
          <hr className="col-8 " />
        </div>
        <div className="row  mt-3 mb-3 d-flex ">
          {catogary.map((value, index) => (
            <div className="col-3 ">
              <div className="card mb-3" key={index}>
                <img
                  src="/images/5-1-360x400_t.jpg"
                  alt=""
                  className=" catImg"
                  style={styles.catImg}
                />
                <button
                  className="btn btnbutton btn-light w-75 text-center"
                  style={styles.btnbutton}
                >
                 UNCATEGORIZED
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const styles = {
  catImg: {
    position: "relative",
  },

  btnbutton: {
    position: "absolute",

    bottom: "40px",
    left: "40px",
  },
};

export default Category;
