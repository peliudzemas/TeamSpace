import React from "react";
import PropTypes from "prop-types";
import "./rest-title.scss";

export const RestTitle = (props) => (
  <div className={`title ${props.titleStyle}`}>{props.title}</div>
);

RestTitle.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.string,
  className: PropTypes.string,
};
