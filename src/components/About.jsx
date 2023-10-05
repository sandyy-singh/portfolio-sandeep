import React from "react";
import "./About.scss";

import mypick4 from "../assets/mypick4.png";
import { BsFillTelephoneFill, BsEnvelopeFill, BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div className="container-fluid about">
      <div className="row">
        <div className=" col-md-7  ">
          <div className="row d-flex align-items-center justify-content-center p-3 psm-0  ">
            <div className="col-md-12 mt-5 p-md-5">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-8">
                  <h2 className=" hi-there mt-5 ">
                    Hi there!
                    I am React Developer!
                  </h2>
                </div>
              </div>
              <div className="col-md-11  ">
                <div className="row d-flex align-items-center justify-content-center">
                  <p className="col-11 col-md-8  rounded text-success p-3 text-light element  ">
                    working at Aigroedge Technologies, Sector 125 Noida UP.
                    Currently working as React Developer, contributing to the
                    development of web applications using React JS, HTML, CSS,
                    and JavaScript.
                      <br/>  <br/>
                    Collaborating with a team of developers to implement
                    features, enhance user interfaces, and optimize application
                    performance.
                    <br/>  <br/>
                    Gaining practical experience in translating design mock up
                    from Figma into functional and responsive user
                    interfaces.Employing version control techniques using Git
                    and GitHub for efficient code collaboration.
                  </p>
                </div>
              </div>

              <div className="row d-flex align-items-center justify-content-center  p-sm-3  mt-4"></div>
            </div>
          </div>
        </div>

        <div className=" col-md-5   p-md-3 row d-flex align-items-center justify-content-center  mt-md-1 ">
          <div className="row   ">
            <img className="col-12  " alt="" src={mypick4} />
            <div className="offset-3 col-9">
              <div className="row">
                <div className="col-3 col-sm-3 text-success fs-1">
                  <a href="https://example.com/${6266499047}">
                    <BsFillTelephoneFill />
                  </a>
                </div>

                <div className="col-3 col-md-3 text-success fs-1">
                  <a href="https://github.com/sandyy-singh">
                    <BsGithub />
                  </a>
                </div>

                <div className="col-3 col-md-4 text-success flex-start fs-1">
                  <a href="mailto:sandeeprewa43@gmail.com">
                    <BsEnvelopeFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
