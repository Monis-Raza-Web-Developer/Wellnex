import React, { useEffect } from "react";
import FlagshipApps from "../components/FlagshipApps";
import AppsHeroSection from "../components/AppsHeroSection";

const OurApps = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
      <div className="font-[Poppins] text-gray-100 bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] overflow-hidden">
        <AppsHeroSection />
        <FlagshipApps />
      </div>
    </>
  );
};

export default OurApps;