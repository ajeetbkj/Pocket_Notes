import React, { useState, useEffect } from "react";
import "./home.scss";
import bg from "../../image/bg.png";
import lock from "../../image/lock.png";
import Modal from "../Modal/Modal";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="center-content">
            <img src={bg} alt=""></img>
            <h2>Pocket Notes</h2>
            <p>
              Send and receive messages without keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
          <div className="bottom-content">
            <p>
              <img src={lock} alt=""></img> end-to-end encrypted
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
