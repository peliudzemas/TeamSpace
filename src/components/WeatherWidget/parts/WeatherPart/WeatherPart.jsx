import React from "react";
import "./weather-part.scss";
import PropTypes from "prop-types";

import { ReactComponent as Wind } from "../../../../assets/weather/wind.svg";
import { ReactComponent as RaintTear } from "../../../../assets/weather/rainTear.svg";

const WeatherPart = ({ type, degreesInCelsius, wind, precipitation }) => {
  return (
    <div className="weather">
      <div className="weather__temperature">
        <div className="weather__degrees">
          {degreesInCelsius.charAt(0) === "+"
            ? degreesInCelsius.substring(1)
            : degreesInCelsius}
          °
        </div>
        <div className="weather__type">{type}</div>
      </div>
      <div className="weather__information">
        <div className="item">
          <Wind />
          <div className="item__text">{wind}</div>
        </div>
        <div className="item">
          <RaintTear />
          <div className="item__text">{precipitation}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPart;

WeatherPart.propTypes = {
  type: PropTypes.string,
  degreesInCelsius: PropTypes.string,
  wind: PropTypes.string,
  precipitation: PropTypes.string,
};
