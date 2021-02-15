import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

export const Button = ({
  children,
  className,
  typeName,
  handleClick,
  tabIndex,
  isDisabled = false,
}) => (
  <button
    className={className}
    type={typeName}
    onClick={handleClick}
    tabIndex={tabIndex}
    disabled={isDisabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  typeName: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isDisabled: PropTypes.bool,
};
