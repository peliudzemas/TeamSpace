import React from "react";
import sanitizeHtml from "sanitize-html";
import PropTypes from "prop-types";
import "../stories-content.scss";

const PostContent = ({ postText }) => {
  const cleanPost = sanitizeHtml(postText, {
    allowedTags: ["b", "i", "em", "strong", "br", "div", "p"],
  });
  return (
    <div className="post__content">
      <div className="post__text-wrapper">
        <div
          className="post__text"
          dangerouslySetInnerHTML={{ __html: cleanPost }}
        ></div>
      </div>
    </div>
  );
};

export default PostContent;

PostContent.propTypes = {
  postText: PropTypes.string,
};
