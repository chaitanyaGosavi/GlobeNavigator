import React from "react";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";

const DescSectioon = () => {
  return (
    <div className="lg:w-2/5 w-full flex-1 flex flex-col justify-center items-center gap-10 rounded-l-2xl">
      <div className="flex flex-1 justify-center items-center gap-x-5">
        <img className="w-16 h-16" src="\globe-img.png" alt="logo" />
        <NavLink
          className="uppercase text-[28px] font-semibold text-[#8fb188]"
          to={"/"}
        >
          GlobeNavigator
        </NavLink>
      </div>
        <SideBar />
    </div>
  );
};

export default DescSectioon;
