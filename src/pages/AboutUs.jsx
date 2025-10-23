import React, { useEffect } from "react";
import AboutHeroSection from "../components/AboutHeroSection";
import MissionAndVisionSection from "../components/Mission&VisionSection";
import OurJourneySection from "../components/OurJourneySection";
import CoreValuesSection from "../components/CoreValuesSection";
import JoinTheWellnessSection from "../components/JoinTheWellnessSection";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="font-[Poppins] text-gray-100 bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] overflow-hidden">
      <AboutHeroSection/>

      <MissionAndVisionSection/>

      <OurJourneySection/>

      <CoreValuesSection/>

      <JoinTheWellnessSection/>
    </div>
  );
};

export default AboutUs;