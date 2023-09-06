import React, { useState } from "react";
import "../../css/content/GetStartedSmall.css";
import "../../css/Props.css";

import image from "../../sources/brain-desktop.svg";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import RestorePageOutlinedIcon from "@mui/icons-material/RestorePageOutlined";

function GetStartedSmall(windowWidth) {
  //   console.log("현재 창의 너비", windowWidth);

  const [ad, setAd] = useState([
    { num: 12000, icon: ArticleOutlinedIcon, text: "exam questions" },
    {
      num: 15000,
      icon: AssignmentTurnedInOutlinedIcon,
      text: "anki style flashcards",
    },
    { num: 100, icon: RemoveRedEyeOutlinedIcon, text: "video tutorials" },
    { num: 250, icon: RestorePageOutlinedIcon, text: "OSCE mark schemes" },
  ]);

  const advertise = ad.map((item, index) => (
    <li className="ad__list flex column center" key={index}>
      <h1 className="num s45">{item.num}+</h1>
      <div className="ad__listIconName flex row center">
        <item.icon className="ad__listIcon" />
        <div className="ad__listName">{item.text}</div>
      </div>
    </li>
  ));

  return (
    <div className="getStarted column flex center">
      <img className="brainImage" src={image} alt="" />
      <div className="title s45">Learn Medicine the Smart Way</div>
      <div className="description colorGreyText">
        Quesmed is a cutting-edge learning platform designed to help you excel
        at your exams and succeed as a doctor
      </div>

      <button className="start__button button fontB cursor">Get started</button>
      <button className="tryNow__button button fontB cursor">Try now</button>

      <div
        className={
          "advertise flex " +
          (windowWidth.windowWidth > 770 ? "row" : "column box__height600")
        }
      >
        {advertise}
      </div>
    </div>
  );
}

export default GetStartedSmall;
