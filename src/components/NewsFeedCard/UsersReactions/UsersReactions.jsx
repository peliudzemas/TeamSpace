import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "../../SVGIcon/SVGIcon";

import "./users-reactions.scss";

const UsersReactions = (props) => {
  const {
    type,
    likes,
    reaction,
    onReactionClick,
    commentIconHandle,
    commentCount,
  } = props;

  //Determine which reaction data to take

  //Determine wether the post was reacted to and select icon
  const reactionIconSelect = () => {
    if (reaction) {
      if (type === "birthday") {
        return "presentBtnColored";
      } else if (type === "post" || type === "video" || type === "photo") {
        return "heartBtnColored";
      }
    } else {
      if (type === "birthday") {
        return "presentBtn";
      } else if (type === "post" || type === "video" || type === "photo") {
        return "heartBtn";
      }
    }
  };

  return (
    <div className="user-reactions">
      <div className="user-reactions__reaction">
        <button className="user-reactions__button" onClick={onReactionClick}>
          <SVGIcon
            name={reactionIconSelect()}
            className="user-reactions__reaction-icon svg-icon"
          />
        </button>
        <p className="user-reactions__reaction-count">{likes}</p>
      </div>
      <div className="user-reactions__comment">
        <button className="user-reactions__button" onClick={commentIconHandle}>
          <SVGIcon
            name="commentBtn"
            className="user-reactions__comment-icon svg-icon"
          />
        </button>
        <p className="user-reactions__comment-count">{commentCount}</p>
      </div>
    </div>
  );
};

export default UsersReactions;

UsersReactions.propTypes = {
  type: PropTypes.string,
  wishes: PropTypes.number,
  likes: PropTypes.number,
  reaction: PropTypes.bool,
  onReactionClick: PropTypes.func,
  commentIconHandle: PropTypes.func,
  commentCount: PropTypes.number,
};
