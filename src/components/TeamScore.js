const TeamScore = ({ currentScore }) => {
    const displayPlayersAndScores = () => {
        return Object.keys(currentScore).map((player) => {
            return (
                <div className="score" key={player}>Drużyna {player.slice(4, 5)}: {currentScore[player]}</div>
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