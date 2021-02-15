import React, { useState } from "react";
import PropTypes from "prop-types";
import { CardContainer } from "../CardContainer/CardContainer";
import { Rating } from "../Rating/Rating";
import { HeartButton } from "../HeartButton/HeartButton";
import { Link } from "../Link/Link";
import { Button } from "../Button/Button";
import "./restaurant-interactions-banner.scss";
import Modal from "components/Modal/Modal";
import InputField from "components/InputField/InputField";
import { Validators } from "components/InputField/inputValidators";

export const RestaurantInteractionsBanner = (props) => {
  const [checkinNumberState, setCheckinNumberState] = useState({
    checkinNumber: props.checkins,
    clicked: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailInputField, setEmailInputField] = useState("");
  const [commentInputField, setCommentInputField] = useState("");

  const updateCheckinNumber = () => {
    if (checkinNumberState.clicked) {
      setCheckinNumberState({
        checkinNumber: props.checkins,
        clicked: false,
      });
    } else {
      setCheckinNumberState({
        checkinNumber: checkinNumberState.checkinNumber + 1,
        clicked: true,
      });
    }
  };
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    updateCheckinNumber();
    setButtonClicked(!buttonClicked);
  };

  return (
    <div className="restaurant-interactions-banner">
      <CardContainer styleName="card-container--colored">
        <div className="restaurant-interactions-banner__banner-flex">
          <div className="restaurant-interactions-banner__rating-heart">
            <Rating rating={props.rating} />
            <div className="restaurant-interactions-banner__heart-button-box">
              <HeartButton />
            </div>
          </div>
          <p className="restaurant-interactions-banner__check-in-textbox">
            {checkinNumberState.checkinNumber} people already checked-in!
          </p>
          <div className="restaurant-interactions-banner__link-button">
            <Link handleClick={() => setIsModalOpen(true)}>Invite</Link>
            <Button
              className="button button--enabled"
              typeName="button"
              handleClick={handleClick}
            >
              {buttonClicked ? "check-out" : "check-in"}
            </Button>
          </div>
        </div>
      </CardContainer>
      <Modal
        open={isModalOpen}
        heading={"Invite"}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <div className="restaurant-interactions-banner__modal-input">
          <InputField
            label="email"
            htmlFor="email"
            id="email"
            value={emailInputField}
            type="email"
            placeholder="Your friend's email address"
            validators={[
              { check: Validators.email, message: "email is not valid" },
            ]}
            required={true}
            onChange={(value) => setEmailInputField(value)}
          />
        </div>
        <div className="restaurant-interactions-banner__modal-input">
          <InputField
            label="comment"
            htmlFor="comment"
            id="comment"
            value={commentInputField}
            onChange={(value) => setCommentInputField(value)}
          />
        </div>
        <div className="restaurant-interactions-banner__modal-button">
          <Button
            className={
              !Validators.email(emailInputField)
                ? "button button--enabled"
                : "button button--disabled"
            }
            isDisabled={!!Validators.email(emailInputField)}
            typeName="button"
            handleClick={() => {
              setIsModalOpen(false);
              setEmailInputField("");
              setCommentInputField("");
            }}
          >
            Invite
          </Button>
        </div>
      </Modal>
    </div>
  );
};

RestaurantInteractionsBanner.propTypes = {
  rating: PropTypes.array,
  checkins: PropTypes.number,
};
