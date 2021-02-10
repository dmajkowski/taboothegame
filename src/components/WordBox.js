import { useEffect } from 'react';

import ForbiddenWord from "./ForbiddenWord"

import '../styles/WordBox.css'

const WordBox = (props) => {
    const displayForbiddenWord = () => {
        return props.a.forbiddenWords.map(forbiddenWord => {
            return <ForbiddenWord forbiddenWord={forbiddenWord} />
        })
    }
    useEffect(() => {
        props.displayNewWord()
    }, [])
    return (
        <div className="wordbox">
            <div className="guessWord">{props.a && props.a.word}</div>
            <div>
                Zakazane słowa:
                {props.a && displayForbiddenWord()}
            </div>
        </div>
    )
};

export default WordBox;