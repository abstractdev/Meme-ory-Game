import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Score from "./Components/Score";
import Card from "./Components/Card";
import Modal from "./Components/Modal";
import { cardArray } from "./Data/CardData";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [scoreHistory, setScoreHistory] = useState([0]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalScore, setModalScore] = useState(currentScore);

  const shuffleCards = () => {
    //get a Set of numbers in randomized order
    const cardsClone = cardArray.map((e) => e);
    const set = new Set();
    while (set.size < cardArray.length) {
      set.add(Math.floor(Math.random() * cardArray.length));
    }
    //give each card a random unique identifier
    const setClone = [];
    set.forEach((e) => setClone.push(e));
    for (let i = 0; i < cardsClone.length; i++) {
      cardsClone[i].randomId = setClone[i];
    }
    //sort the cards based on the random unique identifier
    const cardsCloneShuffled = cardsClone.sort(
      (a, b) => a.randomId - b.randomId
    );
    //set cards state
    setCards([...cardsCloneShuffled]);
    return [...cardsCloneShuffled];
  };
  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (clickedCards.length === 12) {
      setModalScore(currentScore);
      setModalIsVisible(true);
      setScoreHistory([...scoreHistory, currentScore]);
      setCurrentScore(0);
      setClickedCards([]);
    }
  }, [clickedCards]);

  const handleClick = (event) => {
    if (event.target.dataset.id) {
      //match dataset id and card id and add to clicked state
      const clickedCard = cardArray.filter((e) => {
        return e.cardId === parseInt(event.target.dataset.id);
      });
      //check if card is a duplicate
      //if card is a duplicate set score history
      if (clickedCards.some((e) => e.cardId === clickedCard[0].cardId)) {
        setModalScore(currentScore);
        setModalIsVisible(true);
        setScoreHistory([...scoreHistory, currentScore]);
        setCurrentScore(0);
        setClickedCards([]);
      } else {
        // set clicked cards state
        setClickedCards([...clickedCards, ...clickedCard]);
        //if not a duplicate, shuffle cards and continue game
        shuffleCards();
        //increment current score
        setCurrentScore((prev) => prev + 1);
        console.log(currentScore);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      {modalIsVisible && (
        <Modal
          modalIsVisible={modalIsVisible}
          setModalIsVisible={setModalIsVisible}
          modalScore={modalScore}
        />
      )}
      <Score currentScore={currentScore} scoreHistory={scoreHistory} />
      <Card handleClick={handleClick} cards={cards} />
    </div>
  );
}

export default App;
