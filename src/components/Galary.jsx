import React, { Fragment } from "react";
import "./Galary.scss";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import code from "../assets/code.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";


const Galary = () => {
  let photo = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: code,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
  ];

  return (
    <Fragment>
      <div className="container-fluid  Gallery mt-5  mt-sm-3 p-sm-3" id="Gallery">
        <div className="row  d-flex align-items-center justify-content-center mt-2 mt-sm-5 p-sm-4">
       
          {photo.map((item, ind) => {
            return (
              <div className="img-cov  col-sm-4 col-md-3 m-sm-4 d-flex align-items-center justify-content-center mb-sm-5 m-1">
                <img src={item.imgSrc} className="img11" key={ind} alt={ind} />
              </div>
            );
          })}

        </div>
      </div>
    </Fragment>
  );
};

export default Galary;
