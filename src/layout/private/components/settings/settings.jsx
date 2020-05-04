import React from "react";
import "./settings.css";
import { Link } from "react-router-dom";

export const Settings = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Link to="home">
          <button
            className="btn btn-primary"
            style={{ margin: "20px", width: "400px" }}
          >
            BACK TO MAIN
          </button>
        </Link>
      </div>
      <div className="settings">
        <h4>Settings</h4>
        <div>
          <img
            src="https://img.icons8.com/bubbles/50/000000/upload.png"
            alt="pic"
          />
          <p>Upload data</p>
        </div>
        <button className="btn btn-primary">SAVE</button>
      </div>
    </div>
  );
};
