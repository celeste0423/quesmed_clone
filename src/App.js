import { useState, useEffect } from "react";
import ContentSmall from "./components/ContentSmall";
import HeaderSmall from "./components/HeaderSmall";
import "./css/App.css";
import FooterSmall from "./components/FooterSmall";

function App() {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <div className="App">
      <HeaderSmall />
      <ContentSmall windowWidth={windowDimension.winWidth} />
      <FooterSmall />
    </div>
  );
}

export default App;
