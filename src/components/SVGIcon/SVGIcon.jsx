import React from "react";
import { ReactComponent as BookmarkIcon } from "../../assets/bookmarkIcon.svg";
import { ReactComponent as ChevronRightIcon } from "../../assets/chevronRightIcon.svg";
import { ReactComponent as CompassIcon } from "../../assets/compassIcon.svg";
import { ReactComponent as HeaderLogo } from "../../assets/headerLogo.svg";
import { ReactComponent as HeaderFullLogo } from "../../assets/headerFullLogo.svg";
import { ReactComponent as HomeIcon } from "../../assets/homeIcon.svg";
import { ReactComponent as Confetti } from "../../assets/confetti.svg";
import { ReactComponent as ConfettiCircle } from "../../assets/confettiCircle.svg";
import { ReactComponent as ConfettiStar } from "../../assets/confettiStar.svg";
import { ReactComponent as OpenPresent } from "../../assets/openPresent.svg";
import { ReactComponent as PresentBtn } from "../../assets/presentBtn.svg";
import { ReactComponent as PresentBtnColored } from "../../assets/presentBtnColored.svg";
import { ReactComponent as CommentBtn } from "../../assets/commentBtn.svg";
import { ReactComponent as HeartBtnColored } from "../../assets/heartBtnColored.svg";
import { ReactComponent as HeartBtn } from "../../assets/heartBtn.svg";
import { ReactComponent as StarEmpty } from "../../assets/starEmpty.svg";
import { ReactComponent as StarFilled } from "../../assets/starFilled.svg";
import { ReactComponent as User } from "../../assets/userIcon.svg";
import { ReactComponent as Thunderstorm } from "../../assets/weather/thunderstorm.svg";
import { ReactComponent as Sun } from "../../assets/weather/sun.svg";
import { ReactComponent as Snow } from "../../assets/weather/snow.svg";
import { ReactComponent as Rain } from "../../assets/weather/rain.svg";
import { ReactComponent as Cloud } from "../../assets/weather/cloud.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Book } from "../../assets/book.svg";
import { ReactComponent as Door } from "../../assets/door.svg";
import { ReactComponent as EllipseGrey } from "../../assets/ellipseGrey.svg";
import { ReactComponent as Ramen } from "../../assets/food/ramen.svg";
import { ReactComponent as Brunch } from "../../assets/food/brunch.svg";
import { ReactComponent as Pizza } from "../../assets/food/pizza.svg";
import { ReactComponent as Pancakes } from "../../assets/food/pancakes.svg";
import { ReactComponent as Salads } from "../../assets/food/salads.svg";
import { ReactComponent as Sandwich } from "../../assets/food/sandwich.svg";
import { ReactComponent as Burger } from "../../assets/food/burger.svg";
import { ReactComponent as Sushi } from "../../assets/food/sushi.svg";
import { ReactComponent as Soups } from "../../assets/food/soups.svg";
import { ReactComponent as Kebab } from "../../assets/food/kebab.svg";
import { ReactComponent as Sweets } from "../../assets/food/sweets.svg";
import { ReactComponent as Grill } from "../../assets/food/grill.svg";
import { ReactComponent as Globe } from "../../assets/globe.svg";
import { ReactComponent as MapPin } from "../../assets/mapPin.svg";
import { ReactComponent as PlayIcon } from "../../assets/playIcon.svg";
import { ReactComponent as ButtonArrow } from "../../assets/buttonArrow.svg";
import { ReactComponent as DropdownArrow } from "../../assets/dropdownArrow.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settingsIcon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logoutIcon.svg";
import { ReactComponent as NotificationBell } from "../../assets/notification.svg";
import { ReactComponent as CheckedNotificationBell } from "../../assets/checkedNotificationBell.svg";
import { ReactComponent as InformationMapPin } from "../../assets/information/clock.svg";
import { ReactComponent as InformationPhone } from "../../assets/information/globe.svg";
import { ReactComponent as InformationGlobe } from "../../assets/information/mapPin.svg";
import { ReactComponent as InformationClock } from "../../assets/information/phone.svg";
import { ReactComponent as X } from "../../assets/x.svg";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as Available } from "../../assets/available.svg";
import { ReactComponent as HeartBtnBold } from "../../assets/heartBtnBold.svg";
import { ReactComponent as AvailableProduct } from "../../assets/availableProduct.svg";
import { ReactComponent as NotAvailableProduct } from "../../assets/notAvailableProduct.svg";
import { ReactComponent as Search } from "../../assets/searchIcon.svg";
import { ReactComponent as Cancel } from "../../assets/cancel.svg";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as ProgressBar } from "../../assets/progressBar.svg";
import propTypes from "prop-types";

