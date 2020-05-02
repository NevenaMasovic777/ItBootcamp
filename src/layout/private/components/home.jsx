import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h2>Welcome</h2>
      <ul>
        <li>
          <Link to="/polls">Polls</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </>
  );
};
