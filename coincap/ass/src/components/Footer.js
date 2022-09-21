import "./footer.css";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="foot-cont">
      <div>
        <h3>COINCAP.IO</h3>
        <p>Methodology</p>
        <p>Support</p>
        <p>Our API</p>
        <p>Rate Comparison</p>
        <p>Careers</p>
      </div>
      <div>
        <h3>LEGALS</h3>
        <p>Terms of Servics</p>
        <p>Privacy Policy</p>
        <h3>DISCLAIMER</h3>
        <p>
          Neither ShapeShift AG nor CoinCap are in any way associated with
          CoinMarketCap, LLC or any of its goods and services.
        </p>
      </div>
      <div>
        <h3>FOLLOW US</h3>
        <div style={{display:"flex"}}>
          <p>
            <AiOutlineTwitter style={{ color: "white", fontSize: "40px" }} />
          </p>
          <p>
            <BsFacebook style={{ color: "white", fontSize: "40px" }} />
          </p>
        </div>
      </div>
      <div>
        <h3>COINCAP APP AVAILABLE ON</h3>
        <img
          style={{ height: "40px" }}
          src="https://coincap.io/static/images/stores/google_play.svg"
          alt=""
        />
        <img
          style={{ height: "40px" }}
          src="https://coincap.io/static/images/stores/apple_store.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
