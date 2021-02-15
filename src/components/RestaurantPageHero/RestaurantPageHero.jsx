import React from "react";
import PropTypes from "prop-types";
import { RestCategories } from "../RestaurantInfo/RestCategories/RestCategories";
import { RestaurantInteractionsBanner } from "../RestaurantInteractionsBanner/RestaurantInteractionsBanner";
import { RestTitle } from "../RestaurantInfo/RestTitle/RestTitle";
import "./restaurant-page-hero.scss";

export const RestaurantPageHero = (props) => {
  return (
    <div className="restaurant-page-hero">
      <div className="restaurant-page-hero__top">
        <div className="restaurant-page-hero__background">
          <img
            className="restaurant-page-hero__image"
            src={props.image}
            alt=""
          ></img>
        </div>
        <div className="restaurant-page-hero__info">
          <RestCategories
            categories={props.categories}
            nameStyle="categories__name--dark"
            iconStyle="categories__icon--none"
          />
          <RestTitle titleStyle="title--bigger" title={props.title} />
        </div>
        <div className="restaurant-page-hero__banner">
          <RestaurantInteractionsBanner
            rating={props.rating}
            checkins={props.checkins}
          />
        </div>
      </div>
    </div>
  );
};

RestaurantPageHero.propTypes = {
  image: PropTypes.string,
  categories: PropTypes.array,
  title: PropTypes.string,
  rating: PropTypes.array,
  checkins: PropTypes.number,
};
