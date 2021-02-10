
import { useState } from "react";
import "../styles/GamePopup.css"
import { ConsoleWriter } from "istanbul-lib-report";

const GamePopup = (props) => {
    const [counter, setCounter] = useState(5);
    const setVisibilityOfPopup = () => {
        props.setDisplayPopup(!props.displayPopup);
    }
    const countToGameStart = () => {
        let currentCounter = counter;
        const counterInterval = setInterval(() => {
            setCounter(--currentCounter);
            currentCounter === 0 && setVisibilityOfPopup();
            currentCounter === 0 && window.clearInterval(counterInterval);
            currentCounter === 0 && props.startCountingTime();
        }, 1000)
    }
    return (
        <div className="popup">
            <div className="popup-content">
                <div className="player">Teraz grają {props.activeTeam}</div>
                <div className={`countdown ${counter < 5 && "animate"}`}>{counter}</div>
                <button className="btn" onClick={countToGameStart}>Start Game</button>
            </div>
        </div>
    );
}

export default GamePopup;