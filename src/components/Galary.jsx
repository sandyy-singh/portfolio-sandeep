import React, { Fragment } from "react";
import "./Galary.scss";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
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
      imgSrc: img3,
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
      <div className="gallery" id="Gallery">
        <div>
          {photo.map((item, ind) => {
            return (
              <div className="img-cov">
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
