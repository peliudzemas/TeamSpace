import React from "react";
import "./location-section.scss";
import { Map } from "./Map/Map";

export const LocationSection = () => {
  return (
    <div className="location-section">
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBMux0GDqdF7uQMCPGZ7mZCQh87eOkA_VY`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};
