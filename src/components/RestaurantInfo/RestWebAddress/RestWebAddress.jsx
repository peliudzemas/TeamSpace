import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../SVGIcon/SVGIcon";
import "./rest-web-address.scss";

export const RestWebAddress = ({ icon, href, className, text }) => {
  return (
    <div className="restaurant-contact">
      <div className="restaurant-contact__icon">
        <SVGIcon name={icon} />
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`restaurant-contact__text ${className}`}
      >
        {text}
      </a>
    </div>
  );
};

RestWebAddress.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
