import React, { useContext, useEffect } from "react";
import { useUrlPosition } from "../Hooks/useUrlParams";
import { useParams } from "react-router-dom";
import { CitiesContext } from "../Context/CitiesContext";

const CityDesc = () => {
  const { id } = useParams();
  const { currentCity, getClickedCity } = useContext(CitiesContext);

  useEffect(
    function () {
      getClickedCity(id);
    },
    [id, getClickedCity]
  );

  const CityData = {
    cityName: currentCity.cityName,
    country: currentCity.country,
    emoji: currentCity.emoji,
    date: currentCity.date,
    notes: currentCity.notes,
    position: currentCity.position,
    id: id,
  };
  return (
    <div className="CityDesc flex flex-col gap-7 w-[95%] h-auto bg-[#393939] shadow p-5 rounded-2xl justify-start items-start border-2 border-gray-800">
      <div className="flex flex-col">
        <h2>City Name :</h2>
        <h1>{CityData.cityName}</h1>
      </div>
      <div className="flex flex-col">
        <h2>You went to {CityData.cityName} on :</h2>
        <h1>{new Date(CityData.date).toLocaleDateString("en-GB")}</h1>
      </div>
      <div className="flex flex-col">
        <h2>Your Notes :</h2>
        <h1>{CityData.notes}</h1>
      </div>
      <div className="flex flex-col">
        <h2>Learn More :</h2>
        <a
          href={`https://en.wikipedia.org/wiki/${CityData.cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {CityData.cityName} on Wikipedia &rarr;
        </a>
      </div>
    </div>
  );
};

export default CityDesc;
