import React from "react";
import PropTypes from "prop-types";
import "./rest-hours.scss";

export const RestHours = ({ hours }) => <div className="hours">{hours}</div>;

RestHours.propTypes = {
  hours: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
