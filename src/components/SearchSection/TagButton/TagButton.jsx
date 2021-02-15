import React, { useState, useEffect } from "react";
import { Button } from "components/Button/Button";
import SVGIcon from "components/SVGIcon/SVGIcon";
import classNames from "classnames";
import "./tag-button.scss";
import PropTypes from "prop-types";

const TagButton = ({ buttonText, icon, isSelected, selectClick }) => {
  const [isSelectedState, setIsSelectedState] = useState(isSelected);

  useEffect(() => {
    setIsSelectedState(isSelected);
  }, [isSelected]);

  const buttonStyle = classNames("tag-button", {
    "tag-button--selected": isSelectedState === true,
  });
  return (
    <Button className={buttonStyle} handleClick={selectClick}>
      <SVGIcon name={icon} className="tag-button__icon" />
      {buttonText}
    </Button>
  );
};

export default TagButton;

TagButton.propTypes = {
  buttonText: PropTypes.string,
  icon: PropTypes.string,
  isSelected: PropTypes.bool,
  selectClick: PropTypes.func,
};
