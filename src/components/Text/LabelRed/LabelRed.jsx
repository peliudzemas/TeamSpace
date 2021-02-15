import React from "react";
import PropTypes from "prop-types";
import "./label-red.scss";

export const LabelRed = (props) => (
  <span className={`label-red ${props.labelStyle}`}>{props.text}</span>
);

LabelRed.propTypes = {
  text: PropTypes.string,
  labelStyle: PropTypes.string,
};
