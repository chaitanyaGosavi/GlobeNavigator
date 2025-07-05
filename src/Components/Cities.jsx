import React, { useContext } from "react";
import CiityItem from "./CiityItem";
import { CitiesContext } from "../Context/CitiesContext";
import NoData from "./NoData";

const Cities = () => {
  const { cities } = useContext(CitiesContext);
  return (
    <div className="flex md:w-[95%] w-full h-[75%] bg-[#3a532f91] shadow p-5 rounded-2xl flex-col items-center border-2 border-gray-800 justify-between overflow-hidden">
      {cities && cities.length > 0 ? <ul className="w-full flex flex-col gap-10 overflow-y-scroll overflow-x-hidden [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100  
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#4c6c3e]
  dark:[&::-webkit-scrollbar-track]:bg-gray-100
  dark:[&::-webkit-scrollbar-thumb]:bg-[#4c6c3e]">
        {cities.map((CityData) => {
          return <CiityItem CityData={CityData} key={CityData.id}/>
        })}
      </ul> : <NoData type={"cities"} />}
    </div>
  );
};

export default Cities;

