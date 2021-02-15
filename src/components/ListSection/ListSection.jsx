import React from "react";
import PropTypes from "prop-types";
import "./list-section.scss";
import { Pagination } from "../Pagination/Pagination";
import { XButton } from "../XButtonForReservations/XButton";

export const ListSection = (props) => {
  const {
    productList,
    filterList,
    deleteItemFromFilterList,
    openModal,
  } = props;
  const filterValues = Array.prototype.concat.apply(
    [],
    Object.values(filterList)
  );

  return (
    <div className="list-section">
      <div className="list-section__results">
        <div className="list-section__result-text">{`${productList.length} results for: `}</div>
        <div className="list-section__search-results">{props.searchValue}</div>
        <div className="list-section__filter-results">
          {filterValues.map((value, index) => {
            return (
              <XButton
                key={index}
                customClass="list-section__filter-item"
                handleClick={() => {
                  const categoryTitle = Object.keys(filterList).find((key) => {
                    return filterList[key].some((item) => {
                      return item === value;
                    });
                  });

                  deleteItemFromFilterList(categoryTitle, value);
                }}
              >
                {value}
              </XButton>
            );
          })}
        </div>
      </div>
      <Pagination list={productList} openModal={openModal} />
    </div>
  );
};

ListSection.propTypes = {
  productList: PropTypes.array,
  filterList: PropTypes.object,
  deleteItemFromFilterList: PropTypes.func,
  searchValue: PropTypes.string,
  openModal: PropTypes.func,
};
