import React from "react";
import "../Styles/Score.css";
import github from "../GitHub-Mark-Light-32px.png";

function Score({ currentScore, scoreHistory }) {
  const scoreHistoryClone = scoreHistory.map((e) => e);
  scoreHistoryClone.sort((a, b) => b - a);
  const highScore = scoreHistoryClone[0];

  return (
    <div className="score-container">
      <div className="current-score">{`Current Score: ${currentScore}`}</div>
      <a
        className="github-link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/abstractdev"
      >
        <img className="github-logo" src={github} alt="github link" />
        abstractdev
      </a>
      <div className="high-score">{`High Score: ${highScore}`}</div>
    </div>
  );
}

export default Score;
