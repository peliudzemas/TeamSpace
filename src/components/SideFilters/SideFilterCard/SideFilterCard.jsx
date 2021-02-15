import React from "react";
import "./side-filter-card.scss";
import { CardContainer } from "components/CardContainer/CardContainer";
import PropTypes from "prop-types";
import Divider from "components/Divider/Divider";
import { FilterOption } from "./FilterOption/FilterOption";
import { XButton } from "components/XButtonForReservations/XButton";

export const SideFilterCard = (props) => {
  const {
    categoryTitle,
    category,
    checkedCategories,
    addItemToFilterList,
    clearFilterList,
    deleteItemFromFilterList,
  } = props;

  // on "Clear all" button click, removes checked checkboxes and clears FilterList
  const clearHandler = () => {
    clearFilterList(categoryTitle);
  };

  return (
    <CardContainer styleName="card-container--shadow">
      <div className="side-filter-card">
        <div className="side-filter-card__header">
          <div className="side-filter-card__title">
            {categoryTitle.split(/(?=[A-Z])/).join(" ")}
          </div>
          <XButton handleClick={clearHandler}> Clear all </XButton>
        </div>
        <Divider />
        <div className="side-filter-card__content">
          {category.map((title, index) => {
            return (
              <FilterOption
                key={index}
                title={title}
                categoryTitle={categoryTitle}
                addItemToFilterList={addItemToFilterList}
                deleteItemFromFilterList={deleteItemFromFilterList}
                isChecked={checkedCategories.includes(title) ? true : false}
              />
            );
          })}
        </div>
      </div>
    </CardContainer>
  );
};

SideFilterCard.propTypes = {
  categoryTitle: PropTypes.string,
  category: PropTypes.array,
  checkedCategories: PropTypes.array,
  addItemToFilterList: PropTypes.func,
  clearFilterList: PropTypes.func,
  deleteItemFromFilterList: PropTypes.func,
};
