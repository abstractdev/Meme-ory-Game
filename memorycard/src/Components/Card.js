import React from "react";

function Card({ cards, handleClick }) {
  return (
    <div className="card-container" onClick={(event) => handleClick(event)}>
      {cards.map((e, index) => {
        return (
          <div key={index}>
            <div className={`card`} data-id={e.cardId}>
              <img
                src={e.image}
                alt="meme"
                className={`card${index}-image`}
                data-id={e.cardId}
              />
              <div className={`card${index}-text`} data-id={e.cardId}>
                {e.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
