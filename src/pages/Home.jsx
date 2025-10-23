import React, { useEffect } from "react";

import Heroo from "../components/Heroo";
import WhyWellnex from "../components/WhyWellnex";
import OurVision from "../components/OurVision";
import FlagshipApps from "../components/FlagshipApps";
import FutureVision from "../components/FutureVision";
import Testimonials from "../components/Testinomials";

import ProgressBar from "../components/ProgressBar";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ProgressBar />
      <Heroo />

      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
          <WhyWellnex />
        </div>

        <div style={{ position: "relative", marginTop: "-1vh", zIndex: 20 }}>
          <OurVision />
        </div>
      </div>

      <FlagshipApps />
      <FutureVision />
      <Testimonials />
    </>
  );
};

export default Home;