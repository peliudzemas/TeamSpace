import React from "react";
import PropTypes from "prop-types";
import "./loading-error.scss";
import SVGIcon from "components/SVGIcon/SVGIcon";

export const LoadingError = ({ message }) => (
  <div className="error-block">
    <SVGIcon name="cancel" />
    <div className="error-block__message">{message}</div>
    <SVGIcon name="X" />
  </div>
);

LoadingError.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
};
