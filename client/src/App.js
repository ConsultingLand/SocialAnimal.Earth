import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

//Components
import Home from "./components/Home";
import Focus from "./components/Focus";
import Introduction from "./components/Introduction";
import Activity from "./components/Activity";
import Roadmap from "./components/Roadmap";
import Timeline from "./components/Timeline";
import Human from "./components/Human";
import Footer from "./components/Footer";
import Egypt from "./components/Egypt";

function App() {
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    });
  }, [scrollState]);
  return (
    <>
      <Navbar navBackground={scrollState} />

      <Home id={"home"} />
      <Focus />
      <Introduction id="introduction" />
      <Activity id="activity" />
      <Roadmap id="roadmap" />
      <Timeline id="timeline" />
      <Egypt />
      <Human />
      <Footer />
    </>
  );
}

export default App;
