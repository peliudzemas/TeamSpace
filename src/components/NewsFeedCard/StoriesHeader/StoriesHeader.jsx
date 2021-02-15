import React from "react";
import PropTypes from "prop-types";
import UserAvatar from "../../UserAvatar/UserAvatar";
import TimeBetween from "../TimeBetween";
import "./stories-header.scss";

const PostHeader = (props) => {
  const timeNow = new Date().getTime();

  return (
    <div className="post__header">
      <div className="post__avatar-wrapper">
        <UserAvatar size={24} imageSrc={props.data.userImage} />
      </div>
      <span className="post__username">{props.data.userName}</span>
      <span className="post__location">{props.data.postLocation}</span>
      <span className="post__date">
        {TimeBetween(timeNow, props.data.postDate)}
      </span>
    </div>
  );
};

export default PostHeader;

PostHeader.propTypes = {
  data: PropTypes.object,
};
