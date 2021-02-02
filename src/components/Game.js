import { useState } from "react";

import WordBox from "./WordBox";
import GamingButton from "./GamingButton";
import Timer from "./Timer";
import TeamScore from './TeamScore';
import GamePopup from './GamePopup';
import Scoreboard from './Scoreboard'
import "../styles/Game.css"


function Game() {
  const [activeTeam, setActiveTeam] = useState("Team 1", "Team2"); //Obecnie grająca drużyna - domyślnie 1
  const [remainingRounds, setRemainingRounds] = useState(2)
  const [maxTime, setMaxTime] = useState(5);
  const [currentScore, setCurrentScore] = useState({
    team1Score: 10,
    team2Score: 20,
  }); //obecny wynik kazdej z druzyn
  const [displayPopup, setDisplayPopup] = useState(true);
  const [startTimer, setStartTimer] = useState(false);
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
      setRemainingRounds(remainingRounds - 0.5);
      setDisplayPopup(true);
      setStartTimer(false);
    }
  }

  const startCountingTime = () => {
    setStartTimer(true);
  };

  return (
    <>
      {remainingRounds ?
        <div className="game">
          <header>Taboo The Game</header>
          <main className="main">
            {displayPopup && <GamePopup activeTeam={activeTeam} setDisplayPopup={setDisplayPopup} displayPopup={displayPopup} startCountingTime={startCountingTime} />}
            <div className="currentPlayer">Teraz grają {activeTeam}</div>
            <div className="scores">
              <TeamScore currentScore={currentScore} />
            </div>
            <Timer maxTime={maxTime} changeActiveTeam={changeActiveTeam} startTimer={startTimer} />
            <WordBox currentWordSet={currentWordSet} />
            <div className="gaming-buttons">
              <GamingButton />
              <GamingButton />
              <GamingButton />
            </div>
          </main>
          <footer>Copyright</footer>
        </div> :
        <Scoreboard winner={currentScore.team1Score > currentScore.team2Score ? "Team1" : "Team2"} />
      }

    </>
  );
}

export default Game;
