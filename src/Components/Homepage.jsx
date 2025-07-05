import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <section className="w-full h-[92%] flex flex-col gap-6 text-center text-white justify-center items-center m-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          You travel the{" "}
          <span className="text-[#5e8a53] text-3xl sm:text-4xl md:text-5xl uppercase">world</span>.
          <br />
          <span className="text-[#5e8a53] text-3xl sm:text-4xl md:text-5xl uppercase">GlobeNavigator</span> keeps track of your adventures.
        </h1>

        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#adb3ac] max-w-4xl">
          A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.
        </h2>

        <NavLink
          to="/App"
          className="bg-[#5e8a53] px-4 sm:px-6 py-2 sm:py-3 text-[#fefffd] rounded-xl text-lg sm:text-xl hover:bg-[#59834f] transition-all"
        >
          Start tracking now
        </NavLink>
      </section>
    </div>

  );
};

export default Homepage;
