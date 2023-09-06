import React from "react";
import GetStartedSmall from "./content/GetStartedSmall";
import AdvertiseSmall from "./content/Advertise";

function ContentSmall(windowWidth) {
  //   console.log("현재 1차 너비", windowWidth);
  return (
    <div className="content">
      <GetStartedSmall windowWidth={windowWidth.windowWidth} />
      <AdvertiseSmall windowWidth={windowWidth.windowWidth} />
    </div>
  );
}

export default ContentSmall;
