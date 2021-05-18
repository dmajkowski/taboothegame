import { Link } from "react-router-dom";

import HamburgerMenu from './HamburgerMenu'

import "../styles/Scoreboard.css"

const Scoreboard = (props) => {
    const displayWinner = () => {
        return (
            <h1>
                <div className="result">
                    {props.scores.winner !== "Draw" ?
                        `Wygrała druzyna : ${props.scores.winner}` :
                        "Remis"}
                </div>
                <div className="score">Wynik {props.scores.pointsTeam1} : {props.scores.pointsTeam2}</div>
            </h1>
        )

    }
    return (
        <>
            <HamburgerMenu />
            {displayWinner()}
            <Link to="/game"><button className="btn">Zacznij od nowa</button></Link>
        </>
    );
}

export default Scoreboard;