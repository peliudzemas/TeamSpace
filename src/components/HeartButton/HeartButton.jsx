import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SVGIcon from "components/SVGIcon/SVGIcon";
import "./heart-button.scss";

export const HeartButton = ({ isChecked = false }) => {
  const [reactionCountState, setReactionCountState] = useState(isChecked);
  useEffect(() => {
    setReactionCountState(isChecked);
  }, [isChecked]);

  const onReactionClick = () => {
    setReactionCountState(!reactionCountState);
  };

  return (
    <button className="heart-button" onClick={onReactionClick}>
      <SVGIcon
        name={reactionCountState ? "heartBtnColored" : "heartBtn"}
        className="heart-button__icon"
      />
    </button>
  );
};

HeartButton.propTypes = {
  isChecked: PropTypes.bool,
};
