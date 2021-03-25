import "../styles/TeamScore.css"

const TeamScore = ({ currentScore }) => {
    const displayPlayersAndScores = () => {
        return Object.keys(currentScore).map((player) => {
            return (
                <div className={`${player}`} key={player}>{player === "team1Score" ? "Drużyna czerwona" : "Drużyna niebieska"} : {currentScore[player]}</div>
            );
        })
    }
    return (
        <>
            {displayPlayersAndScores()}
        </>
    );
}

export default TeamScore;