import React, { useState } from "react";
import "./navbar.scss";
import MainNavigation from "./MainNavigation/MainNavigation";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const outsideExpandHandler = () => {
    if (expanded) setExpanded(false);
    else setExpanded(true);
  };

  return (
    <aside className={`navbar ${expanded ? `navbar--long` : `navbar--short`}`}>
      <div className="navbar__fixed-position-wrapper">
        <MainNavigation outsideExpandHandler={outsideExpandHandler} />
      </div>
    </aside>
  );
};

export default Navbar;
