import React from "react";
<<<<<<< HEAD
import { NewPoll } from "./new-poll";
import { PollResults } from "./poll-results";
import "./polls.css"
=======
import "./polls.css"
import { Link } from "react-router-dom";
>>>>>>> 54439e321f22962edb81f134aa6daf5f56503dad



export const Polls = () => {
  return (
    <div>
<<<<<<< HEAD
        <NewPoll></NewPoll>
        <PollResults></PollResults>
=======
      <ul>
        <li><Link to="newpoll">New  Poll</Link></li>
        <li><Link to="results">Poll results</Link></li>
      </ul>

>>>>>>> 54439e321f22962edb81f134aa6daf5f56503dad
    </div>
  );
};
