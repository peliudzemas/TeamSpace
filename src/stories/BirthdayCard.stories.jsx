import React from "react";
import Divider from "../components/Divider/Divider";
import CardContainer from "../components/CardContainer/CardContainer";
import BirthdayCard from "../components/NewsFeedCard/Stories/Birthday/BirthdayCard";
import UsersReactions from "../components/NewsFeedCard/UsersReactions/UsersReactions";
import fakeData from "../db.json";

export default {
  title: "Components / BirthdayCardFeed",
};

export const BirthdayCardFeed = () => {
  return fakeData.stories.map((data, index) => {
    if (data.type === "birthday") {
      return (
        <CardContainer key={index}>
          <BirthdayCard data={data} />
          <Divider />
          <UsersReactions data={data} />
        </CardContainer>
      );
    } else {
      return null;
    }
  });
};
