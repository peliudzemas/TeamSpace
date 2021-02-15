import React from "react";
import "./weather-widget.scss";
import WeekDayLocationSection from "./parts/WeekDayLocationPart/WeekDayLocationPart";
import WeatherPart from "./parts/WeatherPart/WeatherPart";
import IconPart from "./parts/IconPart/IconPart";
import dashboard from "../../db";

const WeatherWidget = () => {
  const weather = dashboard.weather;
  const i = Math.floor(Math.random() * Math.floor(7));

  return (
    <div className="widget">
      <div className="widget__content">
        <WeekDayLocationSection location={weather[i].location} />
        <WeatherPart
          type={weather[i].type}
          degreesInCelsius={weather[i].degreesInCelsius}
          wind={weather[i].wind}
          precipitation={weather[i].precipitation}
        />
      </div>
      <div className="widget__icon-place">
        <IconPart type={weather[i].type} />
      </div>
    </div>
  );
};

export default WeatherWidget;
