import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Pricing = () => {
  return (
<div className="w-full min-h-full text-[#eef1f0]">
  <Navbar />
  <div className="w-full px-4 sm:px-8 md:w-[90%] lg:w-[70%] mx-auto my-10 bg-[#213322c1] rounded-2xl p-6 sm:p-8 flex flex-col items-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
      Simple Pricing for Everyone
    </h2>
    <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center max-w-xl mb-10">
      Whether you're an occasional explorer or a frequent traveler, we have
      a plan that fits your journey.
    </p>

    {/* Cards */}
    <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 w-full">
      {/* Free Plan */}
      <div className="rounded-lg bg-[#697069c1] shadow p-5 sm:p-6 flex flex-col items-center border border-gray-500 justify-between hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Free</h3>
        <p className="text-3xl sm:text-4xl font-bold mb-4">₹0</p>
        <ul className="text-gray-300 mb-6 space-y-2 list-disc list-inside text-left w-full text-sm sm:text-base">
          <li>Select up to 10 places</li>
          <li>Basic map interaction</li>
          <li>Responsive design</li>
        </ul>
        <NavLink
          to="/App"
          className="bg-[#5e8a53] px-4 py-2 text-[#fefffd] rounded-lg text-base sm:text-lg hover:bg-[#59834f] font-semibold w-full text-center"
        >
          Get Started
        </NavLink>
      </div>

      {/* Pro Plan */}
      <div className="rounded-lg bg-[#697069c1] shadow p-5 sm:p-6 flex flex-col items-center border border-gray-500 justify-between hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Pro</h3>
        <p className="text-3xl sm:text-4xl font-bold mb-4">
          ₹499<span className="text-base sm:text-lg font-medium"> / month</span>
        </p>
        <ul className="text-gray-300 mb-6 space-y-2 list-disc list-inside text-left w-full text-sm sm:text-base">
          <li>Unlimited place selection</li>
          <li>Advanced map filters</li>
          <li>Downloadable reports</li>
          <li>Email support</li>
        </ul>
        <button className="bg-[#5e8a53] px-4 py-2 text-[#fefffd] rounded-lg text-base sm:text-lg hover:bg-[#59834f] font-semibold w-full text-center">
          Upgrade Now
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Pricing;
