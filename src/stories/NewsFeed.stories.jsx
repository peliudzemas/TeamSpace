import React from "react";
import BirthdayCard from "../components/NewsFeedCard/Stories/Birthday/BirthdayCard";
import VideoCard from "../components/NewsFeedCard/Stories/Video/VideoCard";
import PostCard from "../components/NewsFeedCard/Stories/Post/PostCard";
import fakeData from "../db.json";

export default {
  title: "Components / NewsFeed",
};

export const NewsdFeed = () => {
  return fakeData.stories.map((data, index) => {
    if (data.type === "birthday") {
      return (
        <BirthdayCard
          key={index}
          data={data}
          avatar={fakeData.userData.userImage}
          userName={fakeData.userData.userName}
        />
      );
    } else if (data.type === "video") {
      return (
        <VideoCard
          key={index}
          data={data}
          avatar={fakeData.userData.userImage}
          userName={fakeData.userData.userName}
        />
      );
    } else if (data.type === "post") {
      return (
        <PostCard
          key={index}
          data={data}
          avatar={fakeData.userData.userImage}
          userName={fakeData.userData.userName}
        />
      );
    } else return null;
  });
};
