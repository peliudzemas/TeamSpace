import React from "react";
import "./progress.scss";
import { CardContainer } from "components/CardContainer/CardContainer";
import PropTypes from "prop-types";

const Progress = ({ header, information }) => {
  return (
    <section className="progress">
      <CardContainer styleName="card-container--shadow progress__image-card">
        <h1 className="progress__header">404</h1>
        <img
          className="progress__image"
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
        <div className="progress__information">
          <h2 className="progress__information-header">{header}</h2>
          <div className="progress__information-text">{information}</div>
          <a
            href="http://localhost:3000/dashboard"
            alt="Go to Home Page"
            className="progress__information-button button button--enabled"
          >
            Go to Home
          </a>
        </div>
      </CardContainer>
    </section>
  );
};

export default Progress;

Progress.propTypes = {
  header: PropTypes.string,
  information: PropTypes.string,
};
