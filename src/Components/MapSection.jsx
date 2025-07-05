import React, { useContext } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";

import { useUrlPosition } from "../Hooks/useUrlParams";
import { CitiesContext } from "../Context/CitiesContext";

const MapSection = () => {
  const { cities, setCities } = useContext(CitiesContext);

  let [lat, lng] = useUrlPosition();

  lat = lat ? lat : 42.00067982430463;
  lng = lng ? lng : 12.392578125;

  return (
    <div className="lg:w-3/5 w-full flex-1 h-full bg-[#d1caca6c] rounded-xl relative">
      <MapContainer
        center={[lat, lng]}
        zoom={6}
        scrollWheelZoom={true}
        className={"map"}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((cityData) => {
          return (
            <Marker
              position={[cityData.position.lat, cityData.position.lng]}
              key={cityData.id}
            >
              <Popup>
                {cityData.emoji} {cityData.cityName}
              </Popup>
            </Marker>
          );
        })}
        <ChangeCenter position={[lat, lng]} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default MapSection;
