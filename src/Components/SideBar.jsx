import React from "react";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-full h-full overflow-hidden text-[#f1f1ec] flex flex-col justify-start items-center gap-10">
      <AppNav />
      <Outlet />
    </div>
  );
};

export default SideBar;
