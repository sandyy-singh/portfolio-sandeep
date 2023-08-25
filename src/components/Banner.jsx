import React from "react";
import "./Banner.scss";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import mypick1 from "../assets/mypick1.png";

import Services from "./Services";
import About from "./About";
import Galary from "./Galary";
import Skills from "./Skills";
import Contact from "./Contact";
import Project from "./Project";
// import { useNavigate } from "react-router-dom";

const Banner = () => {
  // const navigate =useNavigate()

  return (
    <div className="Banner-bg">
      <div className="Banner">
        <div className="container">
          <div className="row mt-5">
            <div className="col-6 mt-5 mypick1">
              <div className="row align-items-center justify-content-center">
                <img className="col-12" alt="" src={mypick1} />
              </div>
            </div>

            <div className="col-6 mt-5 ">
              <div className="row mt-5">
                <div className="col-8">
                  <ul className="row align-items-center justify-content-center">
                    <li className="col-2">
                      <a href="https://www.linkedin.com/in/sandeep-singh-78468624a/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li className="col-2">
                      <a href="https://www.facebook.com/profile.php?id=100005377299025">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li className="col-2">
                      <a href="https://github.com/sandyy-singh">
                        <FaGithub />
                      </a>
                    </li>
                    <li className="col-2">
                      <a href="https://www.facebook.com/profile.php?id=100005377299025">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row align-items-center justify-content-center mt-5">
                <div className="col-8 ">
                  <h1 className="mt-5">I am </h1>
                  <h1 className="font-weight-bold">Sandeep Singh</h1>
                  <p>I am sandeep singh,professional Web developer with</p>
                  <p>1.5 years experience in this field</p>
                  <button className="btn btn-danger">Contact me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Galary />
        <Services />
        <Skills />
        <Project />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Banner;

{
  /*  

<div>
      <div className="Banner">
        <div className="container">
          <div className="row">
            <div className="col-6 mypick1">
              <div className="row align-items-center justify-content-center">
                <img className="col-10" alt="" src={mypick1} />
              </div>
            </div>

            <div className="col-6 name-icons">
              <div className="row content">
                <div className="content-icons">
                  <ul className="content-ul">
                    <li>
                      <a href="https://www.linkedin.com/in/sandeep-singh-78468624a/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100005377299025">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/sandyy-singh">
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100005377299025">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="banner-about">
                  <h1>I am </h1>
                  <h1>Sandeep Singh</h1>
                  <p>I am sandeep singh,professional Web developer with</p>
                  <p>1.5 years experience in this field</p>
                  <button>Contact me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      
      <Galary />
      <Services />
      <Skills />
      <Project />
      <About />
      <Contact />
          </div>
       </div>
       */
}
