import { useState, useEffect } from "react";

import WordBox from "./WordBox";
import GamingButton from "./GamingButton";
import Timer from "./Timer";
import TeamScore from './TeamScore';
import GamePopup from './GamePopup';
import Scoreboard from './Scoreboard'
import Menu from './Menu'
import "../styles/Game.css"

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/firestore";


function Game() {

  // TODO: Replace the following with your app's Firebase project configuration
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  const firebaseConfig = {
    apiKey: "AIzaSyBYseLkrqHpp9QuknKFZ9lspI72IQRjHxU",
    authDomain: "taboo-b5dff.firebaseapp.com",
    projectId: "taboo-b5dff",
    storageBucket: "taboo-b5dff.appspot.com",
    messagingSenderId: "952354298632",
    appId: "1:952354298632:web:7b94053c1eb2a1595e2abd"
  };

  if (firebase.apps.length < 1) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();

  const [activeTeam, setActiveTeam] = useState("Team 1", "Team2"); //Obecnie grająca drużyna - domyślnie 1
  const [remainingRounds, setRemainingRounds] = useState(2)
  const [maxTime, setMaxTime] = useState(1000);
  const [currentScore, setCurrentScore] = useState({
    team1Score: 0,
    team2Score: 0,
  }); //obecny wynik kazdej z druzyn
  const [displayPopup, setDisplayPopup] = useState(true);
  const [startTimer, setStartTimer] = useState(false);
  const [words, setWords] = useState([]); //Tablica obiektów ze słowami do odgadniecia i słowami zabronionymi
  const [currentWord, setCurrentWord] = useState();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    db.collection("wordSet").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setWords(prevState => [...prevState, doc.data()]);
        setDataFetched(true);
      });
    });
    console.log("DATA FETCHED")
  }, []);

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
          <main className="main">
            {displayPopup && <GamePopup activeTeam={activeTeam === "Team1" ? "Czerwoni" : "Niebiescy"} setDisplayPopup={setDisplayPopup} displayPopup={displayPopup} startCountingTime={startCountingTime} />}
            <div className="scoredisplay">
              <TeamScore currentScore={currentScore} />
              <div className="currentPlayer">Teraz grają {activeTeam === "Team1" ? "CZERWONI" : "NIEBIESCY"}</div>
            </div>
            <Timer maxTime={maxTime} changeActiveTeam={changeActiveTeam} startTimer={startTimer} />
            <WordBox displayNewWord={displayNewWord} a={currentWord} dataFetched={dataFetched} />
            <div className="gaming-buttons">
              <GamingButton type="incorrect" answerProvided={inCorrectAnswerProvided} />
              <GamingButton type="correct" answerProvided={correctAnswerProvided} />
            </div>
          </main>
        </div> :
        <Scoreboard scores={displayWinner(currentScore)} />
      }
      <footer className="footer">
        <i class="far fa-copyright"></i>
        Taboo the game Copyright by Dariusz Majkowski
      </footer>
    </>
  );
}

export default Game;
