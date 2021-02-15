import React from "react";
import PropTypes from "prop-types";
import "./card-container.scss";

export const CardContainer = (props) => {
  return (
    <div className={`card-container ${props.styleName}`}>{props.children}</div>
  );
};

CardContainer.propTypes = {
  styleName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
