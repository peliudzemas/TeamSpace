import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../../SVGIcon/SVGIcon";
import "../stories-content.scss";

const VideoContent = ({ postVideo }) => {
  return (
    <div className="post__content">
      <div className="post__image-wrapper">
        <img className="post__image" src={postVideo} alt="video feed" />
        <button className="post__video-play-button">
          <SVGIcon name="play" className="post__svg" />
        </button>
      </div>
    </div>
  );
};

export default VideoContent;

VideoContent.propTypes = {
  postVideo: PropTypes.string,
};
