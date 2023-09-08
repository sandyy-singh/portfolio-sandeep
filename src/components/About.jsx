import React from "react";
import "./About.scss";

import mypick3 from "../assets/mypick3.png";
import { BsFillTelephoneFill, BsEnvelopeFill, BsGithub } from "react-icons/bs";

const About = () => {
  
  return (
    <div className="container-fluid about">
      <div className="row">
        <div className=" col-md-6  col-lg-6 p-2  p-md-5">
          <div className="row d-flex align-items-center justify-content-center p-3  ">
            <div className="col-md-12 mt-5 p-md-5">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-8">
                  <h2 className=" hi-there mt-5 ">
                    Hi there..
                    <br />i am React Developer!
                  </h2>
                </div>
              </div>
              <div className="col-md-11  ">
                <div className="row d-flex align-items-center justify-content-center">
                  <p className="col-11 col-md-8 b1 my-2 paraaaa bg-dark text-light ">
                    working at Aigroedge Technologies, Sector 125 Noida UP.
                    Currently working as an React Developer, contributing to the
                    development of web applications using React JS, HTML, CSS,
                    and JavaScript.
                  </p>
                  <p className="col-11 col-md-8 b1 my-2 paraaaa bg-dark p-sm-3 text-light">
                    Collaborating with a team of developers to implement
                    features, enhance user interfaces, and optimize application
                    performance.
                  </p>
                  <p className="col-11 col-md-8 b1 my-2 paraaaa bg-dark  p-sm-3  text-light">
                    Gaining practical experience in translating design mock up
                    from Figma into functional and responsive user
                    interfaces.Employing version control techniques using Git
                    and GitHub for efficient code collaboration.
                  </p>
                </div>
              </div>

              <div className="row d-flex align-items-center justify-content-center  p-sm-3  mt-4">
                <div className="col-8">
                <div className="row">
                  <div className="col-3 col-sm-3 text-success fs-1">
                  <a href="https://example.com/${6266499047}"> <BsFillTelephoneFill /></a>
                   
                  </div>

                  <div className="col-3 col-md-3 text-success fs-1">
                  <a href="https://github.com/sandyy-singh"> <BsGithub /></a>
                   
                  </div>

                  <div className="col-3 col-md-4 text-success flex-start fs-1">
                  <a href="mailto:sandeeprewa43@gmail.com"><BsEnvelopeFill /></a>
                    
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-md-5 offset-sm-right-1 col-lg-5  p-md-3 row d-flex align-items-center justify-content-center  mt-md-5 ">
          <div className="row  mt-0 mt-4 mt-sm-2  ">
            <img className="col-12 mt-md-0 mt-md-5  " alt="" src={mypick3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
