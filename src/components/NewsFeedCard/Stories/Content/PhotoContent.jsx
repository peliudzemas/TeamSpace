import React from "react";
import PropTypes from "prop-types";
import "../stories-content.scss";

const PhotoContent = ({ postImage }) => {
  return (
    <div className="post__content">
      <div className="post__image-wrapper">
        <img className="post__image" src={postImage} alt="post feed" />
      </div>
    </div>
  );
};

export default PhotoContent;

PhotoContent.propTypes = {
  postImage: PropTypes.string,
};
