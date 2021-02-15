import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import GreetingWidget from "../../components/GreetingWidget/GreetingWidget";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import BestRestaurantWrapper from "../../components/RestaurantCards/BestRestaurantWrapper/BestRestaurantWrapper";
import NewsFeed from "../../components/NewsFeedCard/NewsFeed";
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

const Dashboard = () => {
  const { data, loading } = useFetch("http://localhost:3008/userData");

  return loading ? (
    <ProgressIndicator message="Loading..." />
  ) : (
    <div className="dashboard">
      <section className="dashboard__header">
        <GreetingWidget userData={data} />
        <WeatherWidget />
      </section>
      <section className="dashboard__reservations">
        <h2 className="dashboard__heading">Reservations</h2>
        <div className="dashboard__reservations-cards">
          <CategoryCard
            category="devices"
            icon="Phone"
            totalNumber={data.reservations.devices.length}
            keyword={"reserved"}
            directTo="dashboard/reservations"
          />
          <CategoryCard
            category="books"
            icon="Book"
            totalNumber={data.reservations.books.length}
            keyword={"reserved"}
            directTo="dashboard/reservations"
          />
          <CategoryCard
            category="meeting Rooms"
            icon="Door"
            totalNumber={data.reservations.meetingRooms.length}
            keyword={"reserved"}
            directTo="dashboard/reservations"
          />
        </div>
        <BestRestaurantWrapper />
      </section>
      <section className="dashboard__newsFeed">
        <NewsFeed />
      </section>
    </div>
  );
};

export default Dashboard;
