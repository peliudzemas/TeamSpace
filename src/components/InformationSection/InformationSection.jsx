import React from "react";
import "./information-section.scss";
import { CardContainer } from "components/CardContainer/CardContainer";
import InformationCard from "./InformationCard/InformationCard";
import PropTypes from "prop-types";

const InformationSection = ({ address, phone, website, openingHours }) => {
  let workHours =
    openingHours[0].days +
    " " +
    openingHours[0].hours.substring(0, 2) +
    ":00 " +
    openingHours[0].hours.substring(3, 7) +
    ":00";

  const site = website.replace(/^(https:\/\/)|^(http:\/\/)/, "");

  return (
    <CardContainer styleName="card-container--shadow">
      <div className="information-section">
        <div className="information-section__column">
          <InformationCard
            icon="informationClock"
            title="Address"
            description={address}
          />
          <InformationCard
            icon="informationGlobe"
            title="Website"
            description={site}
            className="information-card__description--link"
            href={website}
          />
        </div>
        <div className="information-section__column">
          <InformationCard
            icon="informationPhone"
            title="Phone number"
            description={phone}
          />
          <InformationCard
            icon="informationMapPin"
            title="Work hours"
            description={workHours}
          />
        </div>
      </div>
    </CardContainer>
  );
};

export default InformationSection;

InformationSection.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  openingHours: PropTypes.array,
};
