import React from "react";
import PropTypes from "prop-types";
import "./link.scss";

export const Link = ({ styleName, handleClick, children }) => (
  <button className={`link ${styleName}`} type="button" onClick={handleClick}>
    {children}
  </button>
);

Link.propTypes = {
  styleName: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.string,
};
