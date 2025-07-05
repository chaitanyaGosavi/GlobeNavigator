import React from "react";

const CountryItem = ({ CountryData }) => {
  const { country, emoji } = CountryData;
  return (
    <li className="md:w-[50%] w-full md:h-24 h-14 flex gap-5 bg-[#323232] text-[#f1f1ec] border-[#918348] border-2 border-l-[8px] rounded-md justify-start items-center p-2">
      <h1 className="text-[20px] font-semibold">
        <span className="mr-5">{emoji}</span>
        {country}
      </h1>
    </li>
  );
};

export default CountryItem;
