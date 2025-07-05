import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
<div className="w-full h-full text-[#eef1f0]">
  <Navbar />
  <div className="w-full md:h-[70%] h-full px-4 md:w-[90%] lg:w-[70%] mx-auto my-10 flex flex-col lg:flex-row justify-center items-center gap-5 bg-[#213322c1] rounded-2xl py-6 lg:py-0">
    
    {/* Left Content */}
    <div className="flex flex-1 md:h-full h-1/2 flex-col justify-center items-start gap-3 px-2 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
        Discover the World with GlobeNavigator
      </h1>
      <p className="text-sm sm:text-base text-justify mb-2">
        GlobeNavigator is an interactive map-based platform that allows you
        to explore, select, and track cities and countries effortlessly.
        Whether you’re a traveler, student, or simply curious about the
        world, our intuitive map and selection list make it easy to create
        your own personalized geography journey.
      </p>
      <h2 className="text-lg sm:text-xl font-semibold">Why Use GlobeNavigator?</h2>
      <ul className="list-disc list-inside text-[#e7e8e7] mb-2 space-y-2 text-sm sm:text-base">
        <li>Simple way to visualize and plan travel.</li>
        <li>Useful educational tool for learning geography.</li>
        <li>Customizable selections for personal or professional use.</li>
        <li>
          Designed for hobbyists, students, teachers, and curious explorers.
        </li>
      </ul>
      <div className="flex flex-wrap gap-4 mt-4">
        <NavLink
          to="/App"
          className="bg-[#5e8a53] px-5 py-2 text-[#fefffd] rounded-lg text-sm sm:text-base font-semibold hover:bg-[#59834f]"
        >
          Get Started
        </NavLink>
        <NavLink
          to="/Pricing"
          className="bg-[#f1f1ec] px-5 py-2 text-[#527949] rounded-lg text-sm sm:text-base font-semibold hover:bg-[#5e8a53] hover:text-[#f1f1ec]"
        >
          Pricing
        </NavLink>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex flex-1 w-full md:h-full h-1/2">
      <img
        className="w-full h-auto object-cover rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl"
        src="/Product-img.jpg"
        alt="Globe illustration"
      />
    </div>
  </div>
</div>

  );
};

export default Product;
