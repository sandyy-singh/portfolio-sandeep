import React from "react";
import "./Services.scss";

import { BsAndroid2, BsGithub, BsBox } from "react-icons/bs";

const Services = () => {
  return (
    <div className="services">
      <div className="container-ser">
        <div className="services-head">
          <h1 className="mainHeading">My services</h1>
          <p className="mainContevt">
            With the expertise built on 10+ web projects, ScienceSoft
            professionally designs, redesigns and continuously supports
            customer-facing and enterprise web apps and achieves high conversion
            and adoption rates.{" "}
          </p>
        </div>
        <div className="dev">
          <div className="dev1">
            <div className="dev11">
              <BsAndroid2 />
            </div>
            <h3 className="dev22">Web Development</h3>
            <p className="dev33">Web development is the work involved in
             developing a website for the Internet or an intranet.
              Web development can range from developing a simple static page of complex web applications.</p>
          </div>
          <div className="dev1">
            <div className="dev11">
              <BsGithub />
            </div>
            <h3 className="dev22">App Development</h3>
            <p className="dev33">Mobile application development
            The process of developing application software in general
            Overlapping aspects of industrial research and development and sales engineering.</p>
          </div>
          <div className="dev1">
            <div className="dev11">
              <BsBox />
            </div>
            <h3 className="dev22">Web design</h3>
            <p className="dev33">Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
