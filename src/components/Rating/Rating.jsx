import React, { useState } from "react";
import PropTypes from "prop-types";
import "./rating.scss";
import { Ratings } from "./maxRatings";
import SVGIcon from "components/SVGIcon/SVGIcon";

export const Rating = ({ rating }) => {
  const [newRating, setRating] = useState(null);
  const [boxStatus, setWidth] = useState("rating__collapse");
  const [hovered, setHover] = useState(null);
  const [tabbed, setTabCount] = useState(null);
  const [ratingHeight, setHeight] = useState(null);

  const handleMouseEnter = (value) => {
    setHover(value);
    if (tabbed !== null) setHeight(null);
  };

  const handleMouseEnterBox = () => {
    setWidth("rating__expand");
    if (tabbed !== null) setHeight(null);
  };

  const handleMouseLeaveBox = () => {
    setWidth("rating__collapse");
    if (tabbed === 2) setHeight("second-rating-height");
    if (tabbed === 3) setHeight("third-rating-height");
    if (tabbed === 4) setHeight("fourth-rating-height");
    if (tabbed === 5) setHeight("fifth-rating-height");
  };

  const handleTab = (value) => {
    setTabCount(value);
    setHeight(null);
  };
  const handleFocus = () => {
    setWidth("rating__expand");
    setHeight(null);
  };
  const handleBlur = (value) => {
    setWidth("rating__collapse");
    if (tabbed === 2) setHeight("second-rating-height");
    if (tabbed === 3) setHeight("third-rating-height");
    if (tabbed === 4) setHeight("fourth-rating-height");
    if (tabbed === 5) setHeight("fifth-rating-height");
  };

  var final_rating;

  if (newRating == null) final_rating = rating[0];
  else final_rating = Ratings.finalRating(rating[1], rating[2], newRating);

  return (
    <div className="rating">
      <div
        className={boxStatus}
        onMouseEnter={() => handleMouseEnterBox()}
        onMouseLeave={() => handleMouseLeaveBox()}
      >
        <div className="rating__star-box">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <button
                key={i}
                onMouseEnter={() => handleMouseEnter(ratingValue)}
                onMouseLeave={() => setHover(null)}
                onKeyUp={() => handleTab(ratingValue)}
                onFocus={() => handleFocus()}
                onBlur={() => handleBlur(ratingValue)}
                onClick={() => setRating(ratingValue)}
              >
                <input
                  className="rating__input"
                  type="radio"
                  name="newRating"
                  value={ratingValue}
                  key={star}
                  tabIndex={0}
                />
                <SVGIcon
                  className="rating__star"
                  name={
                    ratingValue <= (newRating || hovered || tabbed)
                      ? "starFilled"
                      : "starEmpty"
                  }
                  key={i}
                />
              </button>
            );
          })}
        </div>
        <div className={ratingHeight}>{final_rating}</div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.array,
  newRating: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
