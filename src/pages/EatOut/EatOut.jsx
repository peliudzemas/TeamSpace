import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { DiscoverRestaurantSection } from "components/RestaurantCarouselSections/DiscoverRestaurantSection";
import { NewRestaurantSection } from "components/RestaurantCarouselSections/NewRestaurantSection";
import RestaurantCategories from "components/RestaurantCategories/RestaurantCategories";
import "./eat-out.scss";
import { HeroSlider } from "components/HeroSlider/HeroSlider";
import { ProgressIndicator } from "components/ProgressIndicator/ProgressIndicator";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }

    fetchMyAPI();
  }, [url]);

  return { data, loading };
};

const EatOut = () => {
  const { data, loading } = useFetch("http://localhost:3008/restaurants");

  if (loading) {
    return <ProgressIndicator message="Loading..." />;
  }

  return (
    <div className="eat-out">
      <Breadcrumbs />
      <section className="eat-out__discover-restaurants">
        <h1 className="eat-out__title">Hungry? Find the best place!</h1>
        <HeroSlider />
      </section>
      <section className="eat-out__categories-section">
        <h2 className="eat-out__heading">Categories</h2>
        <RestaurantCategories restaurantData={data} />
      </section>
      <section className="eat-out__discover-restaurants">
        <h3 className="eat-out__heading">Discover near you</h3>
        <DiscoverRestaurantSection />
      </section>
      <section className="eat-out__new-restaurants">
        <h3 className="eat-out__heading">New places</h3>
        <NewRestaurantSection />
      </section>
    </div>
  );
};

export default EatOut;
