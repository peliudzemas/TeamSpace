import React, { useState } from "react";
import "./layout.scss";
import Header from "./layoutComponents/Header/Header";
import Navbar from "./layoutComponents/Navbar/Navbar";
import Content from "./layoutComponents/Content/Content";
import Footer from "./layoutComponents/Footer/Footer";
import { Login } from "pages/Login";
import propTypes from "prop-types";
import { ProgressIndicator } from "components/ProgressIndicator/ProgressIndicator";

const Layout = ({ path }) => {
  const [notification, setNotification] = useState(false);

  if (path === "/" || path === "/register") {
    return <Login />;
  } else if (path === undefined) {
    return <ProgressIndicator message="Loading..." />;
  } else {
    return (
      <div className="layout__wrapper">
        <header className="header__wrapper">
          <Header notification={notification} />
        </header>
        <Navbar />
        <main className="content__wrapper">
          <Content setNotification={() => setNotification(true)} path={path} />
        </main>
        <footer className="footer__wrapper">
          <Footer />
        </footer>
      </div>
    );
  }
};

export default Layout;

Layout.propTypes = {
  path: propTypes.string,
};
