import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { Button } from "components/Button/Button";
import ReviewsList from "./ReviewsList";
import SingleReview from "components/Reviews/SingleReview";
import "./reviews-section.scss";
import Modal from "../Modal/Modal";

const ReviewsSection = (props) => {
  const [anyHidden, setAnyHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //Checks if at least one review item is hidden to show the button Show more
  const checkIfHidden = () => {
    const arr = document.querySelectorAll(".reviews-list > .review");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].style.display === "none") {
        setAnyHidden(true);
        break;
      } else {
        setAnyHidden(false);
      }
    }
  };

  //Checks for ESC key press to close modal
  const handleKeyDown = (ev) => {
    if (ev.keyCode === 27) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    checkIfHidden();
    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  });

  return (
    <>
      <ReviewsList reviews={props.reviews} />
      {anyHidden ? (
        <Button
          className="button button--enabled"
          type="button"
          handleClick={() => setIsOpen(true)}
        >
          Show more
        </Button>
      ) : null}
      <Modal
        open={isOpen}
        heading={"All reviews"}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="modal__restaurant-reviews">
          {props.reviews.map((review) => {
            return (
              <SingleReview
                key={review.id}
                username={review.userName}
                comment={review.comment}
                rating={review.rating}
              />
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default ReviewsSection;

ReviewsSection.propTypes = {
  reviews: propTypes.array,
};
