import React from "react";
import ContentEditable from "react-contenteditable";
import SVGIcon from "../SVGIcon/SVGIcon";
import { Button } from "../Button/Button";
import propTypes from "prop-types";
import "./new-post.scss";

const NewPost = (props) => {
  return (
    <div className="new-post">
      <h2 className="new-post__headline">Post a new story</h2>
      <div className="new-post__post-options">
        {props.buttonState.map((type, index) => {
          return (
            <button
              key={index}
              onClick={() => props.onItemClick(index)}
              className={`new-post__button ${
                type.selected ? `new-post__button--selected` : null
              }`}
            >
              {type.name}
            </button>
          );
        })}
      </div>
      {props.buttonState.map((type) => {
        if (type.name === "text" && type.selected) {
          return (
            <>
              <h3 className="new-post__sub-headline">Write your post</h3>
              <ContentEditable
                className="new-post__textField"
                html={props.modalCommentRef}
                onBlur={props.modalInputOnBlur}
                onChange={props.modalInputOnChange}
                disabled={false}
              ></ContentEditable>
            </>
          );
        } else if (
          (type.name === "photo" || type.name === "video") &&
          type.selected
        ) {
          return (
            <>
              <h3 className="new-post__sub-headline">
                {type.name === "photo" ? "Upload image" : "Upload video"}
              </h3>
              <div className="new-post__url-input">
                <input
                  type="url"
                  placeholder={`Paste ${
                    type.name === "photo" ? `Image` : `Video`
                  } URL`}
                  className="new-post__url-text"
                  value={props.inputValue}
                  onChange={props.onInputChange}
                />
                {props.inputValue.length > 0 ? (
                  <button
                    className={`new-post__cancel-button`}
                    onClick={props.onInputCancelClick}
                  >
                    <SVGIcon name="cancel" />
                  </button>
                ) : null}
              </div>
            </>
          );
        } else return null;
      })}
      <div className="new-post__submit-button-wrapper">
        <Button
          className="button button--text new-post__submit-button"
          handleClick={props.handleCancelClick}
        >
          Cancel
        </Button>

        <Button
          className={`button button--${
            props.isModalEmpty && props.inputValue === ""
              ? `disabled`
              : `enabled`
          } new-post__submit-button`}
          handleClick={
            props.isModalEmpty && props.inputValue === ""
              ? null
              : props.handleSubmitClick
          }
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default NewPost;

NewPost.propTypes = {
  handleCancelClick: propTypes.func,
  handleSubmitClick: propTypes.func,
  buttonState: propTypes.array,
  onItemClick: propTypes.func,
  inputValue: propTypes.string,
  onInputCancelClick: propTypes.func,
  onInputChange: propTypes.func,
  modalCommentRef: propTypes.any,
  modalInputOnBlur: propTypes.func,
  modalInputOnChange: propTypes.func,
  isModalEmpty: propTypes.bool,
};
