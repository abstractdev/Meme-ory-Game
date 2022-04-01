import React from 'react'
import '../Styles/Score.css'

function Score(props) {
  const {currentScore, scoreHistory} = props;
  const scoreHistoryClone = scoreHistory.map((e) => e);
  scoreHistoryClone.sort((a, b) => b - a);
  const highScore = scoreHistoryClone[0];

  return (
    <div className='score-container'>
      <div className="current-score">{`Current Score: ${currentScore}`}</div>
      <div className="high-score">{`High Score: ${highScore}`}</div>
    </div>
  )
}

export default Score