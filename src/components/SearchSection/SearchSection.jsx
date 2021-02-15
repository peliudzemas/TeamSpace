import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import "./search-section.scss";
import { CardContainer } from "components/CardContainer/CardContainer";
import TagButton from "./TagButton/TagButton";
import SearchBar from "./SearchBar/SearchBar";
import DatePicker from "./DatePicker/DatePicker";
import { Button } from "components/Button/Button";
import SVGIcon from "components/SVGIcon/SVGIcon";

const SearchSection = (props) => {
  const [tags, setTags] = useState(props.tagButtons);

  useEffect(() => {
    setTags(props.tagButtons);
  }, [props.tagButtons]);

  return (
    <CardContainer styleName="card-container--shadow">
      <div className="search-section">
        <h2 className="search-section__title">Search</h2>
        <div className="search-section__search-filter-section">
          <div className="search-section__tag-wrapper">
            {tags.map((tag, index) => {
              return (
                <TagButton
                  key={index}
                  buttonText={tag.buttonText}
                  icon={tag.icon}
                  isSelected={tag.isSelected}
                  selectClick={() => props.handleTagButtonClick(index)}
                />
              );
            })}
          </div>
          <span className="search-section__datepicker-label">
            reservation date
          </span>
          <SearchBar
            inputValue={props.inputValue}
            handleCancelClick={props.handleCancelClick}
            handleChange={props.handleChange}
            handleClick={props.handleSearch}
          />
          <DatePicker
            onDatePickerChange={props.onDatePickerChange}
            datePickerValue={props.datePickerValue}
          />
          <Button
            className="button button--enabled search-section__search-button"
            type="button"
            handleClick={props.handleSearch}
          >
            <SVGIcon
              name="search"
              className="search-section__search-button-icon"
            />
            Search
          </Button>
        </div>
      </div>
    </CardContainer>
  );
};

export default SearchSection;

SearchSection.propTypes = {
  inputValue: propTypes.string,
  handleSearch: propTypes.func,
  handleCancelClick: propTypes.func,
  handleChange: propTypes.func,
  tagButtons: propTypes.arrayOf(
    propTypes.shape({
      buttonText: propTypes.string,
      icon: propTypes.string,
      isSelected: propTypes.bool,
    })
  ),
  handleTagButtonClick: propTypes.func,
  onDatePickerChange: propTypes.func,
  datePickerValue: propTypes.any,
};
