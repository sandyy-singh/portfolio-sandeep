import React from "react";
import "./Skills.scss";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const Skills = () => {
  const data1 = {
    labels: ["REACT", "HTML", "CSS", "SASS", "Github", "Bootstrap", "firebase"],
    datasets: [
      {
        label: "2022 ",
        data: [35, 15, 10, 15, 5, 10, 5],
        backgroundColor: [
          "rgb(124, 0, 0)",
          "rgb(124, 39, 58)",
          "rgb(88, 122, 58)",
          "rgb(88, 122, 206)",
          "rgb(169, 241, 36)",
          "rgb(55, 31, 142)",
          "rgb(16, 21, 36)",
          "rgb(55, 131, 14)",
        ],
        border: "none3",
      },
    ],
  };

  const option1 = {
    title: {
      display: true,
      text: "bar chart",
    },
    scales: {
      y: [
        {
          ticks: {
            min: 10,
            max: 100,
          },
        },
      ],
    },
  };

  return (
    <div className="container-fluid mt-5 mt-sm-5 p-sm-5">
      <div className="row mt-sm-5">
        <div className="col-sm-7">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-sm-12">
              <div className="row ">
                <div className="col-10 mb-4">
                  <h2 className="mySkills text-center my-2 mt-5 mt-sm-0">My Skills</h2>
                </div>
                <div className="col-12 my-2">
                  <div className=" javascript"> JAVASCRIPT 75% </div>
                  <div className=" css"> CSS 80%</div>
                  <div className="  sass"> SASS 70% </div>
                  <div className="html"> html 80% </div>
                  <div className=" mui"> MUI 70% </div>
                  <div className=" bootstrap"> BOOTSTRAP 80%</div>
                  <div className="github"> Github 70%</div>
                  <div className="fireBase "> fireBase 60%</div>
                  <div className="col-8 react"> REACT JS 70% </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-5 mt-4 mt-sm-0">
          <div className="row">
            <div className="col-12 text-cenrer">
              <h2 className="mySkills  mt-5 mt-sm-0">Skills used in this project</h2>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center piegrapf my-4">
              <Pie className="" data={data1} options={option1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
