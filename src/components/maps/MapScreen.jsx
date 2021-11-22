import React from "react";
import L from "leaflet";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import useInput from "../../hooks/useInput";
import SearchInput from "./SearchInput";
import { useState } from "react";

export const MapScreen = () => {

  const [state, setstate] = useState('')
  
  const [{ ipS }, handleInputChange, reset] = useInput({
    ipS: "",
  });

  const handleSubmit = () => {
    console.log(ipS);
    const searched = ipS
    setstate(`https://ipinfo.io/${searched}?token=c9b830dad3ed67`)
    reset()
  }

  const { data } = useFetch(state);

  useEffect(() => {
    const container = L.DomUtil.get("mapId");
    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map("mapId").setView(data,13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );
  }, [data]);
  return (
    <div>
      <SearchInput
        ipS={ipS}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <div id="mapId" style={{ height: "50vh" }}></div>
    </div>
  );
};