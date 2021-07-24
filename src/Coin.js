import React from "react";
import "./Coin.css";
const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="row coin-row">
        <div className="col-md-3 coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <p className="col-md-2 coin-price">{price.toLocaleString()} INR</p>
        <p className="col-md-2 coin-volume">{volume.toLocaleString()} INR</p>
        {priceChange < 0 ? (
          <p className="col-md-1 coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="col-md-1 coin-percent green">
            {priceChange.toFixed(2)}%
          </p>
        )}
        <p className="col-md-4 coin-marketcap">
          Market Cap: {marketcap.toLocaleString()} INR
        </p>
      </div>
    </div>
  );
};

export default Coin;
