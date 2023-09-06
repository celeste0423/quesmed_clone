import React, { useState } from "react";
import "../../css/content/AdvertiseSmall.css";
import "../../css/Props.css";

import waveImage from "../../sources/wave.svg";
import brainPracticeImage from "../../sources/brain-practice.svg";
import brainKnowledgeImage from "../../sources/brain-knowledge.svg";
import brainFriendsImage from "../../sources/brain-friends.svg";
import platformImage from "../../sources/platform-1.svg";
import brainAppImage from "../../sources/brain-app.svg";
import appStoreImage from "../../sources/app-store.svg";
import googlePlayImage from "../../sources/google-play.svg";

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";

function AdvertiseSmall(windowWidth) {
  const [learnMore, setLearnMore] = useState([
    {
      image: brainPracticeImage,
      title: "Practice makes perfect",
      content:
        "Our questions are consistently recognised as the most relevant to taday's medical exams. Every question has detailed choice explanations to help you develop your clinical reasoning.",
    },
    {
      image: brainKnowledgeImage,
      title: "Build your knowlege",
      content:
        "Take your knowlege to the next level with our intelligent book of notes and doctor-led video tutorials that seamlessly link with all our question content.",
    },
    {
      image: brainFriendsImage,
      title: "Learn with friends",
      content:
        "Go through rigorously tested exam-ready OSCE mark schemes with your friends online and on-the-go to maximise your time on the wards!",
    },
  ]);

  const [review, setReview] = useState([
    {
      comment:
        "I came in the top decile this year after using your platform. I have no doubt that your site had a significant role in my exams results, and I am sure that I would not have done as well if I hadn't been a subscriber.",
      name: "Sanjay",
      GB: "George's Medical Student",
    },
    {
      comment:
        "Your platform is the best of all question banks out there right now. To be honest, I entirely credit Quesmed with my passing finals with distinction.",
      name: "Sam",
      GB: "UCL Medical Student",
    },
    {
      comment:
        "It was great to have a bank of questions relevant to my level of knowledge and fantastic explanations to help understand my mistakes.",
      name: "Alex",
      GB: "Imperial Medical Student",
    },
    {
      comment:
        "I came in the top decile this year after using your platform. I have no doubt that your site had a significant role in my exams results, and I am sure that I would not have done as well if I hadn't been a subscriber.",
      name: "Sanjay",
      GB: "George's Medical Student",
    },
    {
      comment:
        "Your platform is the best of all question banks out there right now. To be honest, I entirely credit Quesmed with my passing finals with distinction.",
      name: "Sam",
      GB: "UCL Medical Student",
    },
    {
      comment:
        "It was great to have a bank of questions relevant to my level of knowledge and fantastic explanations to help understand my mistakes.",
      name: "Alex",
      GB: "Imperial Medical Student",
    },
  ]);

  const learnMoreWidget = learnMore.map((item, index) => (
    <div className="box">
      <img className="box__image" src={item.image} alt="" />
      <h1
        className={
          "box__title " + (windowWidth.windowWidth > 830 ? "s30" : "s20")
        }
      >
        {item.title}
      </h1>
      <div
        className={
          "box__content" + (windowWidth.windowWidth > 830 ? "s20" : "s13")
        }
      >
        {item.content}
      </div>
    </div>
  ));

  const reviewWidget = review.map((item, index) => (
    <div
      className={
        "reviewBox flex column " +
        (index % 2 == 1 ? "reviewBox__oddColor" : "reviewBox__evenColor")
      }
    >
      <div className="review__comment flex s13">{item.comment}</div>
      <div className="review__bottom flex column">
        <div className="review__name fontB s15">{item.name}</div>
        <div className="review__GB s13">{item.GB}</div>
      </div>
    </div>
  ));

  return (
    <div className="advertiseSmall flex column center">
      <img src={waveImage} alt="" />
      <h1 className="title s45">Learn more in less time</h1>
      <div className="description colorGreyText s13">
        Our content is written by high achieving doctors and super-powered by
        the latest learning technology
      </div>
      <div
        className={
          "learnMoreWidget flex center " +
          (windowWidth.windowWidth > 1200
            ? "row box__heightRow"
            : "column box__heightColumn")
        }
      >
        {learnMoreWidget}
      </div>
      <div className="allInOne flex column center">
        <img src={waveImage} alt="" />
        <h1 className="title s45 flex">All-in-one platform</h1>
        <div className="description colorGreyText s13">
          We know what it's like to be in your shoes. We use our years of
          expertise as doctors who regularly teach medical students to prepare
          you for any challenge that comes your way
        </div>
        <a href="#" className="learnMoreLink flex column center">
          <div className="flex row center">
            Learn more
            <ArrowRightAltOutlinedIcon />
          </div>
          <hr className="underLine" />
        </a>

        <div className="questionBank flex row">
          <MenuBookOutlinedIcon />
          <div className="questionBank__text flex column">
            <div className="questionBank__title fontB s15">Question Bank</div>
            <div className="questionBank__content colorGreyText s15">
              Your go-to resource to practice, practice, practice. Over 12,000
              exam questions to test your knowldge.
            </div>
          </div>
        </div>
        <div className="OSCEPractice flex row">
          <BiotechOutlinedIcon />
          <div className="questionBank__text flex column">
            <div className="questionBank__title fontB s15">OSCE Practice</div>
            <div className="questionBank__content colorGreyText s15">
              An extensive collection of realistic OSCE mark schemes you can do
              yourself and with friends to track your progress and identify how
              to improve your performance!
            </div>
          </div>
        </div>
        <img className="platformImage flex" src={platformImage} alt="" />
      </div>
      <img src={waveImage} alt="" />
      <h1 className="title s45 flex">What our students say</h1>
      <div className="description colorGreyText s13">
        We created a platform we wish we had as medical sutdents. Join thousands
        of students who have used our platform to excel at medical school.
      </div>
      <div className="reviewScrollContainer flex row center">
        {reviewWidget}
      </div>

      <img className="brainAppImage" src={brainAppImage} alt="" />
      <div className="title s45 flex">Learn anytime</div>
      <div className="title s45 flex">anywhere</div>
      <div className="description colorGreyText s13">
        Learning on the go? Take your revision offline with our amazing mobile
        apps for iOS and Android
      </div>

      <div className="store flex row center">
        <button className="store__button">
          <img src={appStoreImage} alt="" />
        </button>
        <button className="store__button">
          <img src={googlePlayImage} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AdvertiseSmall;
