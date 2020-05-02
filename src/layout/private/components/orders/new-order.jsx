import React from "react";
import Button from "react-bootstrap/Button";

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
          <h3>Restaurant name</h3>
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
            <input
              type="number"
              min="0"
              max="20"
              style={{ marginRight: "20px" }}
            />
            <Button variant="success" size="sm">
              ADD
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
            <input
              type="number"
              min="0"
              max="20"
              style={{ marginRight: "20px" }}
            />
            <Button variant="success" size="sm">
              ADD
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
            <input
              type="number"
              min="0"
              max="20"
              style={{ marginRight: "20px" }}
            />
            <Button variant="success" size="sm">
              ADD
            </Button>
          </div>
        </div>
      </div>

      <div className="shopping-cart">
        <h4>Total:</h4>
        <p>Meal name</p>
        <hr />
        <p>total price</p>
        <Button variant="primary" size="sm">
          SEND
        </Button>
      </div>
    </div>
  );
};
