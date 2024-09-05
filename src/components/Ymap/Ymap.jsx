import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

function Ymap() {
  const mapData = {
    center: [55.751574, 37.573856],
    zoom: 10,
  };
  const coordinates = [55.684758, 37.738521];

  return (
    <YMaps>
      <Map width={"50vw"} height={"70vh"} defaultState={mapData}>
        {/* {coordinates.map(coordinate => <Placemark geometry={coordinate} />)} */}
        <Placemark geometry={coordinates} />
      </Map>
    </YMaps>
  );
}

export default Ymap;
