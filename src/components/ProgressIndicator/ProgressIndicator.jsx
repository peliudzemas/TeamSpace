import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as ProgressBar } from "assets/progressBar.svg";
import "./progress-indicator.scss";

export const ProgressIndicator = ({ message }) => (
  <div className="progress-block">
    <div className="progress-block__bar">
      <ProgressBar />
    </div>
    <div className="progress-block__message">{message}</div>
  </div>
);

ProgressIndicator.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
};
