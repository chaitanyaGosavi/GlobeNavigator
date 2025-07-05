import React, { useContext, useEffect, useState } from "react";
import { useUrlPosition } from "../Hooks/useUrlParams";
import { CitiesContext } from "../Context/CitiesContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [lat, lng] = useUrlPosition();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");

  const navigate = useNavigate();


  const { setCities } = useContext(CitiesContext);

  const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

  useEffect(
    function () {
      if (!lat && !lng) return;

      async function fetchCityData() {
        try {
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log(data);

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a cityName. Click somewhere else 😉"
            );

          setCityName(data.cityName || data.locality || "");
          setCountry(data.countryName);
          setEmoji(data.countryCode);
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  const handleSubmit = function (e) {
    e.preventDefault();

    const cityObj = {
      cityName, position: { lat, lng }, country, date, notes, emoji, id: new Date().getTime()
    }

    setCities((cities) => [...cities, cityObj]);
    navigate('/App/Cities')

  }
  return (
    <div className="flex w-[95%] h-auto bg-[#474747d3] shadow p-5 rounded-2xl flex-col gap-5 items-start border-2 border-gray-800 justify-start overflow-hidden">
      {/* cityName Name */}
      <div className="w-full">
        <label className="block mb-1 text-sm font-medium">City Name</label>
        <div className="flex items-center bg-gray-100 text-black rounded px-2 py-2">
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent flex-1 outline-none"
          />
        </div>
      </div>

      {/* Date */}
      <div className="w-full">
        <label className="block mb-1 text-sm font-medium">
          When did you go to {cityName}?
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-gray-100 text-black rounded px-2 py-2 outline-none"
        />
      </div>

      {/* Notes */}
      <div className="w-full">
        <label className="block mb-1 text-sm font-medium">
          Notes about your trip to {cityName}
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full md:h-24 h-16 bg-gray-100 text-black rounded px-2 py-2 outline-none resize-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex w-full justify-between md:pt-2">
        <button className="bg-[#539464] hover:bg-green-700 text-white font-semibold md:px-6 px-4 md:py-2 py-1 rounded" onClick={handleSubmit}>
          ADD
        </button>
        <button className="bg-[#070707] hover:bg-gray-800 text-white font-semibold md:px-6 px-4 md:py-2 py-1 rounded">
          ← BACK
        </button>
      </div>
    </div>
  );
};

export default Form;
