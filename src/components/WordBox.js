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
    }, [props.dataFetched])
    return (
        <div className="wordbox">
            <div className="guessWord">{props.a && props.a.tabooWord.toUpperCase()}</div>
            <div className="forbiddenwords">
                Zakazane słowa:
                {props.a && displayForbiddenWord()}
            </div>
        </div>
    )
};

export default WordBox;