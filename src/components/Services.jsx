import React from "react";
import "./Services.scss";

import { BsAndroid2, BsGithub, BsBox } from "react-icons/bs";

const Services = () => {
  return (
    <div className="container-fluid services mt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-8 services-box1 my-1  mt-3 mt-sm-5">
          <h1 className="head-h1 ">My services</h1>
          <p className="para-1 p-2">
            With the expertise built on 10+ web projects, ScienceSoft
            professionally designs, redesigns and continuously supports
            customer-facing and enterprise web apps and achieves high conversion
            and adoption rates.
          </p>
        </div>
        <div className="row d-flex justify-content-center align-items-center m-3 m-sm-5 services-box2">
          <div className="col-sm-4 b1 my-1 ">
            <div className="dev11">
              <BsAndroid2 />
            </div>
            <h3 className="">Web Development</h3>
            <p >
              Web development is the work involved in developing a website for the
              Internet or an intranet. Web development can range from developing a
              simple static page of complex web applications.
            </p>
          </div>
          <div className="col-sm-4 b1 my-1">
            <div className="dev11">
              <BsGithub />
            </div>
            <h3 className="">App Development</h3>
            <p>
              Mobile application development The process of developing application
              software in general Overlapping aspects of industrial research and
              development and sales engineering.
            </p>
          </div>
          <div className="col-sm-4 b1 my-3">
            <div className="dev11">
              <BsBox />
            </div>
            <h3 className="">Web design</h3>
            <p>
              Web design encompasses many different skills and disciplines in the
              production and maintenance of websites. The different areas of web
              design include web graphic design.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
