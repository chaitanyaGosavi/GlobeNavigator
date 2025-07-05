import { createContext, useState } from "react";
import Data from "/Data/Data.js"


const CitiesContext = createContext();

function CitiesProvider({ children }) {

    const [cities, setCities] = useState([]);
    const [currentCity, setCurrentCity] = useState({});

    const getClickedCity = function (cityId) {
        if (cityId.toString() === currentCity.id) {
            return;
        }

        cities.forEach((city) => {
            if (city.id.toString() === cityId) {
                setCurrentCity(city); 
            }
        });

        return null;

    }

    return <CitiesContext.Provider value={{ cities, setCities, currentCity, setCurrentCity, getClickedCity }}>{children}</CitiesContext.Provider>
};

export { CitiesProvider, CitiesContext }