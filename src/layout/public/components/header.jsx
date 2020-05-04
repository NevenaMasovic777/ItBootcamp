import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>Welcome</p>
        <Link to="home">
          <img
            src="https://img.icons8.com/color/48/000000/kawaii-taco.png"
            alt="pic"
          />
        </Link>
      </div>
      <hr></hr>
      
    </>
  );
};
