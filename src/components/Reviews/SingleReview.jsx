import React from "react";
import propTypes from "prop-types";
import SVGIcon from "../SVGIcon/SVGIcon";
import { CardContainer } from "../CardContainer/CardContainer";
import "./single-review.scss";

const Review = (props) => {
  const { username, comment, rating } = props;

  return (
    <div className="review">
      <CardContainer styleName="card-container--shadow">
        <div className="review__wrapper">
          <div className="review__username">{username}</div>
          <p className="review__text">{comment}</p>
          <div className="review__rating">
            <div className="review_rating-svg">
              <SVGIcon name="starFilled" />
            </div>
            <span className="review__rating-number">{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default Review;

Review.propTypes = {
  username: propTypes.string,
  comment: propTypes.string,
  rating: propTypes.number,
};
