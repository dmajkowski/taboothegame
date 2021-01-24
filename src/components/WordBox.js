import ForbiddenWord from "./ForbiddenWord"

import '../styles/WordBox.css'

const WordBox = ({ currentWordSet, currentWordSet: { word, forbiddenWords } }) => {
    const displayForbiddenWord = () => {
        return forbiddenWords.map(forbiddenWord => {
            return <ForbiddenWord forbiddenWord={forbiddenWord} />
        })
    }
    return (
        <div className="wordbox">
            <div className="guessWord">{word}</div>
            <div>
                Zakazane słowa:
                {displayForbiddenWord()}
            </div>
        </div>
    )
};

export default WordBox;