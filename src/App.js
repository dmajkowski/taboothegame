
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";

import Scoreboard from './components/Scoreboard';
import Game from './components/Game';
import "./styles/App.css"



function App() {

  const [scores, setScores] = useState();

  const setScore = (score) => {
    const teamsScoreDifference = score.team1Score - score.team2Score;
    if (teamsScoreDifference > 0) {
      setScores({ winner: "Team1", pointsTeam1: score.team1Score, pointsTeam2: score.team2Score });
    } else if (teamsScoreDifference < 0) {
      setScores({ winner: "Team2", pointsTeam1: score.team1Score, pointsTeam2: score.team2Score });
    } else if (teamsScoreDifference === 0) {
      setScores({ winner: "Draw", pointsTeam1: score.team1Score, pointsTeam2: score.team2Score });
    }
  }

  return (
    <div className="container">
      <header className="header"><h1>Taboo the game</h1></header>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/mainmenu">
            <div className="mainmenu">
              <nav>
                <ul>
                  <li>
                    <Link to="/game">Zacznij gre</Link>
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Route>
          <Route path="/game"
            render={(props) => (
              <Game setScore={setScore} />
            )}
          />
          <Route path="/scoreboard"
            render={(props) => (
              <Scoreboard scores={scores} />
            )}
          />
          <Redirect from="/" to="/mainmenu" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;