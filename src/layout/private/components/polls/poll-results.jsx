import React from "react";
import { Link } from "react-router-dom";

export const PollResults = () => {
  return (
    <div className="results">
      <div style={{ marginTop: "30px" }}>
        <label htmlFor="label1">
          <b>Poll name</b>
        </label>
        <label
          htmlFor="label1"
          style={{ display: "inline-block", marginLeft: "20px" }}
        >
          <b>Date: 07/22/2020</b>
        </label>
      </div>
      <hr />
      <div className="restaurant-votes">
        <p>Mc Donalds - 15%</p>
        <p>Burito madre - 75%</p>
      </div>
      <div className="total">
        <p>Voted: 75%</p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Restaurants:</h3>
        <div className="restaurant">
          <div style={{ marginRight: "20px", display: "inline-block" }}>
            <img
              src="https://img.icons8.com/bubbles/50/000000/restaurant.png"
              alt="pic"
            />
          </div>
          <label htmlFor="name" style={{ marginRight: "20px" }}>
            Burito madre
          </label>
          <input type="checkbox" />
        </div>
        <div className="restaurant">
          <div style={{ marginRight: "20px", display: "inline-block" }}>
            <img
              src="https://img.icons8.com/bubbles/50/000000/restaurant.png"
              alt="pic"
            />
          </div>
          <label htmlFor="name" style={{ marginRight: "20px" }}>
            Mc Donalds
          </label>
          <input type="checkbox" />
        </div>
        <div className="restaurant">
          <div style={{ marginRight: "20px", display: "inline-block" }}>
            <img
              src="https://img.icons8.com/bubbles/50/000000/restaurant.png"
              alt="pic"
            />
          </div>
          <label htmlFor="name" style={{ marginRight: "20px" }}>
            Caribic
          </label>
          <input type="checkbox" />
        </div>
        <div style={{ marginTop: "30px" }}>
          <button className="btn btn-success">VOTE</button>
        </div>
      </div>

      <Link to="home">
        <button
          className="btn btn-primary"
          style={{ marginTop: "30px", width: "600px" }}
        >
          END POLL
        </button>
      </Link>
    </div>
  );
};
