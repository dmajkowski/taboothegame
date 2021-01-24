import { useState } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import WordBox from "./WordBox";
import GamingButton from "./GamingButton";
import Timer from "./Timer";
import TeamScore from './TeamScore';
import GamePopup from './GamePopup';

function Game() {
  const [activeTeam, setActiveTeam] = useState("Team 1", "Team2"); //Obecnie grająca drużyna - domyślnie 1
  const [maxTime, setMaxTime] = useState(15);
  const [currentScore, setCurrentScore] = useState({
    team1Score: 10,
    team2Score: 20,
  }); //obecny wynik kazdej z druzyn

  const [words, setWords] = useState([
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

  const currentWordSet = words[0];

  const changeActiveTeam = (time) => {
    if (time === 0) {
      setActiveTeam(activeTeam === 'Team 1' ? 'Team2' : 'Team 1');
    }
  }

  return (
    <Router>
      <div className="app">
        <header>Taboo The Game</header>
        <main className="main">
          <GamePopup />
          <div className="currentPlayer">Teraz grają {activeTeam}</div>
          <div className="scores">
            <TeamScore currentScore={currentScore} />
          </div>
          <Timer maxTime={maxTime} timeLeft={changeActiveTeam} />
          <WordBox currentWordSet={currentWordSet} />
          <div className="gaming-buttons">
            <GamingButton />
            <GamingButton />
            <GamingButton />
          </div>
        </main>
        <footer>Copyright</footer>
      </div>
    </Router>
  );
}

export default Game;
