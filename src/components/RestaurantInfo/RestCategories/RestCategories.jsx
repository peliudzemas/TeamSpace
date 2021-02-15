import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../SVGIcon/SVGIcon";
import "./rest-categories.scss";

export const RestCategories = ({ categories, nameStyle, iconStyle }) => (
  <div className="categories">
    {[...Array(Object.keys(categories).length - 1)].map((name, i) => {
      return (
        <div className="categories" key={i}>
          <div className={`categories__name ${nameStyle}`} key={name}>
            {categories[i]}
          </div>
          <div className={`categories__icon ${iconStyle}`}>
            <SVGIcon name="ellipseGrey" />
          </div>
        </div>
      );
    })}
    <div className={`categories__name ${nameStyle}`}>
      {categories[Object.keys(categories).length - 1]}
    </div>
  </div>
);

RestCategories.propTypes = {
  categories: PropTypes.array,
  type: PropTypes.string,
  className: PropTypes.string,
  nameStyle: PropTypes.string,
  iconStyle: PropTypes.string,
};
