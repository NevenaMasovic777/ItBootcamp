import React from "react";
import { NewPoll } from "./new-poll";
import { PollResults } from "./poll-results";
import "./polls.css"



export const Polls = () => {
  return (
    <div>
        <NewPoll></NewPoll>
        <PollResults></PollResults>
    </div>
  );
};
