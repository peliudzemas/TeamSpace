import React, { useState } from "react";
import PropTypes from "prop-types";
import "./list-item-card.scss";
import { CardContainer } from "components/CardContainer/CardContainer";
import SVGIcon from "components/SVGIcon/SVGIcon";
import { Rating } from "components/Rating/Rating";
import { HeartButton } from "components/HeartButton/HeartButton";
import { Link } from "components/Link/Link";
import { Button } from "components/Button/Button";
import { Ratings } from "components/Rating/maxRatings";

export const ListItemCard = (props) => {
  const {
    image,
    author,
    address,
    brand,
    title,
    name,
    bookedUntil,
    favourite,
    rating,
    quantity,
    openModal,
  } = props;

  const productSubtitle = author ?? brand ?? address;
  const productTitle = title ?? name;
  const productBookedUntil = bookedUntil && bookedUntil.replace(/-/g, "/");

  const productTitleLengthOverflow = () => {
    if (window.innerWidth > 1380) {
      return productTitle.length > 50;
    } else if (window.innerWidth > 1180) {
      return productTitle.length > 32;
    } else if (window.innerWidth > 1080) {
      return productTitle.length > 25;
    } else if (window.innerWidth > 1024) {
      return productTitle.length > 32;
    }
    return productTitle.length > 24;
  };

  const [viewMore, setViewMore] = useState(false);
  return (
    <CardContainer styleName="card-container--shadow">
      <div className="list-item-card">
        <div className="list-item-card__info">
          <img
            className="list-item-card__image"
            src={image}
            alt={productTitle}
          />
          <div className="list-item-card__description">
            <div className="list-item-card__subtitle">{productSubtitle}</div>
            <div
              className={
                viewMore
                  ? "list-item-card__title"
                  : "list-item-card__title list-item-card__title--hidden"
              }
            >
              {productTitle}
            </div>
            {productBookedUntil === "null" ||
            productBookedUntil === null ||
            new Date(productBookedUntil) < new Date() ? (
              <div className="list-item-card__availability">
                <SVGIcon name="availableProduct" />
                <div className="list-item-card__availability-text">
                  available
                </div>
              </div>
            ) : (
              <div className="list-item-card__availability">
                <SVGIcon name="notAvailableProduct" />
                <div className="list-item-card__availability-text">
                  booked until {productBookedUntil}
                </div>
              </div>
            )}
            {typeof quantity !== "undefined" ? (
              <div className="list-item-card__quantity">
                quantity: {quantity}
              </div>
            ) : (
              <div className="list-item-card__rating">
                <Rating
                  rating={Ratings.calculateRating(
                    rating.score,
                    rating.userCount
                  )}
                />
              </div>
            )}
          </div>
        </div>
        <div className="list-item-card__interaction">
          <div className="list-item-card__heart">
            <HeartButton isChecked={favourite} />
          </div>
          <div className="list-item-card__buttons">
            {productTitleLengthOverflow() && (
              <Link
                styleName="list-item-card__link"
                handleClick={() => {
                  setViewMore(!viewMore);
                }}
              >
                {viewMore ? "view less" : "view more"}
              </Link>
            )}
            <Button
              className={
                !(
                  productBookedUntil === "null" ||
                  productBookedUntil === null ||
                  new Date(productBookedUntil) < new Date()
                )
                  ? "list-item-card__button list-item-card__button--disabled"
                  : "list-item-card__button list-item-card__button--enabled"
              }
              isDisabled={
                !(
                  productBookedUntil === "null" ||
                  productBookedUntil === null ||
                  new Date(productBookedUntil) < new Date()
                )
              }
              typeName="button"
              handleClick={() => openModal()}
            >
              book
            </Button>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

ListItemCard.propTypes = {
  image: PropTypes.string,
  author: PropTypes.string,
  address: PropTypes.string,
  brand: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  bookedUntil: PropTypes.string,
  rating: PropTypes.object,
  quantity: PropTypes.number,
  favourite: PropTypes.bool,
  openModal: PropTypes.func,
};
