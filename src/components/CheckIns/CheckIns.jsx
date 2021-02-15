import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../SVGIcon/SVGIcon";
import "./check-ins.scss";

export const CheckIns = ({ checkins }) => (
  <div className="users">
    <SVGIcon name="user" />
    {checkins}
  </div>
);

CheckIns.propTypes = {
  checkins: PropTypes.number,
  type: PropTypes.string,
  className: PropTypes.string,
};
