import React from "react";
import Navbar from "./Navbar";
import DescSectioon from "./DescSectioon";
import MapSection from "./MapSection";

const MainSection = () => {
  return (
    <div className="w-screen h-screen text-[#eef1f0] flex flex-col">
      <div className="flex md:flex-row flex-col w-[95%] h-[95%] m-auto rounded-xl">
        <DescSectioon />
        <MapSection />
      </div>
    </div>
  );
};

export default MainSection;
