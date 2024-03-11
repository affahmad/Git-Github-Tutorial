import React from "react";

const Scores = (props) => {
  return (
    <div className="scoreCard">
      <div className="scores">
        <div className="userScore score">Player {props.userScore}</div>
        <div className="computerScore score">Computer {props.compScore}</div>
      </div>
      <p className="back">{20 - props.count} Try remaining out of 20</p>
    </div>
  );
};

export default Scores;
