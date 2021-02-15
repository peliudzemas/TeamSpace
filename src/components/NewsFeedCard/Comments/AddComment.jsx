import React from "react";
import ContentEditable from "react-contenteditable";
import PropTypes from "prop-types";
import UserAvatar from "../../UserAvatar/UserAvatar";

import "./add-comment.scss";

const AddComment = (props) => {
  const {
    avatar,
    commentText,
    onBlur,
    handleValueChange,
    commentInput,
    isEmpty,
    submit,
  } = props;
  return (
    <div className="comment-add">
      <UserAvatar
        className="comment-add__userAvatar"
        size={24}
        imageSrc={avatar}
      />
      <form className="comment-add__form">
        <ContentEditable
          className="comment-add__textField"
          html={commentText}
          onBlur={onBlur}
          onChange={handleValueChange}
          disabled={false}
          innerRef={commentInput}
        ></ContentEditable>
        <input
          className="comment-add__submitButton"
          type="button"
          value="post"
          onClick={!isEmpty ? submit : null}
        />
      </form>
    </div>
  );
};

export default AddComment;

AddComment.propTypes = {
  avatar: PropTypes.string,
  isEmpty: PropTypes.bool,
  submit: PropTypes.func,
  commentText: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  commentInput: PropTypes.any,
  handleValueChange: PropTypes.func,
};
