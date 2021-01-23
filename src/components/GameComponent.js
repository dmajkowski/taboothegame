import { useState } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import TabooWordComponent from "./TabooWordComponent";
import GamingButtonComponent from "./GamingButtonComponent";
import TimerComponent from "./TimerComponent";
import PopupComponent from "./PopupComponent";

import "../styles/GameComponent.css";

function GameComponent() {
  const [activeTeam, setActiveTeam] = useState("Team 1"); //Obecnie grająca drużyna - domyślnie 1

  const [currentScore, setCurrentScore] = useState({
    team1Score: 10,
    team2Score: 20,
  }); //obecny wynik kazdej z druzyn

  const [guessWords, setGuessWords] = useState([
    {
      word: "ksiezyc",
      forbiddenWords: ["wilkolak", "cos", "cosik", "cosik"],
    },
    {
      word: "ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
  ]); //Tablica obiektów ze słowami do odgadniecia i słowami zabronionymi

  const [maxTime, setMaxTime] = useState(40);

  const [showPopup, setShowPopup] = useState(0);


  const openPopup = () =>{
    setShowPopup(1);
  }

  const closePopup = () =>{
    setShowPopup(0);
  }

  const startGame = () =>{
    openPopup();
  }


  return (
    <Router>
      <div className="app">
        <main className="main">
            {showPopup === 1 ? <PopupComponent closePopup={closePopup}/> : null};
          <p>Taboo The Game</p>
          <p>Teraz grają: {activeTeam}</p>

          <div className="scoreDisplay">
            <span>Team1 {currentScore.team1Score}</span>
            <span> {currentScore.team2Score} Team2 </span>
          </div>
          

          <TimerComponent maxTime={maxTime} openPopup={openPopup}/>
          <TabooWordComponent guessWords={guessWords} />

          <div className="gaming-buttons">
            <GamingButtonComponent />
            <GamingButtonComponent />
            <GamingButtonComponent />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default GameComponent;
