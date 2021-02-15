import React, { useRef } from "react";
import PropTypes from "prop-types";
import Divider from "../../../../Divider/Divider";
import { CardContainer } from "../../../../CardContainer/CardContainer";
import BirthdayContent from "../BirthdayContent";
import Comments from "../../../Comments/Comments";
import AddComment from "../../../Comments/AddComment";
import UsersReactions from "../../../UsersReactions/UsersReactions";

const BirthdayCard = (props) => {
  const commentInput = useRef();
  const commentIconHandle = () => {
    commentInput.current.focus();
  };

  //sort comments by date
  props.commentsList.sort(function (a, b) {
    let keyA = new Date(a.date),
      keyB = new Date(b.date);

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  return (
    <div className="newsFeed__card post__card">
      <CardContainer styleName="card-container--shadow">
        <BirthdayContent
          userImage={props.data.userImage}
          userName={props.data.userName}
          birthdayDate={props.data.birthdayDate}
        />
        <UsersReactions
          type={props.type}
          likes={props.likes}
          reaction={props.reaction}
          onReactionClick={props.onReactionClick}
          commentIconHandle={commentIconHandle}
          commentCount={props.commentsCount}
        />
        <Divider />
        <div className="comment-section">
          {props.commentsList.map((comment, index) => (
            <Comments
              key={index}
              username={comment.userName}
              comment={comment.comment}
            />
          ))}
        </div>
        {props.commentsList.length === 0 ? null : <Divider />}
        <AddComment
          avatar={props.avatar}
          submit={props.submitHandler}
          isEmpty={props.isCommentEmpty}
          commentText={props.commentField}
          onBlur={props.handleBlur}
          handleValueChange={props.handleValueChange}
          commentInput={commentInput}
        />
      </CardContainer>
    </div>
  );
};

BirthdayCard.displayName = "BirthdayCard";

export default BirthdayCard;

BirthdayCard.propTypes = {
  data: PropTypes.object,
  userName: PropTypes.string,
  avatar: PropTypes.string,
  commentsList: PropTypes.array,
  onReactionClick: PropTypes.func,
  reaction: PropTypes.bool,
  commentsCount: PropTypes.number,
  type: PropTypes.string,
  likes: PropTypes.number,
  submitHandler: PropTypes.func,
  commentField: PropTypes.any,
  handleValueChange: PropTypes.func,
  isCommentEmpty: PropTypes.bool,
  handleBlur: PropTypes.func,
};
