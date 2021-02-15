import React from "react";
import { RestaurantIntroCard } from "../RestaurantIntroCard/RestaurantIntroCard";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./best-restaurant-wrapper.scss";
import { Ratings } from "../../Rating/maxRatings";
import rest from "../../../db.json";

const BestRestaurantWrapper = () => {
  let no1_id = Ratings.numberOneRating()[3];
  let no2_id = Ratings.numberOneRating()[4];
  let no1 = rest.restaurants.restaurantList[no1_id];
  let no2 = rest.restaurants.restaurantList[no2_id];

  return (
    <div className="best-restaurants">
      <div className="restaurant-intro-card__wrapper">
        <RestaurantIntroCard />
      </div>
      <div className="restaurant-card__wrapper">
        <RestaurantCard
          image={no1.image}
          checkins={no1.checkIns}
          rating={Ratings.numberOneRating()}
          categories={no1.categories}
          title={no1.name}
          hours={Ratings.formatHours(no1.openingHours[0].hours)}
        ></RestaurantCard>
        <RestaurantCard
          image={no2.image}
          checkins={no2.checkIns}
          rating={Ratings.numberTwoRating()}
          categories={no2.categories}
          title={no2.name}
          hours={Ratings.formatHours(no2.openingHours[0].hours)}
        ></RestaurantCard>
      </div>
    </div>
  );
};

export default BestRestaurantWrapper;
