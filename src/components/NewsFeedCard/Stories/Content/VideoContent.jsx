import React, { useState } from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../../SVGIcon/SVGIcon";
import "../stories-content.scss";

const VideoContent = ({ postVideo, videoRef, onVideoPlaying }) => {
  const [buttonDisplay, setButtonDisplay] = useState("block");
  const [showControls, setShowControls] = useState(false);

  const onVideoButtonClick = () => {
    if (
      videoRef.current.currentTime > 0 &&
      !videoRef.current.ended &&
      !videoRef.current.paused
    ) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const onVideoMouseMove = () => {
    setShowControls(true);
  };

  const onVideoMouseLeave = () => {
    setShowControls(false);
  };

  const onVideoPlay = () => {
    setButtonDisplay("none");
    onVideoPlaying();
  };

  const onVideoPause = () => {
    setButtonDisplay("block");
  };

  return (
    <div className="post__content">
      <div
        className="post__video-wrapper"
        onMouseMove={onVideoMouseMove}
        onMouseLeave={onVideoMouseLeave}
      >
        <video
          className="post__video"
          ref={videoRef}
          onPlay={onVideoPlay}
          onPause={onVideoPause}
          controls={showControls}
        >
          <source src={postVideo} />
          <track kind="captions" />
        </video>
        <button
          onClick={onVideoButtonClick}
          className="post__video-play-button"
          style={{ display: buttonDisplay }}
        >
          <SVGIcon name="play" className="post__svg" />
        </button>
      </div>
    </div>
  );
};

export default VideoContent;

VideoContent.propTypes = {
  postVideo: PropTypes.string,
  videoRef: PropTypes.any,
  onVideoPlaying: PropTypes.func,
};
