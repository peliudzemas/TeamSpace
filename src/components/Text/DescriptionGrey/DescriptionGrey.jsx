import React from "react";
import PropTypes from "prop-types";
import "./description-grey.scss";

export const DescriptionGrey = (props) => (
  <div className={`description-grey__wrapper ${props.descWrapStyle}`}>
    <span className={`description-grey__content ${props.descStyle}`}>
      {props.text}
    </span>
  </div>
);

DescriptionGrey.propTypes = {
  text: PropTypes.string,
  descStyle: PropTypes.string,
  descWrapStyle: PropTypes.string,
};
