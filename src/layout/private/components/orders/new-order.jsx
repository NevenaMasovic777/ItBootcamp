import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const NewOrder = () => {
  return (
    <div>
      <div className="meals-container">
        <div className="restaurant-name">
          <div>
            <img
              src="https://img.icons8.com/bubbles/50/000000/restaurant.png"
              alt="pic"
            />
          </div>
          <h3>Burito madre</h3>
        </div>

        <div className="meals-list">
          <div className="single-meal">
            <div style={{ marginRight: "20px", display: "inline-block" }}>
              <img
                src="https://img.icons8.com/bubbles/50/000000/restaurant.png"
                alt="pic"
              />
            </div>
            <label htmlFor="name" style={{ marginRight: "20px" }}>
              Meal name
            </label>
            <label style={{ marginRight: "20px" }}>360</label>
            <input
              type="number"
              value="2"
              min="0"
              max="20"
              style={{ marginRight: "20px" }}
            />
            <Button variant="success" size="sm">
              Add
            </Button>
          </div>
          <div className="single-meal">
            <div style={{ marginRight: "20px", display: "inline-block" }}>
              <img
                src="https://img.icons8.com/bubbles/50/000000/restaurant.png"
                alt="pic"
              />
            </div>
            <label htmlFor="name" style={{ marginRight: "20px" }}>
              Meal name
            </label>
            <label style={{ marginRight: "20px" }}>400</label>
            <input
              type="number"
              value="2"
              min="0"
              max="20"
              style={{ marginRight: "20px" }}
            />
            <Button variant="success" size="sm">
              Add
            </Button>
          </div>
          <div className="single-meal">
            <div style={{ marginRight: "20px", display: "inline-block" }}>
              <img
                src="https://img.icons8.com/bubbles/50/000000/restaurant.png"
                alt="pic"
              />
            </div>
            <label htmlFor="name" style={{ marginRight: "20px" }}>
              Meal name
            </label>
            <label style={{ marginRight: "20px" }}>340</label>
            <input
              type="number"
              value="5"
              min="0"
              max="20"
              style={{ marginRight: "20px" }}
            />
            <Button variant="success" size="sm">
              Add
            </Button>
          </div>
        </div>
      </div>

      <div className="shopping-cart">
        <h4>Total:</h4>
        <p>2 x Meal name</p>
        <p>price: 360</p>
        <hr />
        <p>total price: 720</p>
        <Link to="orderID">
          <Button variant="primary" size="sm">
            SEND
          </Button>
        </Link>
      </div>
    </div>
  );
};
