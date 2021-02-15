import React from "react";
import propTypes from "prop-types";
import SVGIcon from "../../../../../SVGIcon/SVGIcon";

import "../mainNavigation.scss";

const NavItem = (props) => {
  return (
    <li
      className={`navigation__item ${
        props.expanded ? "navigation__item--long" : "navigation__item--short"
      }`}
    >
      <div className="navigation__context">
        <SVGIcon name={props.iconName} className={`navigation__icon`} />
        <span className={`navigation__text`}>{props.itemText}</span>
      </div>
    </li>
  );
};

export default NavItem;

NavItem.propTypes = {
  expanded: propTypes.bool,
  iconName: propTypes.string,
  itemText: propTypes.string,
};
