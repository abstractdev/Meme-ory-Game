import React, {useState, useEffect} from 'react'
import Header from './Components/Header';
import Score from './Components/Score';
import Card from './Components/Card';
import { cardArray } from './Data/CardData';
import './App.css';

function App() {
  const [cards, setCards] = useState(cardArray);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffleCards = () => {
    //get a Set of 9 numbers in randomized order
    const cardsClone = cardArray.map((e) => e)
    const set = new Set ();
    while (set.size < 9) {
      set.add(Math.floor(Math.random() * 9))
    }
    //give each card a random unique identifier
    const setClone = [];
    set.forEach((e) => setClone.push(e));
    for (let i = 0; i < cardsClone.length; i++) {
      cardsClone[i].randomId = setClone[i]
    }
    //sort the cards based on the random unique identifier
    const cardsCloneShuffled = cardsClone.sort((a, b) => a.randomId - b.randomId);
    //set cards state
    setCards([...cardsCloneShuffled]);
    return [...cardsCloneShuffled];
  }

  useEffect(() => {
    shuffleCards();
    console.log(cards);
  }, [])

  const handleClick = (event) => {
    console.log(event.target.dataset.id)
    // console.log(shuffleCards());
    console.log(cards)
    // switch (event.target.dataset.id) {
    //   case 'card0':
    //     setClickedCards([...clickedCards, ])
    
    //   default:
    //     break;
    }

  return (
    <div className="App">
      <Header />
      <Score />
        <Card handleClick = {handleClick} cards = {cards}/>
    </div>
  );
}

export default App;
