import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { CategoryRestaurantSection } from "components/RestaurantSections/CategoryRestaurantSection";
import "./category-restaurants.scss";

const CategoryRestaurants = () => {
  const { category } = useParams();

  return (
    <div className="category-restaurants">
      <Breadcrumbs />
      <section className="category-restaurants__restaurants">
        <h1 className="category-restaurants__heading">
          The best places for the
          <span className="category-restaurants__category-name">
            {category}
          </span>
        </h1>
        <div className="category-restaurants__list">
          <CategoryRestaurantSection filter="category" category={category} />
        </div>
      </section>
    </div>
  );
};

export default CategoryRestaurants;
