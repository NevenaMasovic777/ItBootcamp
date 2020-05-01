import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

export const NewPoll = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Create new poll</h1>

      <div style={{ margin: "20px" }}>
        <input type="text" placeholder="Search" />
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
      <div className="restaurant-select">
        <DropdownButton title="Select restaurant" id="bg-nested-dropdown">
          <Dropdown.Item>Restaurant name</Dropdown.Item>
          <Dropdown.Item>Restaurant name</Dropdown.Item>
          <Dropdown.Item>Restaurant name</Dropdown.Item>
        </DropdownButton>
        <button type="button" className="btn btn-success btn-sm">
          <span className="glyphicon glyphicon-ok"></span>ADD
        </button>
      </div>
      <div className="restaurant-list">
        <h3>
          <b>Restaurant list: </b>
        </h3>

        <div className="restaurant">
          <div style={{ marginRight: "20px", display: "inline-block" }}>
            <img
              src="https://img.icons8.com/bubbles/50/000000/restaurant.png"
              alt="pic"
            />
          </div>
          <label htmlFor="name" style={{ marginRight: "20px" }}>
            Restaurant name
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
            Restaurant name
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
            Restaurant name
          </label>
          <Button variant="danger" size="sm">
            REMOVE
          </Button>
        </div>
      </div>
    </div>
  );
};
