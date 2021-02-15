import React from "react";
import "./user-greeting.scss";
import PropTypes from "prop-types";

const Greeting = (props) => {
  const greetingText = () => {
    const now = new Date();
    const currentHour = now.getHours();
    if (currentHour >= 4 && currentHour < 12) return "Good morning";
    else if (currentHour >= 12 && currentHour <= 17) return "Good afternoon";
    else return "Good evening";
  };

  return (
    <div className="greeting-wrapper">
      {greetingText()}, {props.name ? props.name : "User"}.
    </div>
  );
};

export default Greeting;

Greeting.propTypes = {
  name: PropTypes.string,
};
