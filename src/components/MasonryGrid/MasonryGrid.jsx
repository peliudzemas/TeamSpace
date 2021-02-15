import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MasonryGrid = (props) => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [columnsNo, setcolumnsNo] = useState(3);
  const [gap, setgap] = useState(40);
  const columnWrapper = {};
  const result = [];
  //get the screen size width
  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    calcColumnsNo();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  //set the no of columns and the size of gap depending on screen width
  const calcColumnsNo = () => {
    if (windowWidth > 1200) {
      setcolumnsNo(3);
      setgap(40);
    } else if (windowWidth > 1024) {
      setcolumnsNo(2);
      setgap(40);
    } else if (windowWidth > 768) {
      setcolumnsNo(2);
      setgap(20);
    } else if (windowWidth <= 768) {
      setcolumnsNo(1);
      setgap(40);
    }
  };

  for (let i = 0; i < columnsNo; i++) {
    columnWrapper[`column${i}`] = [];
  }

  //set column gap as margin
  for (let i = 0; i < columnsNo; i++) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>
    );
  }
  //set gaps between cards as margin
  for (let i = 0; i < props.children.length; i++) {
    const columnIndex = i % columnsNo;
    if (
      (i > 2 &&
        props.children[i].type.displayName === "BirthdayCard" &&
        windowWidth > 1200) ||
      (i > 1 &&
        props.children[i].type.displayName === "BirthdayCard" &&
        windowWidth > 768 &&
        windowWidth <= 1200) ||
      (i > 0 &&
        props.children[i].type.displayName === "BirthdayCard" &&
        windowWidth <= 768)
    ) {
      columnWrapper[`column${columnIndex}`].push(
        <div
          style={{
            marginTop: `${gap + 48}px`,
            marginBottom: `${gap}px`,
          }}
        >
          {props.children[i]}
        </div>
      );
    } else {
      columnWrapper[`column${columnIndex}`].push(
        <div
          style={{
            marginTop: `${gap}px`,
            marginBottom: `${gap}px`,
          }}
        >
          {props.children[i]}
        </div>
      );
    }
  }
  return <div style={{ display: "flex" }}>{result}</div>;
};

export default MasonryGrid;

MasonryGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
