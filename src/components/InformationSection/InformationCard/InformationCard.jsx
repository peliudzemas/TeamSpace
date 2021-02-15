import React from "react";
import "./information-card.scss";
import SVGIcon from "../../SVGIcon/SVGIcon";
import PropTypes from "prop-types";

const InformationCard = ({
  styleName,
  href,
  icon,
  title,
  className,
  description,
}) => {
  return (
    <div className={`information-card information-card--${styleName}`}>
      <div className="information-card__icon">
        <SVGIcon name={icon} />
      </div>
      <div className="information-card__text">
        <div className="information-card__title"> {title} </div>
        <a
          className={`information-card__description ${className}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {description}
        </a>
      </div>
    </div>
  );
};

export default InformationCard;

InformationCard.propTypes = {
  styleName: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
};
