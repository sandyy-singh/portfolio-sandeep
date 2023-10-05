import React from "react";
import "./Banner.scss";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import mypick111 from "../assets/mypick111.png";

import Services from "./Services";
import About from "./About";
import Galary from "./Galary";
import Skills from "./Skills";
import Contact from "./Contact";
import Project from "./Project";
// import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate =useNavigate()
  const forNavigate = ()=>{
    navigate("/Contact");
  }

  return (
    <div className="container-fluid  Banner">
      <div className="row p-3">
        <div className="  mt-0 col-sm-5 mypick1">
          <div className="row  mt-2 mt-sm-5 mt-md-5 ">
            <img className="col-12 col-sm-10 mt-md-0 mt-5  " alt="" src={mypick111} />
          </div>
        </div>

        <div className="col-sm-7 mt-0 mt-sm-5 ">
          <div className="row mt-0 mt-sm-5">
            <div className="col-12 col-sm-11">
              <ul className="row d-flex align-items-center justify-content-center">
                <li className="col-2 icon">
                  <a href="https://www.linkedin.com/in/sandeep-singh-78468624a/">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="col-2 icon">
                  <a href="https://www.facebook.com/profile.php?id=100005377299025">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="col-2 icon">
                  <a href="https://github.com/sandyy-singh">
                    <FaGithub />
                  </a>
                </li>
                <li className="col-2 icon">
                  <a href="https://www.instagram.com">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row align-items-center justify-content-center mt-3">
            <div className="col-8 ">
              <h1 className="mt-3 font-weight-bold">Sandeep Singh</h1>
              <h1 className="font-weight-bold">Web-App Developer</h1>
              <p className=" mt-4">I am sandeep singh,professional Web-App developer with</p>
              <p className=" mt-2">1.5 years experience in this field</p>
              <button className="btn btn-danger mt-0 mt-sm-2 mt-md-3" onClick={forNavigate}>Contact me</button>
            </div>
          </div>
        </div>
        <Project />
        <Services />
        <Galary />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Banner;


