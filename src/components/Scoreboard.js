const Scoreboard = (props) => {
    return (
        <div>
            <div>Wygrała drużyna {props.scores.winner}</div>
            <div>Wynik {props.scores.pointsTeam1} : {props.scores.pointsTeam2}</div>
        </div>
    );
}

export default Scoreboard;