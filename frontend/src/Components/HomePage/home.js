import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import "./home.css";
// import Loader from "../views/Loader/Loader.js";
// import {useAlert} from "react-alert";

const Home = () => {
  return (
    <Fragment>
      <div className="home-container">
        <div className="banner">
          <h1>
            Welcome To <span style={{ fontWeight: "200" }}>WatchBot</span>
          </h1>

          <h2>Find Amazing Feature of Managing</h2>

          <div className="homeBtn">
            <Link to="/register">
              <button>Client</button>
            </Link>

            <Link to="/premise">
              <button>Admin</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
