import React from "react";
import "./Project.scss";
import chatApp from "../assets/chatApp.png";
import weather from "../assets/weather-app.png";
import netFlix from "../assets/netflix_clone.png";
const Project = () => {
  return (
    <div className="container-fluid p-4 projectss p-5">
      <div className="row d-flex align-items-center justify-content-center projects p-5 mt-sm-3">
        <div className="col-sm-6 proj-head p-sm-5">
          <h1 className="text-center">My projects</h1>
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center mt-3">
        <div className="col-sm-12 mt-2 mt-sm-4 d-flex align-items-center justify-content-center">
          <div className="row">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <button>
                <img className="image co" src={chatApp} alt="" />
              </button>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center">
              <h3 className="mt-2"> Chat App</h3>
            </div>
          </div>
        </div>

            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <button>
                    <img className="image co" src={weather} alt="" />
                  </button>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <h3 className="mt-2"> weather App</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <button>
                    <img className="image co" src={netFlix} alt="" />
                  </button>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <h3 className="mt-2"> netFlix clone</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
