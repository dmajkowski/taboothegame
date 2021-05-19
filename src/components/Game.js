import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"

import WordBox from "./WordBox";
import GamingButton from "./GamingButton";
import Timer from "./Timer";
import TeamScore from './TeamScore';
import GamePopup from './GamePopup';
import Scoreboard from './Scoreboard'
import HamburgerMenu from './HamburgerMenu'
import "../styles/Game.css"

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/firestore";


function Game(props) {

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

  const [activeTeam, setActiveTeam] = useState("Team1"); //Obecnie grająca drużyna - domyślnie 1
  const [remainingRounds, setRemainingRounds] = useState(1);
  const [maxTime, setMaxTime] = useState(10);
  const [currentScore, setCurrentScore] = useState({
    team1Score: 0,
    team2Score: 0,
  }); //obecny wynik kazdej z druzyn
  const [displayPopup, setDisplayPopup] = useState(true);
  const [startTimer, setStartTimer] = useState(false);
  const [words, setWords] = useState([]); //Tablica obiektów ze słowami do odgadniecia i słowami zabronionymi
  const [currentWord, setCurrentWord] = useState();
  const [dataFetched, setDataFetched] = useState(false);
  let history = useHistory();

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
      setActiveTeam(activeTeam === 'Team1' ? 'Team2' : 'Team1');
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
        activeTeam === "Team1" ? setCurrentScore((prevState) => ({
          ...currentScore,
          team1Score: prevState.team1Score + 1,
        })) : setCurrentScore((prevState) => ({
          ...currentScore,
          team2Score: prevState.team2Score + 1,
        }));
        break;
      case "remove":
        activeTeam === "Team1" ? setCurrentScore((prevState) => ({
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

  remainingRounds === 0 && props.setScore(currentScore);
  remainingRounds === 0 && history.push("/scoreboard")


  return (
    <>
      <HamburgerMenu />
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
      </div>
    </>
  );
}

export default Game;
