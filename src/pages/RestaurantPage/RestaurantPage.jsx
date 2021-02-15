import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import RestaurantsCarousel from "components/RestaurantsCarousel/RestaurantsCarousel";
import { RestaurantPageHero } from "components/RestaurantPageHero/RestaurantPageHero";
import InformationSection from "components/InformationSection/InformationSection";
import { Ratings } from "components/Rating/maxRatings";
import "./restaurant-page.scss";
import { LocationSection } from "components/LocationSection/LocationSection";
import ReviewsSection from "components/Reviews/ReviewsSection";
import { ProgressIndicator } from "components/ProgressIndicator/ProgressIndicator";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(url);
      const data = await response.json();
      const restaurantList = data.restaurantList;
      setData(restaurantList);
      setLoading(false);
    }

    fetchMyAPI();
  }, [url]);

  return { data, loading };
};

const RestaurantPage = () => {
  const { restaurant } = useParams();

  const { data, loading } = useFetch("http://localhost:3008/restaurants");

  const mainRestaurant = data.find((rest) => rest.name === restaurant);

  const indexOfMainRestaurant = data.indexOf(mainRestaurant);

  // Removes mainRestaurant from restaurantList and filters restaurants that have similar categories to mainRestaurant's:
  const similarRestaurants = data
    .filter((rest) => rest !== mainRestaurant)
    .filter((rest) =>
      rest.categories.some((item) => mainRestaurant.categories.includes(item))
    );

  return loading ? (
    <ProgressIndicator message="Loading..." />
  ) : (
    <div className="restaurant">
      <Breadcrumbs />
      <section className="restaurant__hero">
        <RestaurantPageHero
          image={mainRestaurant.image}
          categories={mainRestaurant.categories}
          title={mainRestaurant.name}
          checkins={mainRestaurant.checkIns}
          rating={Ratings.countRating(indexOfMainRestaurant)}
        />
      </section>
      <section className="restaurant__about-restaurant">
        <section className="restaurant__information">
          <h3 className="restaurant__heading">Information</h3>
          <InformationSection
            address={mainRestaurant.address}
            phone={mainRestaurant.phone}
            website={mainRestaurant.website}
            openingHours={mainRestaurant.openingHours}
          />
        </section>
        <section className="restaurant__location">
          <h3 className="restaurant__heading">Location</h3>
          <LocationSection />
        </section>
        <aside className="restaurant__reviews">
          <h3 className="restaurant__heading">Reviews</h3>
          <ReviewsSection reviews={mainRestaurant.reviews} />
        </aside>
      </section>
      <section className="restaurant__similar-restaurants">
        <h3 className="restaurant__heading">Also you could like</h3>
        <RestaurantsCarousel restaurantList={similarRestaurants} />
      </section>
    </div>
  );
};

export default RestaurantPage;
