import React from "react";
import "./Project.scss";
import chatApp from "../assets/chatApp.png";
import weather from "../assets/weather-app.png";
import netFlix from "../assets/netflix_clone.png";
const Project = () => {
  return (
    <div className="projects">
      <div className="proj-head">
        <h1>My projects</h1>
      </div>
      <div className="bg-project">
        <div className="project">
          <button>
            <img src={chatApp} alt="" />
          </button>
          <h3>Chat App</h3>
        </div>

        <div className="project">
          <button>
            <img src={weather} alt="" />
          </button>
          <h3>Weather app</h3>
        </div>

        <div className="project">
          <button>
            <img src={netFlix} alt="" />
          </button>
          <h3> netFlix clone</h3>
        </div>
      </div>
    </div>
  );
};

export default Project;
