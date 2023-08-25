import React from "react";
import "./Skills.scss";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const Skills = () => {
  const data1 = {
    labels: [
      "REACT",
      "HTML",
      "CSS",
      "SASS",
      "JAVASCRIPT",
      "Github",
    ],
    datasets: [
      {
        label: "2022 ",
        data: [35,15,20,15,10,5],
        backgroundColor: [
           "rgb(46, 6, 84)",
          "rgb(155, 23, 65)",
          "rgb(107, 99, 184)",
          "rgb(231, 190, 141)",
          "rgb(169, 241, 36)",
          "rgb(55, 31, 142)",

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
    <div className="skills">
      <div className="my-skills">
        <h1>My Skills</h1>
        <div className="bar-chart">
          <div className="css"> CSS 80%</div>
          <div className="sass"> SASS 75% </div>
          <div className="javascript"> JAVASCRIPT 78% </div>
          <div className="html"> html 90% </div>
          <div className="react"> REACT JS 70% </div>
          <div className="mui"> MUI 70% </div>
          <div className="bootstrap"> BOOTSTRAP 60%</div>
          <div className="github"> Github 75%</div>
        </div>
      </div>
      <div className="used-skills">
        <h1>Skills used in this project</h1>
        <div className="pie-chart">
          <Pie className="chartt" data={data1} options={option1} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
