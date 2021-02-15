import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import mapStyles from "./mapStyles.json";

export const Map = withScriptjs(
  withGoogleMap(() => {
    return (
      <div>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: 54.70416, lng: 25.2772 }}
          defaultOptions={{ styles: mapStyles }}
        >
          <Marker position={{ lat: 54.70416, lng: 25.2772 }} />
        </GoogleMap>
      </div>
    );
  })
);
