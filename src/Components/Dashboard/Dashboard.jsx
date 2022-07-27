import React, { useState } from "react";
import { Link } from "react-router-dom";

import Heading from "./Heading";
import Nutritionpichart from "./Nutritionpichart";
import "./Dashboard.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Image from "../ImagesAndIcones/Image.png";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// React icones
import { BiUserCheck } from "react-icons/bi";
import { TbCalendarStats } from "react-icons/tb";
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

//JSON data
import datas from "./Userdata.json";
import { click } from "@testing-library/user-event/dist/click";
import Nutrition from "./Nutrition";

const Dashboard = () => {
  const [newStepTarget, stepTarget] = useState(datas[0].walkTarget);
  function forStepIncTarget() {
    datas[0].walkTarget += 500;
    stepTarget(datas[0].walkTarget);
  }
  function forStepDecTarget() {
    datas[0].walkTarget -= 500;
    stepTarget(datas[0].walkTarget);
  }
  const [newCalTarget, calTarget] = useState(datas[0].calorieTarget);
  function forCalIncTarget() {
    datas[0].calorieTarget += 100;
    calTarget(datas[0].calorieTarget);
  }
  function forCalDecTarget() {
    datas[0].calorieTarget -= 100;
    calTarget(datas[0].calorieTarget);
  }

  return (
    <div id="dashboard">
      <div id="dashboard__heading">
        <Heading></Heading>
      </div>
      <div id="dashboard__users">
        {datas.map((data) => (
          <div className="user" key={data.userId}>
            <div className="user__pfile">
              <div className="user__image">
                <img src={Image} alt="" />
              </div>
              <div className="user__det">
                <p>{data.userName}</p>
                <small>{data.userMail}</small>
              </div>
            </div>
            <div className="user__steps">
              <div className="user__steps--cbar">
                <CircularProgressbar
                  value={(data.stepWalked / newStepTarget) * 100}
                  text={data.stepWalked}
                  styles={buildStyles({
                    rotation: "0.25",
                    pathColor: "var(--secondary-var-color)",
                    textColor: "white",
                  })}
                />
                <small>Walked</small>
              </div>
              <div className="user__steps--target">
                <h1 className="inc" onClick={forStepIncTarget}>
                  +
                </h1>
                <h3>{newStepTarget / 1000}K</h3>

                <small>Target</small>
                <h1 className="dec" onClick={forStepDecTarget}>
                  -
                </h1>
              </div>
            </div>
            <div className="user__workout">
              <div className="user__workout__date">
                <div className="user__workout__date--performedDate displayFlex">
                  <BiUserCheck></BiUserCheck>
                  <h3>
                    {data.workoutDay} {data.workoutMounth}
                  </h3>
                </div>
                <div className="user__workout__date--scheduledDate displayFlex">
                  <TbCalendarStats></TbCalendarStats>
                  <h3>
                    {data.targetDay} {data.targetMounth}
                  </h3>
                </div>
              </div>
              <div className="user__workout--arrowBtn displayFlex">
                <Link to="/userId/workout" className="link">
                  <div className="user__workout--arrowBtn--icone">
                    <MdArrowForwardIos></MdArrowForwardIos>
                  </div>
                </Link>
              </div>
            </div>
            <div className="user_nutrition">
            <Tippy
                  content={<Nutritionpichart/>}
                  placement="bottom"
                  
                  >
                <div className="user_nutrition--cbar">
                  <CircularProgressbarWithChildren
                    //carbs
                    value={
                      (data.carbConsumed /
                        (data.proteinConsumed +
                          data.carbConsumed +
                          data.fatConsumed)) *
                        100 +
                      (data.proteinConsumed /
                        (data.proteinConsumed +
                          data.carbConsumed +
                          data.fatConsumed)) *
                        100
                    }
                    text={data.calorieIntake}
                    styles={buildStyles({
                      pathColor: "#F5C90F",
                      trailColor: "#03C7FC",
                      strokeLinecap: "butt",
                      rotation: "-.05",
                      textColor: "white",
                    })}
                  >
                    {/* Foreground path  */}
                    <CircularProgressbar
                      //protein
                      value={
                        (data.proteinConsumed /
                          (data.proteinConsumed +
                            data.carbConsumed +
                            data.fatConsumed)) *
                        100
                      }
                      styles={buildStyles({
                        trailColor: "transparent",
                        strokeLinecap: "butt",
                        pathColor: "#F45C84",
                        rotation: "-.05",
                      })}
                    ></CircularProgressbar>
                  </CircularProgressbarWithChildren>
                  
                  <small>calaoies</small>
                </div>
                  </Tippy>
              <div className="user_nutrition--target">
                <h1 className="inc" onClick={forCalIncTarget}>
                  +
                </h1>
                <h3>{newCalTarget / 1000}K</h3>
                <small>Target</small>
                <h1 className="dec" onClick={forCalDecTarget}>
                  -
                </h1>
              </div>
              <div className="user_nutrition--arrowBtn displayFlex">
                <Link to="/userId/nutrition" className="link">
                  <div className="user_nutrition--arrowBtn--icone">
                    <MdArrowForwardIos></MdArrowForwardIos>
                  </div>
                </Link>
              </div>
            </div>
            <div className="user__notification">
              <div className="user__notification--icone">
                <IoMdNotificationsOutline></IoMdNotificationsOutline>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Dashboard;
