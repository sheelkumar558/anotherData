import "./nav.css"
import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-f-div">
        <h2>Coins</h2>
        <h2>Exchanges</h2>
        <h2>Swap</h2>
      </div>
      <div className="nav-s-div">
        <img style={{height:"40px"}} src="https://coincap.io/static/logos/black.svg" alt="" />
      </div>
      <div className="nav-t-div">
        <div>
          <BsSearch />
        </div>
        <div>
            <AiOutlineSetting/>
        </div>
        <div>
          <button type="">Cannect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
