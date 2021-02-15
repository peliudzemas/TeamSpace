import React from "react";
import PropTypes from "prop-types";
import { CardContainer } from "../../CardContainer/CardContainer";
import { CheckIns } from "../../CheckIns/CheckIns";
import { Rating } from "../../Rating/Rating";
import { RestCategories } from "../../RestaurantInfo/RestCategories/RestCategories";
import { RestTitle } from "../../RestaurantInfo/RestTitle/RestTitle";
import { RestHours } from "../../RestaurantInfo/RestHours/RestHours";
import { HeartButton } from "../../../components/HeartButton/HeartButton";
import { Link } from "react-router-dom";
import "./restaurant-card.scss";

const RestaurantCard = (props) => {
  return (
    <CardContainer styleName="card-container--shadow">
      <div className="restaurant-card">
        <div className={`restaurant-card__top ${props.customClass}`}>
          <div className="restaurant-card__checkins-rating">
            <CheckIns checkins={props.checkins} />
            <Rating rating={props.rating} />
          </div>
          <div className="restaurant-card__categories">
            <RestCategories categories={props.categories} />
          </div>
          <div className="restaurant-card__background">
            <img src={props.image} alt="" className="restaurant-card__image" />
          </div>
        </div>
        <div className="restaurant-card__title-like">
          <Link
            title={`${props.title} - Restaurant page`}
            className="restaurant-card__link"
            to={`/dashboard/eat-out//${props.title}`}
          >
            <RestTitle title={props.title} />
          </Link>
          <HeartButton />
        </div>
        <div className="restaurant-card__hours">
          <RestHours hours={props.hours} />
        </div>
        {props.children}
      </div>
    </CardContainer>
  );
};

export default RestaurantCard;

RestaurantCard.propTypes = {
  children: PropTypes.object,
  customClass: PropTypes.string,
  checkins: PropTypes.number,
  rating: PropTypes.array,
  categories: PropTypes.array,
  image: PropTypes.string,
  title: PropTypes.string,
  hours: PropTypes.string,
};
