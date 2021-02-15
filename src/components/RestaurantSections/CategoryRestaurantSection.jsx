import React from "react";
import PropTypes from "prop-types";
import RestaurantSection from "components/RestaurantSections/RestaurantSection/RestaurantSection";

export const CategoryRestaurantSection = (props) => {
  return (
    <RestaurantSection filter={props.filter} categoryName={props.category} />
  );
};

CategoryRestaurantSection.propTypes = {
  filter: PropTypes.string,
  category: PropTypes.string,
};
