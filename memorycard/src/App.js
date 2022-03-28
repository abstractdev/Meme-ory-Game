import React, {useState, useEffect} from 'react'
import Header from './Components/Header';
import Score from './Components/Score';
import { card1, card2, card3, card4, card5, card6, card7, card8, card9 } from './Data/CardData';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9
  ]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <Score />
    </div> 
  );
}

export default App;
