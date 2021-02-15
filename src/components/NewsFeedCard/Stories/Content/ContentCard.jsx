import React, { useRef } from "react";
import PropTypes from "prop-types";
import PhotoContent from "./PhotoContent";
import VideoContent from "./VideoContent";
import PostContent from "./PostContent";
import StoriesHeader from "../../StoriesHeader/StoriesHeader";
import UserReactions from "../../UsersReactions/UsersReactions";
import Comments from "../../Comments/Comments";
import AddComment from "../../Comments/AddComment";
import Divider from "../../../Divider/Divider";
import { CardContainer } from "../../../CardContainer/CardContainer";

const ContentCard = (props) => {
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

  const typeOfContent = () => {
    if (props.data.type === "video") {
      return <VideoContent postVideo={props.data.postVideo} />;
    } else if (props.data.type === "photo") {
      return <PhotoContent postImage={props.data.postImage} />;
    } else if (props.data.type === "post") {
      return <PostContent postText={props.data.postText} />;
    } else return null;
  };

  return (
    <div className="newsFeed__card post__card">
      <CardContainer styleName="card-container--shadow">
        <StoriesHeader data={props.data} />
        {props.data.type === "post" ? <Divider /> : null}
        {typeOfContent()}
        <UserReactions
          type={props.type}
          likes={props.likes}
          reaction={props.reaction}
          onReactionClick={props.onReactionClick}
          commentIconHandle={commentIconHandle}
          commentCount={props.commentsCount}
        />
        <Divider />
        <div className="comment-section">
          {props.commentsList.length === 0
            ? "Be the first one to comment!"
            : props.commentsList.map((comment, index) => (
                <Comments
                  key={index}
                  username={comment.userName}
                  comment={comment.comment}
                />
              ))}
        </div>
        <Divider />
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

export default ContentCard;

ContentCard.propTypes = {
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
