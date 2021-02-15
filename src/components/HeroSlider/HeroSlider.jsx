import React from "react";
import Carousel from "components/Carousel/Carousel";
import "./hero-slider.scss";

export const HeroSlider = () => {
  return (
    <>
      <Carousel
        blockStyles="hero"
        slidesStyles="hero__slides"
        contentStyles="hero__content"
        navStyles="hero__nav"
        paginationContainerStyles="hero__pagination-container"
        paginationStyles="hero__pagination hero__pagination--default"
        choosedPaginationStyles="hero__pagination hero__pagination--choosed"
        infoStyles="hero__info"
      ></Carousel>
    </>
  );
};
