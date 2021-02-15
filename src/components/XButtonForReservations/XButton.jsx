import React from "react";
import PropTypes from "prop-types";
import "./x-button.scss";
import SVGIcon from "components/SVGIcon/SVGIcon";
import { Button } from "../Button/Button";

export const XButton = ({ children, handleClick, customClass }) => (
  <Button
    className={`x-filter-button ${customClass}`}
    handleClick={handleClick}
  >
    <div className="x-filter-button__text">{children}</div>
    <SVGIcon name="X" />
  </Button>
);

XButton.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func,
  customClass: PropTypes.string,
};
