import { useState, useEffect } from "react";
import ContentSmall from "./components/ContentSmall";
import HeaderSmall from "./components/HeaderSmall";
import "./css/App.css";
import FooterSmall from "./components/FooterSmall";
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import WidthDetect from "./wideview/responsive";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <WidthDetect />
    </div>
  );
}

export default App;
