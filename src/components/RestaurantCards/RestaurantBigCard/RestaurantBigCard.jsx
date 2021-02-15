import React, { useState, useEffect, useRef } from "react";
import PropTypes, { string } from "prop-types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Button } from "../../Button/Button";
import { RestWebAddress } from "../../RestaurantInfo/RestWebAddress/RestWebAddress";
import { Link } from "../../Link/Link";
import "./restaurant-big-card.scss";

export const RestaurantBigCard = (props) => {
  //Toggles between classes 'expanded' and 'collapsed':
  const [expanded, setExpanded] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const toggledClass = expanded
    ? "restaurant-card__description restaurant-card__description--expanded"
    : "restaurant-card__description restaurant-card__description--collapsed";

  //Changes checkins' number after button is clicked:
  const [checkinNumberState, setCheckinNumberState] = useState({
    checkinNumber: props.checkins,
    clicked: false,
  });

  const updateCheckinNumber = () => {
    if (checkinNumberState.clicked) {
      setCheckinNumberState({
        checkinNumber: checkinNumberState.checkinNumber - 1,
        clicked: false,
      });
    } else {
      setCheckinNumberState({
        checkinNumber: checkinNumberState.checkinNumber + 1,
        clicked: true,
      });
    }
  };

  const handleClick = () => {
    updateCheckinNumber();
    setButtonClicked(!buttonClicked);
  };

  //Adds READ MORE / READ LESS only if there is an overflow and reacts to window resize event:
  const [overflowActive, setOverflowActive] = useState(false);

  const isEllipsisActive = (element) => {
    if (element !== undefined && element !== null) {
      return (
        element.offsetHeight < element.scrollHeight ||
        element.offsetWidth < element.scrollWidth
      );
    }
  };

  const paragraph = useRef(null);

  useEffect(() => {
    let par = paragraph.current;
    window.addEventListener("resize", setOverflowActive(isEllipsisActive(par)));
    return () =>
      window.removeEventListener(
        "resize",
        setOverflowActive(isEllipsisActive(par))
      );
  }, []);

  return (
    <div className="restaurant-big-card">
      <RestaurantCard
        customClass="restaurant-card__top--fixed"
        checkins={checkinNumberState.checkinNumber}
        image={props.image}
        title={props.title}
        rating={props.rating}
        categories={props.categories}
        hours={props.hours}
      >
        <div className="restaurant-card__bottom">
          <RestWebAddress
            className="restaurant-contact__text--link"
            icon="Globe"
            text={props.web
              .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
              .split("/")}
            href={props.web}
          />
          <RestWebAddress icon="MapPin" text={props.address} />
          <p className={toggledClass} ref={paragraph}>
            {props.description}
          </p>
          <div className="restaurant-card__button-field">
            {overflowActive && (
              <Link handleClick={() => setExpanded(!expanded)}>
                {expanded ? "Read less" : "Read more"}
              </Link>
            )}
            <Button
              className="button button--enabled"
              typeName="button"
              handleClick={handleClick}
            >
              {buttonClicked ? "check-out" : "check-in"}
            </Button>
          </div>
        </div>
      </RestaurantCard>
    </div>
  );
};

RestaurantBigCard.propTypes = {
  web: PropTypes.string,
  address: PropTypes.string,
  checkins: PropTypes.number,
  rating: PropTypes.array,
  categories: PropTypes.array,
  image: PropTypes.string,
  title: PropTypes.string,
  hours: PropTypes.string,
  description: PropTypes.string,
  toggleClass: string,
};
