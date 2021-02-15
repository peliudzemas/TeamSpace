import React from "react";
import PropTypes from "prop-types";
import "./slider-nav-buttons.scss";
import SVGIcon from "components/SVGIcon/SVGIcon";

const SliderNavButtons = ({
  buttonIcon,
  leftClicked,
  rightClicked,
  leftClassName,
  rightClassName,
}) => {
  return (
    <>
      <button
        className={`slider-button ${leftClassName}`}
        onClick={() => leftClicked()}
      >
        <SVGIcon name={buttonIcon} />
      </button>
      <button
        className={`slider-button ${rightClassName}`}
        onClick={() => rightClicked()}
      >
        <SVGIcon name={buttonIcon} />
      </button>
    </>
  );
};

export default SliderNavButtons;

SliderNavButtons.propTypes = {
  buttonIcon: PropTypes.string,
  leftClicked: PropTypes.func,
  rightClicked: PropTypes.func,
  typeName: PropTypes.string,
  leftClassName: PropTypes.string,
  rightClassName: PropTypes.string,
};
