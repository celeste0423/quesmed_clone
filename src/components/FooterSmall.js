import React, { useState } from "react";

import "../css/Props.css";
import "../css/FooterSmall.css";

import logoWhite from "../sources/logo-white.svg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function FooterSmall() {
  const [products, setProducts] = useState(false);
  const [resources, setResources] = useState(false);
  const [community, setCommunity] = useState(false);
  const [follow, setFollow] = useState(false);

  const toggleProducts = () => {
    setProducts(!products);
  };
  const toggleResources = () => {
    setResources(!resources);
  };
  const toggleCommunity = () => {
    setCommunity(!community);
  };
  const toggleFollow = () => {
    setFollow(!follow);
  };

  function ToggleBox({ title, onClick }) {
    return (
      <div className="toggleBox flex row center">
        <div className="titleFooter">{title}</div>
        <button className="toggleButton" onClick={onClick}>
          <KeyboardArrowDownOutlinedIcon className="toggleIcon" />
        </button>
      </div>
    );
  }

  return (
    <div className="footerSmall flex column center">
      <img src={logoWhite} alt="" />
      <div className="description s13">
        We are incredibly gratefrul to our community for all of the
        contributions that have helped us build this learning platform. Thank
        you.
      </div>
      <div className="flex row center">
        <div className="description s13">Let's talk: </div>
        <a href="#" className="email s13">
          info@quesmed.com
        </a>
      </div>
      <ToggleBox title="Products" onClick={toggleProducts} />
      <div className="toggle__contents">
        {products && (
          <div className="toggle__contents">
            <div className="toggle__content">Overview</div>
            <div className="toggle__content">Pricing</div>
            <div className="toggle__content">About Us</div>
          </div>
        )}
      </div>
      <ToggleBox title="Resources" onClick={toggleResources} />
      <div className="toggle__contents">
        {resources && (
          <div className="toggle__contents">
            <div className="toggle__content">Overview</div>
            <div className="toggle__content">Pricing</div>
            <div className="toggle__content">About Us</div>
          </div>
        )}
      </div>
      <ToggleBox title="Community" onClick={toggleCommunity} />
      <div className="toggle__contents">
        {community && (
          <div className="toggle__contents">
            <div className="toggle__content">Overview</div>
            <div className="toggle__content">Pricing</div>
            <div className="toggle__content">About Us</div>
          </div>
        )}
      </div>
      <ToggleBox title="Follow us" onClick={toggleFollow} />
      <div className="toggle__contents">
        {follow && (
          <div className="toggle__contents">
            <div className="toggle__content">Overview</div>
            <div className="toggle__content">Pricing</div>
            <div className="toggle__content">About Us</div>
          </div>
        )}
      </div>
      <hr />

      <p className="bottom colorGreyText s13">Acknowlegements</p>
      <p className="bottom colorGreyText s13">Terms & Conditions</p>
      <p className="bottom colorGreyText s13">Privacy Policy</p>
    </div>
  );
}

export default FooterSmall;
