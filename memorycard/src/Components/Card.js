import React from 'react'

function Card(props) {
  return (
    <div className="card-container" onClick={(event) => props.handleClick(event)}>
    {props.cards.map((e, index) => {
      return <div key={index} className={`card${index}`} data-id={e.cardId}>{e.cardId}</div>
    })}
    </div>
  )
}

export default Card