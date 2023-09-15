import React from "react";
import { useState, useEffect } from "react";

const WidthDetect = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 700);
  const updateMedia = () => {setDesktop(window.innerWidth > 700)};
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <div>I show on 700px or higher</div>
      ) : (
        <div>I show on 700px or lower</div>
      )}
    </div>
  );
}
//shows different sentences based on width of page, will use this later on for conditional rendering
export default WidthDetect;