const SVGIcon = (props) => {
  switch (props.name) {
    case "home":
      return <HomeIcon className={props.className} />;
    case "bookmark":
      return <BookmarkIcon className={props.className} />;
    case "compass":
      return <CompassIcon className={props.className} />;
    case "chevron-right":
      return <ChevronRightIcon className={props.className} />;
    case "logo":
      return <HeaderLogo className={props.className} />;
    case "fullLogo":
      return <HeaderFullLogo className={props.className} />;
    case "confetti":
      return <Confetti className={props.className} />;
    case "confettiCircle":
      return <ConfettiCircle className={props.className} />;
    case "confettiStar":
      return <ConfettiStar className={props.className} />;
    case "openPresent":
      return <OpenPresent className={props.className} />;
    case "presentBtn":
      return <PresentBtn className={props.className} />;
    case "presentBtnColored":
      return <PresentBtnColored className={props.className} />;
    case "commentBtn":
      return <CommentBtn className={props.className} />;
    case "heartBtnColored":
      return <HeartBtnColored className={props.className} />;
    case "heartBtn":
      return <HeartBtn className={props.className} />;
    case "starEmpty":
      return <StarEmpty className={props.className} />;
    case "starFilled":
      return <StarFilled className={props.className} />;
    case "user":
      return <User className={props.className} />;
    case "Thunderstorm":
      return <Thunderstorm />;
    case "Sunny":
      return <Sun />;
    case "Snow":
      return <Snow />;
    case "Light shower":
      return <Rain />;
    case "Cloudy":
      return <Cloud />;
    case "Phone":
      return <Phone />;
    case "Book":
      return <Book />;
    case "Door":
      return <Door />;
    case "Ramen":
      return <Ramen />;
    case "Brunch":
      return <Brunch />;
    case "Pizza":
      return <Pizza />;
    case "Pancakes":
      return <Pancakes />;
    case "Salads":
      return <Salads />;
    case "Sandwich":
      return <Sandwich />;
    case "Burger":
      return <Burger />;
    case "Sushi":
      return <Sushi />;
    case "Soups":
      return <Soups />;
    case "Kebab":
      return <Kebab />;
    case "Sweets":
      return <Sweets />;
    case "Grill":
      return <Grill />;
    case "ellipseGrey":
      return <EllipseGrey />;
    case "Globe":
      return <Globe />;
    case "MapPin":
      return <MapPin />;
    case "play":
      return <PlayIcon />;
    case "buttonArrow":
      return <ButtonArrow className={props.className} />;
    case "dropdown":
      return <DropdownArrow className={props.className} />;
    case "settings":
      return <SettingsIcon className={props.className} />;
    case "logout":
      return <LogoutIcon className={props.className} />;
    case "notificationBell":
      return <NotificationBell className={props.className} />;
    case "checkedNotificationBell":
      return <CheckedNotificationBell />;
    case "informationClock":
      return <InformationClock />;
    case "informationGlobe":
      return <InformationGlobe />;
    case "informationMapPin":
      return <InformationMapPin />;
    case "informationPhone":
      return <InformationPhone />;
    case "X":
      return <X className={props.className} />;
    case "check":
      return <Check />;
    case "available":
      return <Available className={props.className} />;
    case "heartBtnBold":
      return <HeartBtnBold className={props.className} />;
    case "none":
      return null;
    case "availableProduct":
      return <AvailableProduct />;
    case "notAvailableProduct":
      return <NotAvailableProduct />;
    case "search":
      return <Search className={props.className} />;
    case "cancel":
      return <Cancel />;
    case "calendar":
      return <Calendar />;
    case "progressBar":
      return <ProgressBar />;
    default:
      return "error";
  }
};

export default SVGIcon;

SVGIcon.propTypes = {
  name: propTypes.string,
  className: propTypes.string,
};
