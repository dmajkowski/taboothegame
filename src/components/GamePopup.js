
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
                Teraz grają {props.activeTeam}
                <button onClick={countToGameStart}>Start Game</button>
                {counter}
            </div>
        </div>
    );
}

export default GamePopup;