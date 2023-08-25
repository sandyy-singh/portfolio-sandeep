import React from "react";
import "./About.scss";

import mypick3 from "../assets/mypick3.png";
import { BsFillTelephoneFill,BsEnvelopeFill,BsGithub } from "react-icons/bs";


const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-row">
          <div className="col-6 about-name-icons">
            <div className="about-content">
              <h1 className="about-hi">Hi there..</h1>
              <p>
                I am sandeep singh and I have completed BTech from RGPV
                university Bhopal in 2016. I have done 1 year 6 months training
                in front end web development and now I am working as intern at
                Aigroedge Technologies as a “MERN stack web Developer Intern”
              </p>
              <div className="intro">
                <div className="part1">
                  <div className=" flexiii">
                    <div className="icons"><BsFillTelephoneFill /></div>
                    <h2 className="p-info">+91-7566234243</h2>
                  </div>
                  <div className=" flexiii">
                    <div className="icons"><BsEnvelopeFill /></div>
                    <h2 className="p-info">sandeeprewa43@gmail.com</h2>
                  </div>
                  <div className=" flexiii">
                    <div className="icons"><BsGithub /></div>
                    <h2 className="p-info">sandyy-singh</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 about-mypick1">
            <div>
              <img alt="" src={mypick3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
