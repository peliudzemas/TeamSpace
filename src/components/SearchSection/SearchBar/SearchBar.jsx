import React from "react";
import propTypes from "prop-types";
import "./search-bar.scss";
import SVGIcon from "components/SVGIcon/SVGIcon";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <button
        className="search-bar__button"
        type="submit"
        onClick={props.handleClick}
      >
        <SVGIcon name="search" />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="search-bar__text-field"
        value={props.inputValue}
        onChange={props.handleChange}
      />
      <button
        className={
          props.inputValue === ""
            ? "search-bar__button search-bar__button--hidden"
            : "search-bar__button"
        }
        onClick={props.handleCancelClick}
      >
        <SVGIcon name="cancel" />
      </button>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  inputValue: propTypes.string,
  handleChange: propTypes.func,
  handleCancelClick: propTypes.func,
  handleClick: propTypes.func,
};
