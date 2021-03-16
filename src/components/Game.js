import { useState } from "react";

import WordBox from "./WordBox";
import GamingButton from "./GamingButton";
import Timer from "./Timer";
import TeamScore from './TeamScore';
import GamePopup from './GamePopup';
import Scoreboard from './Scoreboard'
import Menu from './Menu'
import "../styles/Game.css"


function Game() {
  const [activeTeam, setActiveTeam] = useState("Team 1", "Team2"); //Obecnie grająca drużyna - domyślnie 1
  const [remainingRounds, setRemainingRounds] = useState(2)
  const [maxTime, setMaxTime] = useState(10);
  const [currentScore, setCurrentScore] = useState({
    team1Score: 0,
    team2Score: 0,
  }); //obecny wynik kazdej z druzyn
  const [displayPopup, setDisplayPopup] = useState(true);
  const [startTimer, setStartTimer] = useState(false);
  const [words, setWords] = useState([
    {
      word: "0ksiezyc",
      forbiddenWords: ["wilkolak", "cos", "cosik", "cosik"],
    },
    {
      word: "1ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "2ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "3ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "4ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "5ksiezyc",
      forbiddenWords: ["wilkolak", "cos", "cosik", "cosik"],
    },
    {
      word: "6ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "7ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "8ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "9ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "10ksiezyc",
      forbiddenWords: ["wilkolak", "cos", "cosik", "cosik"],
    },
    {
      word: "11ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "12ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "13ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "14ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "15ksiezyc",
      forbiddenWords: ["wilkolak", "cos", "cosik", "cosik"],
    },
    {
      word: "16ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "17ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "18ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    },
    {
      word: "19ksiezyc",
      forbiddenWords: ["wilkolak", "wilkolak", "wilkolak", "cosik"],
    }
  ]); //Tablica obiektów ze słowami do odgadniecia i słowami zabronionymi
  const [currentWord, setCurrentWord] = useState();
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
  const updatePoints = (type) => {
    switch (type) {
      case "add":
        activeTeam === "Team 1" ? setCurrentScore((prevState) => ({
          ...currentScore,
          team1Score: prevState.team1Score + 1,
        })) : setCurrentScore((prevState) => ({
          ...currentScore,
          team2Score: prevState.team2Score + 1,
        }));
        break;
      case "remove":
        activeTeam === "Team 1" ? setCurrentScore((prevState) => ({
          ...currentScore,
          team1Score: prevState.team1Score - 1,
        })) : setCurrentScore((prevState) => ({
          ...currentScore,
          team2Score: prevState.team2Score - 1,
        }));
    }
  }
  const displayNewWord = () => {
    setCurrentWord(words.pop());
  }
  const correctAnswerProvided = () => {
    updatePoints("add");
    displayNewWord();
  }
  const inCorrectAnswerProvided = () => {
    updatePoints("remove");
    displayNewWord();
  }
  const displayWinner = (score) => {
    const teamsScoreDifference = score.team1Score - score.team2Score;
    if (teamsScoreDifference > 0) {
      return { winner: "Team1", pointsTeam1: score.team1Score, pointsTeam2: score.team2Score }
    } else if (teamsScoreDifference < 0) {
      return { winner: "Team2", pointsTeam1: score.team1Score, pointsTeam2: score.team2Score }
    } else if (teamsScoreDifference = 0) {
      return { winner: "Draw", pointsTeam1: score.team1Score, pointsTeam2: score.team2Score }
    }
  }

  return (
    <>
      <Menu />
      {remainingRounds ?//This will be replaced by routing
        <div className="game">
          <header>Taboo The Game</header>
          <main className="main">
            {displayPopup && <GamePopup activeTeam={activeTeam} setDisplayPopup={setDisplayPopup} displayPopup={displayPopup} startCountingTime={startCountingTime} />}
            <div className="currentPlayer">Teraz grają {activeTeam}</div>
            <div className="scores">
              <TeamScore currentScore={currentScore} />
            </div>
            <Timer maxTime={maxTime} changeActiveTeam={changeActiveTeam} startTimer={startTimer} />
            <WordBox displayNewWord={displayNewWord} a={currentWord} />
            <div className="gaming-buttons">
              <GamingButton type="incorrect" answerProvided={inCorrectAnswerProvided} />
              <GamingButton type="correct" answerProvided={correctAnswerProvided} />
            </div>
          </main>
          <footer>Copyright</footer>
        </div> :
        <Scoreboard scores={displayWinner(currentScore)} />
      }

    </>
  );
}

export default Game;
