import React from "react";
import propTypes from "prop-types";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./restaurant-categories.scss";

const RestaurantCategories = (props) => {
  // loop through all restaurants and push their categories into one array
  const existingCategories = props.restaurantData.restaurantList
    .map((i) => i.categories)
    .flat();

  //loop through provided array to count number of times element appears
  const countOccurences = (array, value) => {
    return array.reduce((accumulator, element) => {
      return value === element ? accumulator + 1 : accumulator;
    }, 0);
  };

  return (
    <div className="restaurant-categories">
      {props.restaurantData.categories.sort().map((item) => (
        <CategoryCard
          category={item}
          keyword={
            countOccurences(existingCategories, item) === 1 ? "place" : "places"
          }
          icon={item}
          totalNumber={countOccurences(existingCategories, item)}
          key={item}
          iconsOutside={true}
          directTo="eat-out"
          cardSmall
        />
      ))}
    </div>
  );
};

export default RestaurantCategories;

RestaurantCategories.propTypes = {
  restaurantData: propTypes.object,
};
