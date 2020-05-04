import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const NewPoll = () => {
  return (

<div style={{ textAlign: "center" }}>
      <div style={{ margin: "20px" }}>
        <label htmlFor="label1"><b>Poll name</b></label>
        <div style={{display:"inline-block", marginLeft:"20px"}}>
          <label htmlFor="label2">Date:</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2020-07-22"
            min="2020-01-01"
            max="2030-12-31"
          />
        </div>
      </div>
      <div className="restaurant-select">
        <input type="text" value="search restaurant"/>
      </div>
      <button className="btn btn-success">Search</button>
      <div className="restaurant-list">
        <h4>Added:</h4>
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
          <Button variant="danger" size="sm">
            REMOVE
          </Button>
        </div>

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
          <Button variant="danger" size="sm">
            REMOVE
          </Button>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Link to="results">
          <button className="btn btn-success">Create new poll</button>
        </Link>
      </div>
    </div>
    
  );
};
