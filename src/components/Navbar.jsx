import React,{useState} from "react";
import "./Navbar.scss";
import logo from "../assets/log.png";
import { Link} from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";


const Navbar = () => {
const [ismobile,setIsmobile] = useState(true)
const iconHandeler =()=>{
  if(!ismobile){
    setIsmobile(true)
  } else{
    setIsmobile(false)
  }

}
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className={ismobile ?  "container-wrap" : "showNavbar"}>
          <ul className="nav-left">
            <div className="nav-logo ">
              <img src={logo} alt="" />
            </div>
          </ul>
          <ul className={ ismobile ? "nav-right" : "nav-center"} >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/Project">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>


          </ul>
          <button className="mobile-menu-icon" onClick={iconHandeler}>
          {ismobile ? <BiMenu /> : <ImCross />}
         </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
