import React, { useEffect } from "react";
import propTypes from "prop-types";
import SingleReview from "components/Reviews/SingleReview";
import "./reviews-list.scss";

const ReviewsList = (props) => {
  //checks the position of review items. If it overflows the set height, it is set to hidden
  const reviewPosition = () => {
    const reviews = document.querySelectorAll(".reviews-list > .review");
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].offsetTop + reviews[i].offsetHeight > 560) {
        reviews[i].style.display = "none";
      }
    }
  };

  const reviewsLengthCheck = () => {
    if (props.reviews.length > 0) return true;
    else return false;
  };

  useEffect(() => {
    reviewPosition();
  });

  return (
    <div className="reviews-list">
      {reviewsLengthCheck() ? (
        props.reviews.map((review) => {
          return (
            <SingleReview
              key={review.id}
              username={review.userName}
              comment={review.comment}
              rating={review.rating}
            />
          );
        })
      ) : (
        <span className="reviews-list__no-reviews">No reviews yet!</span>
      )}
    </div>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      userName: propTypes.string,
      comment: propTypes.string,
      rating: propTypes.number,
    })
  ),
};
