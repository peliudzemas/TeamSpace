import React from "react";
import SVGIcon from "../components/SVGIcon/SVGIcon";
import { NavLink } from "react-router-dom";

import "../components/Breadcrumbs/breadcrumbs.scss";

export default {
  title: "Components / breadcrumb",
};

export const Breadcrumb = () => {
  //get the current pathname
  const pathname = window.location.pathname; //"/aa/bb/c%20c/dd/ee"

  const GetBreadcrumbs = (path) => {
    //create an array that contains main value
    let breadcrumbsItems = ["Dashboard"];
    //Split pathname to an array
    let pathNameItems = path.replace("%20", " ").split("/");
    //populate an array with pathNameItems array items
    breadcrumbsItems.push(...pathNameItems);
    //filter out empty string values
    breadcrumbsItems = breadcrumbsItems.filter((item) => item);

    return breadcrumbsItems;
  };

  const CreatePath = (path, index) => {
    let pathNameItems = path.split("/");
    pathNameItems.splice(index + 1);
    const pathName = pathNameItems.join("/");

    return pathName;
  };

  //check if item is last in array
  const IsLast = (index) => {
    return index === GetBreadcrumbs(pathname).length - 1;
  };

  //prevent click action for the last item in array
  const LastItemPreventClick = (e, index) => {
    if (IsLast(index)) {
      e.preventDefault();
    } else {
      return null;
    }
  };

  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb__list">
        {GetBreadcrumbs(pathname).map((value, index) => (
          <NavLink
            key={index}
            to={CreatePath(pathname, index)}
            className="breadcrumb__link"
            onClick={(e) => LastItemPreventClick(e, index)}
          >
            <li key={index} className="breadcrumb__list-item">
              {value}
              <SVGIcon name="chevron-right" className="svg__arrow-icon" />
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
