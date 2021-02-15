import React, { Component } from "react";
import "./user-profile.scss";
import UserAvatar from "../UserAvatar/UserAvatar";
import SVGIcon from "../SVGIcon/SVGIcon";
import fakeData from "../../db.json";

class UserProfile extends Component {
  constructor() {
    super();

    this.state = { showMenu: false };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu() {
    if (!this.state.showMenu) {
      document.addEventListener("click", this.closeMenu, false);
    } else {
      document.removeEventListener("click", this.closeMenu, false);
    }

    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  }

  closeMenu(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.showMenu();
  }

  render() {
    return (
      <div
        className="widget-container"
        ref={(node) => {
          this.node = node;
        }}
      >
        <div className="profile">
          <button onClick={this.showMenu} className="profile__btn">
            <UserAvatar imageSrc={fakeData.userData.userImage} size={40} />
            <SVGIcon name="dropdown" className="profile__dropdown-arrow" />
          </button>
          {this.state.showMenu && (
            <nav className="drop-menu">
              <div className="drop-menu__arrow-up"></div>
              <ul className="drop-menu__wrapper">
                <li className="drop-menu__item">
                  <a href="/progress" className="drop-menu__item-link">
                    <SVGIcon name="settings" />
                    <span className="drop-menu__text">Settings</span>
                  </a>
                </li>
                <li className="drop-menu__item">
                  <a href="/" className="drop-menu__item-link">
                    <SVGIcon name="logout" />
                    <span className="drop-menu__text">Log out</span>
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    );
  }
}

export default UserProfile;
