import React, { useContext } from "react";
import { CitiesContext } from "../Context/CitiesContext";
import CountryItem from "./CountryItem";
import NoData from "./NoData";

const Countries = () => {
  const { cities } = useContext(CitiesContext);
  return (
    <div className="flex w-[95%] h-[75%] bg-[#4747478b] shadow p-5 rounded-2xl flex-col items-center border-2 border-gray-800 justify-centre overflow-hidden">
      {cities && cities.length > 0 ? <ul className="w-full h-full flex flex-col gap-10 overflow-y-scroll [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100  
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#918348]
  dark:[&::-webkit-scrollbar-track]:bg-gray-100
  dark:[&::-webkit-scrollbar-thumb]:bg-[#918348]">
        {cities.map((CountryData) => {
          return <CountryItem CountryData={CountryData} />
        })}
      </ul> : <NoData type={"countries"} />}
    </div>
  );
};

export default Countries;
