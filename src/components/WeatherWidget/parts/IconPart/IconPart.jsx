import React from "react";
import "./icon-part.scss";
import PropTypes from "prop-types";
import SVGIcon from "../../../SVGIcon/SVGIcon";

const IconPart = ({ type }) => {
  return (
    <div className="icon">
      <SVGIcon name={type} />
    </div>
  );
};

export default IconPart;

IconPart.propTypes = {
  type: PropTypes.string,
};
