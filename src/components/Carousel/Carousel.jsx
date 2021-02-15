import React, { useState } from "react";
import "./carousel.scss";
import db from "../../db.json";
import { CardContainer } from "components/CardContainer/CardContainer";
import { LabelRed } from "components/Text/LabelRed/LabelRed";
import { DescriptionGrey } from "components/Text/DescriptionGrey/DescriptionGrey";
import { RestTitle } from "components/RestaurantInfo/RestTitle/RestTitle";
import { Button } from "components/Button/Button";
import SliderNavButtons from "components/SliderNavButtons/SliderNavButtons";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Carousel = (props) => {
  const restaurantList = db.restaurants.restaurantList;
  const slides1 = restaurantList.filter((restaurant) => restaurant.image);
  const slides = slides1.slice(0, 5);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [current, setCurrent] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [redirectLink, setRedirect] = useState(null);

  const toLeft = () => {
    setCurrent((prevSlide) => {
      return prevSlide !== 0 ? prevSlide - 1 : (prevSlide = slides.length - 1);
    });
    setCurrentY((prevSlide) => {
      return prevSlide !== 0 ? prevSlide - 1 : (prevSlide = slides.length - 1);
    });
    setX((prevX) => {
      return current !== 0 ? prevX + 100 : (prevX = (slides.length - 1) * -100);
    });
    setY((prevY) => {
      return currentY !== 0
        ? prevY + 100
        : (prevY = (slides.length - 1) * -100);
    });
  };

  const toRight = () => {
    setCurrent((prevSlide) => {
      return prevSlide !== slides.length - 1 ? prevSlide + 1 : (prevSlide = 0);
    });
    setCurrentY((prevSlide) => {
      return prevSlide !== slides.length - 1 ? prevSlide + 1 : (prevSlide = 0);
    });
    setX((prevX) => {
      return current !== slides.length - 1 ? prevX - 100 : (prevX = 0);
    });
    setY((prevY) => {
      return currentY !== slides.length - 1 ? prevY - 100 : (prevY = 0);
    });
  };

  const toRightTimesX = (k) => {
    for (let i = 0; i < k; i++) {
      toRight();
    }
  };

  const toLeftTimesX = (k) => {
    for (let i = 0; i < k; i++) {
      toLeft();
    }
  };

  const learnMoreLink = (title) => {
    setRedirect(title);
  };

  if (redirectLink !== null) {
    return <Redirect to={"eat-out//" + redirectLink} />;
  }
  return (
    <CardContainer styleName="card-container--shadow">
      <div className={`carousel ${props.blockStyles}`}>
        <div className={`carousel__slides ${props.slidesStyles}`}>
          {slides.map((slide, index) => (
            <img
              className={`carousel__image ${props.imageStyles}`}
              key={index}
              src={slide.image}
              alt=""
              style={{ transform: `translateX(${x}%)` }}
            />
          ))}
        </div>
        <div className={`carousel__content ${props.contentStyles}`}>
          <div
            className={`carousel__pagination ${props.paginationContainerStyles}`}
          >
            {[...Array(5)].map((slide, index) => {
              return index === current ? (
                <div
                  className={`${props.choosedPaginationStyles}`}
                  key={index}
                />
              ) : index === current + 1 ? (
                <button
                  className={`${props.paginationStyles}`}
                  onClick={() => toRight()}
                  key={index}
                />
              ) : index === current + 2 ? (
                <button
                  className={`${props.paginationStyles}`}
                  onClick={() => toRightTimesX(2)}
                  key={index}
                />
              ) : index === current + 3 ? (
                <button
                  className={`${props.paginationStyles}`}
                  onClick={() => toRightTimesX(3)}
                  key={index}
                />
              ) : index === current + 4 ? (
                <button
                  className={`${props.paginationStyles}`}
                  onClick={() => toRightTimesX(4)}
                  key={index}
                />
              ) : index === current - 1 ? (
                <button
                  className={`${props.paginationStyles}`}
                  onClick={() => toLeft()}
                  key={index}
                />
              ) : index === current - 2 ? (
                <button
                  className={`${props.paginationStyles}`}
                  onClick={() => toLeftTimesX(2)}
                  key={index}
                />
              ) : index === current - 3 ? (
                <button
                  className={`${props.paginationStyles}`}
                  onClick={() => toLeftTimesX(3)}
                  key={index}
                />
              ) : index === current - 4 ? (
                <button
                  className={`${props.paginationStyles}`}
                  onClick={() => toLeftTimesX(4)}
                  key={index}
                />
              ) : (
                <></>
              );
            })}
          </div>
          <div className={`carousel__nav ${props.navStyles}`}>
            <SliderNavButtons
              buttonIcon="buttonArrow"
              leftClicked={() => toLeft()}
              rightClicked={() => toRight()}
            />
          </div>
          <div className={`carousel__info ${props.infoStyles}`}>
            {slides.slice(0, 5).map((slide, index) => (
              <div
                key={index}
                style={{ transform: `translateY(${y}%)` }}
                className="hero__info-wrap"
              >
                <LabelRed labelStyle="hero__label" text={slide.slogan} />
                <RestTitle title={slide.name} titleStyle="hero__title" />
                <DescriptionGrey
                  descStyle="hero__desc"
                  descWrapStyle="hero__desc-wrap"
                  text={slide.description}
                />
                <Button
                  className="button button--slider"
                  tabIndex={index === current ? 0 : -1}
                  handleClick={() => learnMoreLink(slide.name)}
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Carousel;

Carousel.propTypes = {
  blockStyles: PropTypes.string,
  slidesStyles: PropTypes.string,
  imageStyles: PropTypes.string,
  contentStyles: PropTypes.string,
  navStyles: PropTypes.string,
  leftButton: PropTypes.object,
  rightButton: PropTypes.object,
  paginationContainerStyles: PropTypes.string,
  paginationStyles: PropTypes.string,
  choosedPaginationStyles: PropTypes.string,
  content: PropTypes.object,
  infoStyles: PropTypes.string,
};
