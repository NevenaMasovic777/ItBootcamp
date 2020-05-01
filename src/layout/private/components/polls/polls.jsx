import React from "react";
import "./polls.css"
import { Link } from "react-router-dom";



export const Polls = () => {
  return (
    <div>
      <ul>
        <li><Link to="newpoll">New  Poll</Link></li>
        <li><Link to="results">Poll results</Link></li>
      </ul>

    </div>
  );
};
