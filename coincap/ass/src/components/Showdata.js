import "./home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Showdata = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    handleData();
  }, []);
  const handleData = () => {
    axios.get(`https://api.coincap.io/v2/assets`).then((res) => {
      setData(res.data.data);
    });
  };
  console.log(data);
  return (
    <div className="cont-show">
      <div className="show-div">
        <div className="rank-div">
          <p className="ptag">Rank</p>
          <p className="ptag">Name</p>
        </div>
        <div className="rank-div">
          <p className="ptag">Price</p>
          <p className="ptag">Market Cap</p>
          <p className="ptag">
            {`VWAP(24Hr)`}
          </p>
          <p className="ptag">Supply</p>
          <p className="ptag">Volume(24Hr)</p>
          <p className="ptag">Change(24Hr)</p>
        </div>
      </div>
      <div>
        {data.map((d) => {
          return (
            <div key={d.id} className="show-d">
              <div className="rank-div">
                <p className="pta">{d.rank}</p>
                <p className="pta">{d.name}</p>
             
                <p className="pta">{`$${Number(d.priceUsd).toFixed(2)}`}</p>
                <p className="pta">{`$${(Number(d.marketCapUsd)/1000000000).toFixed(2)}b`}</p>
                <p className="pta">{`$${Number(d.vwap24Hr).toFixed(2)}`}</p>
                <p className="pta">{`${(Number(d.supply)/1000000).toFixed(2)}m`}</p>
                <p className="pta">{`$${(Number(d.volumeUsd24Hr)/1000000000).toFixed(2)}b`}</p>
                <p className="pta">{`${(Number(d.changePercent24Hr).toFixed(2))}%`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Showdata;
