import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../assets/log.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ismobile, setIsmobile] = useState(true);
  const iconHandeler = () => {
    if (!ismobile) {
      setIsmobile(true);
    } else {
      setIsmobile(false);
    }
  };
  return (
    // <nav className="nav">
    //   <div className="nav-container">
    //     <div className={ismobile ?  "container-wrap" : "showNavbar"}>
    //       <ul className="nav-left">
    //         <div className="nav-logo ">
    //           <img src={logo} alt="" />
    //         </div>
    //       </ul>
    //       <ul className={ ismobile ? "nav-right" : "nav-center"} >
    // <li>
    //   <Link to="/">Home</Link>
    // </li>
    // <li>
    //   <Link to="/Services">Services</Link>
    // </li>
    // <li>
    //   <Link to="/About">About</Link>
    // </li>
    // <li>
    //   <Link to="/Skills">Skills</Link>
    // </li>
    // <li>
    //   <Link to="/Project">Projects</Link>
    // </li>
    // <li>
    //   <Link to="/Contact">Contact</Link>
    // </li>

    //       </ul>
    //       <button className="mobile-menu-icon" onClick={iconHandeler}>
    //       {ismobile ? <BiMenu /> : <ImCross />}
    //      </button>

    //     </div>
    //   </div>
    // </nav>
    <div className="navigationBar">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-dark ">
        <div className="container-fluid">
          <div className="nav-logo ">
            <img src={logo} alt="" />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon text-dark"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav  d-flex align-items-center justify-content-between">
              <li className="mx-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="mx-1 mx-md-3">
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
              <li className="mx-1 mx-md-3">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="mx-1 mx-md-3">
                <Link className="nav-link" to="/Galary">
                  Gallery
                </Link>
              </li>
              <li className="mx-1 mx-md-3">
                <Link className="nav-link" to="/Project">
                  Projects
                </Link>
              </li>
              <li className="mx-1 mx-sm-3">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
