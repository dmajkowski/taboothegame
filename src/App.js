
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import Game from './components/Game';
import "./styles/App.css"

function App() {

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <header className="header"><h1>Witaj w grze taboo!</h1></header>
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
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
