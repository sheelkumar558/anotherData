import "./home.css";
import React from "react";
import Showdata from "./Showdata";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="main">
      <div className="home">
        <div>
          <h3>MARKET CAP</h3>
          <h3>$1.17T</h3>
        </div>
        <div>
          <h3>EXCHANGE VOL</h3>
          <h3>$50.91B</h3>
        </div>
        <div>
          <h3>ASSETS</h3>
          <h3>2,295</h3>
        </div>
        <div>
          <h3>EXCHANGE</h3>
          <h3>73</h3>
        </div>
        <div>
          <h3>MARKET</h3>
          <h3>13,999</h3>
        </div>
        <div>
          <h3>BTC DOM INDEX</h3>
          <h3>31.6%</h3>
        </div>
      </div>
      <div className="show">
        <Showdata />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
