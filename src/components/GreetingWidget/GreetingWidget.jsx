import React from "react";
import propTypes from "prop-types";
import Greeting from "../UserGreeting/UserGreeting";
import Clock from "../Clock/Clock";
import "./greeting-widget.scss";

export const Widget = (props) => {
  return (
    <div className="widget-block">
      <Clock />
      <Greeting name={props.userData.userName} />
    </div>
  );
};

export default Widget;

Widget.propTypes = {
  userData: propTypes.object,
};
