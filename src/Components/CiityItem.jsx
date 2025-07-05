import React from "react";
import { Link } from "react-router-dom";

const CiityItem = ({ CityData }) => {
  const { cityName, emoji, date, position, id } = CityData;
  return (
    <li className="md:w-[90%] w-full">
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} className="w-full flex md:gap-5 gap-2 bg-[#323232] text-[#f1f1ec] border-[#3e6349] border-2 border-l-[8px] rounded-md h-14 justify-between items-center p-2">
        <h1 className="text-[16px] font-semibold text-ellipsis">
          <span className="mr-5">{emoji}</span>
          {cityName}
        </h1>
        <span className="text-[16px] flex justify-center items-center">
          {new Date(date).toLocaleDateString("en-GB")}
          <button className="hover:bg-[#671e1e] cursor-pointer font-bold m-5 text-center rounded-full h-10 w-10">
            &times;
          </button>
        </span>
      </Link>
    </li>
  );
};

export default CiityItem;
