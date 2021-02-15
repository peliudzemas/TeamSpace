import React from "react";
import "./category-card.scss";
import PropTypes from "prop-types";
import SVGIcon from "../SVGIcon/SVGIcon";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const ResCard = ({
  category,
  totalNumber,
  icon,
  keyword,
  iconsOutside,
  directTo,
  cardSmall,
  component,
}) => {
  const iconStyle = classNames("card-wrapper__icon", {
    "card-wrapper__icon--outside": iconsOutside === true,
  });

  const nameStyle = classNames("card-wrapper__name", {
    "card-wrapper__name--small": cardSmall === true,
  });

  const cardStyle = classNames("card-wrapper", {
    "card-wrapper--selected": component === category,
  });

  return (
    <div className={cardStyle}>
      <Link
        title={`${
          category.charAt(0).toUpperCase() + category.substr(1).toLowerCase()
        } Page`}
        to={`${directTo}/${category}`}
        className="card-wrapper__link"
        aria-label={`${category}, ${totalNumber} ${keyword}`}
      >
        <div className="card-wrapper__info">
          <span className={nameStyle}>
            {category.charAt(0).toUpperCase() +
              category.substr(1).toLowerCase()}
          </span>
          <span className="card-wrapper__details">
            {keyword && totalNumber ? `${totalNumber} ${keyword}` : null}
          </span>
        </div>
        <div className={iconStyle}>
          <SVGIcon name={icon} />
        </div>
      </Link>
    </div>
  );
};

export default ResCard;

ResCard.propTypes = {
  category: PropTypes.string,
  icon: PropTypes.string,
  totalNumber: PropTypes.number,
  keyword: PropTypes.string,
  iconsOutside: PropTypes.bool,
  directTo: PropTypes.string,
  cardSmall: PropTypes.bool,
  component: PropTypes.string,
};
