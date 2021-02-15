import React, { useState } from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";
import SVGIcon from "../../../../SVGIcon/SVGIcon";
import NavItem from "./NavItem/NavItem";

import "./mainNavigation.scss";

const MainNavigation = ({ outsideExpandHandler }) => {
  const [navigationState, expandNavigationState] = useState({
    navItems: [
      {
        id: "1",
        iconName: "home",
        itemStatus: "inactive",
        exactURL: true,
        pageURL: "dashboard",
        itemText: "",
      },
      {
        id: "2",
        iconName: "bookmark",
        itemStatus: "inactive",
        exactURL: false,
        pageURL: "dashboard/reservations",
        itemText: "",
      },
      {
        id: "3",
        iconName: "compass",
        itemStatus: "inactive",
        exactURL: false,
        pageURL: "dashboard/eat-out",
        itemText: "",
      },
    ],
  });

  const [expanded, setExpanded] = useState(false);

  const expandEventHandler = () => {
    if (expanded) {
      setExpanded(false);
      expandNavigationState({
        navItems: [
          {
            ...navigationState.navItems[0],
            itemText: "",
          },
          {
            ...navigationState.navItems[1],
            itemText: "",
          },
          {
            ...navigationState.navItems[2],
            itemText: "",
          },
        ],
      });
    } else {
      setExpanded(true);
      expandNavigationState({
        navItems: [
          {
            ...navigationState.navItems[0],
            itemText: "Dashboard",
          },
          {
            ...navigationState.navItems[1],
            itemText: "Reservations",
          },
          {
            ...navigationState.navItems[2],
            itemText: "Eat-Out",
          },
        ],
      });
    }
  };

  const onExpandClick = () => {
    expandEventHandler();
    outsideExpandHandler();
  };

  return (
    <div
      className={`navigation__wrapper
      ${expanded ? "navigation__wrapper--long" : "navigation__wrapper--short"}`}
    >
      <nav className="navigation">
        <NavLink to="/dashboard" exact>
          <SVGIcon
            name={expanded ? `fullLogo` : `logo`}
            className="navigation__logo"
          />
        </NavLink>
        <div>
          <button
            className="navigation__chevron--background"
            onClick={onExpandClick}
          >
            <SVGIcon
              name="chevron-right"
              className={`navigation__chevron 
              ${
                expanded
                  ? "navigation__chevron--left"
                  : "navigation__chevron--right"
              }`}
            />
          </button>
        </div>
        <ul>
          {navigationState.navItems.map((item) =>
            item.exactURL ? (
              <NavLink
                key={item.id}
                to={`/${item.pageURL}`}
                exact
                activeClassName="selected"
              >
                <NavItem
                  expanded={expanded}
                  iconName={item.iconName}
                  itemStatus={item.itemStatus}
                  itemText={item.itemText}
                />
              </NavLink>
            ) : (
              <NavLink
                key={item.id}
                to={`/${item.pageURL}`}
                activeClassName="selected"
              >
                <NavItem
                  expanded={expanded}
                  iconName={item.iconName}
                  itemStatus={item.itemStatus}
                  itemText={item.itemText}
                />
              </NavLink>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;

MainNavigation.propTypes = {
  outsideExpandHandler: propTypes.func,
};
