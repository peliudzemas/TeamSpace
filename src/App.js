import React, { useEffect, useState } from "react";
import Layout from "components/mainLayout/Layout";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const App = () => {
  const [path, setPath] = useState();
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      setPath(pathname);
    }, [pathname]);

    return null;
  }

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Layout path={path} />
      </Router>
    </div>
  );
};

export default App;
